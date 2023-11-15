const { SlashCommandBuilder } = require('discord.js');
module.exports = {
data: new SlashCommandBuilder()
.setName('ping')
.setDescription('Check the Ping.'),
async execute(interaction) {
const startTime = Date.now();
const pingMessage = await interaction.reply({ content: 'Pinging...' });
const endTime = Date.now();
const latency = endTime - startTime;
pingMessage.edit({
content: `Pong! Latency is **${latency}ms**. API Latency is **${interaction.client.ws.ping}ms**.`,
});},};


