const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("601167600411476005")
setInterval(function() {
channel.send(`Im pro xD ^_^ ^_^ ^_^`);
}, 30)
})

client.login(process.env.BOT_TOKEN);