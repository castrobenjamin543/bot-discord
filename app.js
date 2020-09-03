const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {

  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }

  if (msg.content === 'hola' || msg.content === 'Hola') {
    msg.channel.send(`Hola ${msg.author}`)
  }

  if (msg.content.includes('nose')) {
    msg.channel.send(`yo tampoco se`)
  }

});

client.login('NzUxMDU3NzkyMzU3NDk4OTUw.X1DjEw.hfysGKToDPm0t8HcNFz1Lg8V7VU')