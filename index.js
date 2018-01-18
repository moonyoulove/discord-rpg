const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  console.log(typeof(message.content));
  if (message.content === '有人嗎?') {
    message.reply('你好');
  }
});

client.login('NDAzMjQwNDg2ODk2MTQwMjk4.DUEdww.KYLRCZzDvdxMJs8ZgygReG-r1ow');

//const keepalive = require('./keepalive.js');
