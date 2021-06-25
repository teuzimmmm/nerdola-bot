const Discord = require("discord.js")
const config = require("./config.json")

const client = new Discord.Client()

const prefix = "!nerd "

client.on("message", function(message) {
    if (message.author.bot) return
    if (!message.content.startsWith(prefix)) return
  
    const commandBody = message.content.slice(prefix.length)
    const args = commandBody.split(' ')
    const command = args.shift().toLowerCase()

    if (command[0] === "ping") {
        //usage: !nerd ping
        //comando simples que ve o ping do message.author
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`vai se foder mamaco filho da puta; seu ping é ${timeTaken}ms.`)
    }
    if (command[0] === "adicionar" && message.member.roles.cache.some(role => role.name === 'parlamento')) {

        //usage: !nerd adicionar ...,...,..., 
        //comando que somente ADMs podem dar para adicionar tarefas novas ao banco de dados
        
    }
    if (command[0] === "remover" && message.member.roles.cache.some(role => role.name === 'parlamento')) {
        let params = commandBody.slice("remover").split(',');
        message.reply(`matéria: ${params[0]}\ntítulo da tarefa:${params[1]}\ndescrição da matéria:`)


    }
    if (command === "tarefas"){

    }

});

client.login(config.BOT_TOKEN);