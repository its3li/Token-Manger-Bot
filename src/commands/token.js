const { SlashCommandBuilder } = require('discord.js');
module.exports = {
data: new SlashCommandBuilder()
.setName('tokens')
.setDescription('See how many tokens are in the bot.'),
async execute(interaction) {
const data = require('../ManageData.js');
const tokens = await data.getTokens();
let response = `Total number of tokens: ${tokens.length}\n`;
await interaction.reply(response);
}};

