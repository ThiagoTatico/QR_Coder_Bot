const { SlashCommandBuilder } = require('@discordjs/builders');
export {};

module.exports = {
	data: new SlashCommandBuilder()
		.setName('qr-code')
		.setDescription(' generates QR codes')
		.addStringOption(option => option.setName('input').setDescription('The input to echo back')),
	async execute(interaction) {
		const value: string = interaction.options.getString('input');
		const url: string = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${value}`;
		if (url) return interaction.reply(`${url}`);
		return interaction.reply('No option was provided!');
	},
};