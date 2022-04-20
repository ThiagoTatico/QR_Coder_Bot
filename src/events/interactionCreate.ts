// When the client is ready, run this code (only once)
const deploy = require("../deploy-commands")

module.exports = {
	name: 'ready',
	once: true,
	execute(client) {
		console.log(`Ready! Logged in as ${client.user.tag}`);
		const Guilds = client.guilds.cache.map(guild => guild.id);

		Guilds.forEach(id => deploy(id))
	},
};