"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require('node:fs');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
require('dotenv').config();
const { DISCORD_TOKEN, CLIENTID } = process.env;
module.exports = (guildId) => {
    const commands = [];
    const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.ts'));
    for (const file of commandFiles) {
        const command = require(`./commands/${file}`);
        commands.push(command.data.toJSON());
    }
    const rest = new REST({ version: '9' }).setToken(DISCORD_TOKEN);
    rest.put(Routes.applicationGuildCommands(CLIENTID, guildId), { body: commands })
        .then(() => console.log('Successfully registered application commands.'))
        .catch(console.error);
};
//# sourceMappingURL=deploy-commands.js.map