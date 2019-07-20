const Discord = require('discord.js');

// Fill add in your own developer token for your bot.
const discordToken = 'Bot-Token';

// Create a new bot client
const botClient = new Discord.Client();

// Login the bot and start listeners
botClient.login(discordToken);

// Listeners Start Here
botClient.on('ready', ()=> {
    console.log("Bot successfully logged in...");
});