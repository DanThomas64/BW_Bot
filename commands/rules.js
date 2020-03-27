module.exports = {
	name: 'rules',
	description: 'BW Rules!',
    execute(message, args) {
        const Discord = require('discord.js');
        const embed = new Discord.MessageEmbed().setTitle(message,args);
        message.channel.send(embed);
    },
};