//Here the command starts
module.exports = {
    //definition
    name: "yaz", //the name of the command 
    category: "eğlence", //the category this will be listed at, for the help cmd
    aliases: [], //every parameter can be an alias
    cooldown: 2, //this will set it to a 2 second cooldown
    usage: "yaz <Text>", //this is for the help command for EACH cmd
    description: "Yazdığınız yazıyı mesaj olarak atar", //the description of the command

    //running the command with the parameters: client, message, args, user, text, prefix
    run: async (client, message, args, user, text, prefix) => {
        if(!text) return message.channel.send("Bir yazı girin.");
        message.channel.send(text) 
    }
}
