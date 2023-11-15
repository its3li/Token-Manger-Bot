const { SlashCommandBuilder } = require('discord.js');
module.exports = {
data: new SlashCommandBuilder()
.setName('help')
.setDescription('Get commands.'),
async execute(interaction) {
const embed = {
color: 0x000000,
title: '**Command List**',
description: 'Commands!',
fields: [
{ name: '**add_token**', value: '**Add a new token to the database.**' },
{ name: '**join-server**', value: '**Add token to Server.**' },
{ name: '**ping**', value: '**Check the bot ping.**' },
{ name: '**set-about-me**', value: '**Set your about me information.**' },
{ name: '**set-hypesquad**', value: '**Change HypeSquad for all tokens.**' },
{ name: '**set-avatar**', value: '**Set the token\'s avatar.**' },
{ name: '**set-status**', value: '**Set the token\'s status.**' },
{ name: '**tokens**', value: '**View how many tokens are online.' },
],
footer: { text: 'The Project Is Made By Ali/Nix', icon_url: 'https://cdn1.iconfinder.com/data/icons/smartphone-flat-design/512/Smartphone_icon_17_File_Manager-512.png' },};
await interaction.reply({ embeds: [embed] });},};


