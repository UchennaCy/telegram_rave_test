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
