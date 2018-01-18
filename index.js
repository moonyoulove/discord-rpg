const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log('I am ready!');
});

client.on('message', message => {
  switch(message.content) {
      case '有人嗎?':
        message.reply('你好');
        break;
      case 'anyone?':
        message.reply('hello');
        break;
  }
});

client.login('NDAzMjQwNDg2ODk2MTQwMjk4.DUEdww.KYLRCZzDvdxMJs8ZgygReG-r1ow');

//const keepalive = require('./keepalive.js');
