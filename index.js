const Discord = require("discord.js")
const config = require("./config.json")

const client = new Discord.Client()

const prefix = "!nerd "

client.on("message", function(message) {
    if (message.author.bot) return
    if (!message.content.startsWith(prefix)) return
  
    const commandBody = message.content.slice(prefix.length)
    const args = commandBody.split(" ")
    const command = args.shift().toLowerCase()
    console.log();
    if (command === "ping") {
        //usage: !nerd ping
        //comando simples que ve o ping do message.author
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`vai se foder mamaco filho da puta; seu ping é ${timeTaken}ms.`)
    }
    if (command === "adicionar" && message.member.roles.cache.some(role => role.name === 'parlamento')) {
        //usage (sem os colchetes) : !nerd adicionar [matéria], [tarefa], [prazo de entrega] 
        //comando que somente ADMs podem dar para adicionar tarefas novas ao banco de dados
        let params = commandBody.slice("adicionar ".length).split(/, ?/g);
        message.reply(`matéria: ${params[0]}\ntarefa: ${params[1]}\nprazo de entrega: ${params[2]}`)
        
    }
    if (command === "remover" && message.member.roles.cache.some(role => role.name === 'parlamento')) {
        //usage (sem os colchetes) : !nerd remover [matéria], [tarefa], [prazo de entrega no formato DD/MM HH:MM] 
        //comando que somente ADMs podem dar para remover tarefas do banco de dados
        let params = commandBody.slice("remover ".length).split(/, ?/g);
        message.reply(`matéria: ${params[0]}\ntarefa: ${params[1]}\nprazo de entrega: ${params[2]}`)


    }
    if (command === "tarefas"){

    }

});

client.login(config.BOT_TOKEN);