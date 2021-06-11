//Here the command starts
module.exports = {
    //definition
    name: "uptime", //the name of the command 
    category: "bilgi", //the category this will be listed at, for the help cmd
    aliases: [""], //every parameter can be an alias or empty for no aliases
    cooldown: 10, //this will set it to a 10 second cooldown
    usage: "uptime", //this is for the help command for EACH cmd
    description: "Botun çalışma süresini gösterir.", //the description of the command

    //running the command with the parameters: client, message, args, user, text, prefix
    run: async (client, message, args, user, text, prefix) => {
        // a sub function to get the time    
        function duration(ms) { 
            const sec = Math.floor(ms / 1000 % 60).toString();
            const min = Math.floor(ms / (60*1000) % 60).toString();
            const hrs = Math.floor(ms / (60*60*1000) % 60).toString();
            const days = Math.floor(ms / (24*60*60*1000) % 60).toString();
            return `\`${days} Gün\`, \`${hrs} Saat\`, \`${min} Dakika\`, \`${sec} Saniye\``
        }
        message.reply(`:white_check_mark: **${client.user.username}** Çalışma süresi : ${duration(client.uptime)} `); //sending the uptime
    }
}