'use strict'

const telegraf = require('telegraf')
const { Markup } = Telegraf

const app = new telegraf('660147933:AAHpU1cPneH4DHbNHfPqWV4LpQllxlza_68')
const PAYMENT_TOKEN = '5cd84726d6a6328d70a1c1ec0bc0b7ab'

const products = [
  {
    name: 'Nuka-Cola Quantum',
    price: 27.99,
    description: 'Ice-cold, radioactive Nuka-Cola. Very rare!',
    photoUrl: 'http://vignette2.wikia.nocookie.net/fallout/images/e/e6/Fallout4_Nuka_Cola_Quantum.png'
  },
  {
    name: 'Iguana on a Stick',
    price: 3.99,
    description: 'The wasteland\'s most famous delicacy.',
    photoUrl: 'https://vignette2.wikia.nocookie.net/fallout/images/b/b9/Iguana_on_a_stick.png'
  }
]

// Start command
app.command('start', ({ reply }) => reply('Welcome, nice to meet you! I can sell you various products. Just ask.'))

// Show offer
app.hears(/^what.*/i, ({ replyWithMarkdown }) => replyWithMarkdown(`
You want to know what I have to offer? Sure!
${products.reduce((acc, p) => acc += `*${p.name}* - ${p.price} €\n`, '')}    
What do you want?`,
Markup.keyboard(products.map(p => p.name)).oneTime().resize().extra()
))

// Order product
products.forEach(p => {
  app.hears(p.name, (ctx) => {
    console.log(`${ctx.from.first_name} is about to buy a ${p.name}.`)
    replyWithInvoice(createInvoice(p))
  })
})

app.startPolling()
