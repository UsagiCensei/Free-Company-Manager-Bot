const Discord = require('discord.js');
const msgParse = require('./lib/msgParse.js');

// Fill add in your own developer token for your bot.
const discordToken = 'Bot-Token';

// Create a new bot client
const botClient = new Discord.Client();

// Login the bot and start listeners
botClient.login(discordToken);

// Listeners Start Here
// Send a note to console when the bot is logged in
botClient.on('ready', ()=> {
    console.log("Bot successfully logged in...");
});

botClient.on('message', msg=> {
    msgParse.parseMsg(msg)
})