const { SlashCommandBuilder } = require('@discordjs/builders');
export {};

module.exports = {
	data: new SlashCommandBuilder()
		.setName('server')
		.setDescription('Replies with server info!'),
	async execute(interaction) {
		await interaction.reply(`Server name: ${interaction.guild.name}\n
    Total members: ${interaction.guild.memberCount}`);
	},
};