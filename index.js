require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("ready", () => {
  console.log(`Connecté en tant que ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content.startsWith("!send")) {
    const messageToSend = message.content.slice(6).trim();
    console.log(`Message à envoyer: "${messageToSend}"`);

    const channelIds = [
      "1245702535763857480",
      "1245702564477927484",
      "1246044811744776314",
      "1246044852160954428",
    ];

    for (const id of channelIds) {
      try {
        const channel = await client.channels.fetch(id);
        if (channel && channel.isTextBased()) {
          console.log(`Envoi du message à ${channel.id}`);
          await channel.send(messageToSend);
          console.log(`Message envoyé à ${channel.id}`);
        } else {
          console.log(`Le canal avec ID ${id} n'est pas un canal textuel`);
        }
      } catch (error) {
        console.error(
          `Erreur lors de l'envoi du message au canal avec ID ${id}:`,
          error
        );
      }
    }
  }
});

client.login(process.env.DISCORD_TOKEN);
