const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const client = new Discord.Client({disableEveryone: true});


client.channels
	//.get("419581071173353472").send("redémarrage en cours . . . ")
	client.channels
	.get("424284755396132886").send("Hmmmmm")
client.user
   //  .setStatus("invisible")
client.user
	 .setActivity("m!aide", {type: "1"});
	//.setstatus("")
	var memberCount = client.users.size;var serverCount = client.guilds.size;console.log("Utilisateurs: " + memberCount + "\nServeurs: " + serverCount);
})
bot.login(" NDE5OTE0MTYxMjcxNzM0Mjcy.DZlABA.vXKfqhUnzUY46kfA0ijvWNSZxvo")
