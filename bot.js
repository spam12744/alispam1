const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("529330427547222017")
setInterval(function() {
channel.send(`بووووووووووم احا سبااااااااااااااااااااام بووووووووم`);
}, 30)
})

client.login(process.env.BOT_TOKEN);
