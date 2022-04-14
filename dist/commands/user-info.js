"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { SlashCommandBuilder } = require('@discordjs/builders');
module.exports = {
    data: new SlashCommandBuilder()
        .setName('user-info')
        .setDescription('Display info about yourself.'),
    async execute(interaction) {
        return interaction.reply(`Your username: ${interaction.user.username}\nYour ID: ${interaction.user.id}`);
    },
};
//# sourceMappingURL=user-info.js.map