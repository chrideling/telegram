/** @type {typeof import('telegraf').Telegraf} */
const { Telegraf } = require("telegraf");

const bot = new Telegraf("5954816316:AAG_rQYnMt_rv_senPp0Dc-mUg667TcmcYQ");

bot.command('start', ctx => {
    console.log(ctx.from)
    bot.telegram.sendMessage(ctx.chat.id, 'hello there! Welcome to my new telegram bot.', {
    })
})

bot.hears('animals', ctx => {
    console.log(ctx.from)
    let animalMessage = `great, here are pictures of animals you would love`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, animalMessage, {
        reply_markup: {
            inline_keyboard: [
                [{
                        text: "dog",
                        callback_data: 'dog'
                    },
                    {
                        text: "cat",
                        callback_data: 'cat'
                    }
                ],

            ]
        }
    })
})

//method that returns image of a dog

bot.action('dog', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "res/dog.jpeg"
    })

})

//method that returns image of a cat 

bot.action('cat', ctx => {
    bot.telegram.sendPhoto(ctx.chat.id, {
        source: "res/cat.jpeg"
    })

})

bot.command('/Hallo', (ctx)=> {
    bot.telegram.sendMessage(ctx.chat.id,'Hellloooou')

} )

bot.on('location', (ctx)=> {
    const lat = ctx.message.location.latitude;
    const lon = ctx.message.location.longitude;
    var msg_time = ctx.message.date;
    msg_time = msg_time * 1000;
        const msgDate = new Date(msg_time)

    console.log(lat + " " + lon + " " + msgDate.getDate() + " " + msgDate.getTime());
})

bot.command('/report', ctx => {
    console.log(ctx.from)
    let reportOptions = `Here's the closest runners`;
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, reportOptions, {
        reply_markup: {
            inline_keyboard: [
                [{
                        text: "23",
                        callback_data: '23'
                    },
                    {
                        text: "47",
                        callback_data: '47'
                    },
                    {
                        text: "69",
                        callback_data: '69'
                    },
                    {
                        text: "18",
                        callback_data: '18'
                    },
                    {
                        text: "18",
                        callback_data: '18'
                    },
                    {
                        text: "18",
                        callback_data: '18'
                    },
                    {
                        text: "18",
                        callback_data: '18'
                    },
                    {
                        text: "18",
                        callback_data: '18'
                    },
                    {
                        text: "18",
                        callback_data: '18'
                    },
                    {
                        text: "18",
                        callback_data: '18'
                    },
                    {
                        text: "18",
                        callback_data: '18'
                    },
                    {
                        text: "18",
                        callback_data: '18'
                    },
                    {
                        text: "18",
                        callback_data: '18'
                    },
                    {
                        text: "18",
                        callback_data: '18'
                    },
                    {
                        text: "18",
                        callback_data: '18'
                    }
                ],

            ]
        }
    })
})

bot.action('18', ctx => {
    ctx.reply('OK')

})

bot.command('/racereport', (ctx)=> {
    ctx.reply('sdfasdf')
} )

bot.launch();