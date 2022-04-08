const fs = require('node:fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
require('dotenv').config();
const { DISCORD_TOKEN, CLIENTID, GUILDID} = process.env;
export {};

const commands = [];
const commandFiles: string[] = fs.readdirSync('./commands').filter(file => file.endsWith('.ts'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	commands.push(command.data.toJSON());
}

console.log('Successfully registered application commands.')