"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('server')
        .setDescription('Replies with server info!'),
    async execute(interaction) {
        await interaction.reply(`Server name: ${interaction.guild.name}\n
    Total members: ${interaction.guild.memberCount}`);
    },
};
//# sourceMappingURL=server.js.map