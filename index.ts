// Require the necessary discord.js classes
const fs = require('node:fs');
const { Client, Collection, Intents } = require('discord.js');
require('dotenv').config();
const deploy_commands = require("./deploy-commands")
const { DISCORD_TOKEN } = process.env;


// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// Call and execute the Event files
const eventFiles: string[] = fs.readdirSync('./events').filter(file => file.endsWith('.ts'));

for (const file of eventFiles) {
	const event = require(`./events/${file}`);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	}
	else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}

// Call and execute the Command files
client.commands = new Collection();
const commandFiles: string[] = fs.readdirSync('./commands').filter(file => file.endsWith('.ts'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	// Set a new item in the Collection
	// With the key as the command name and the value as the exported module :)
	client.commands.set(command.data.name, command);
}

// Login to Discord with your client's token
client.login(DISCORD_TOKEN);

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const command = client.commands.get(interaction.commandName);

	if (!command) return;

	try {
		await command.execute(interaction);
	}
	catch (error) {
		console.error(error);
		await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
	}

});

client.on("guildCreate", guild => {
	console.log("Joined a new guild: " + guild.name);
	deploy_commands(guild.id)
});