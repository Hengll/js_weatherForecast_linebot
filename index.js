import 'dotenv/config'
import linebot from 'linebot'
import flexText from './commands/flexText.js'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', event => {
  // console.log(event)
  if (event.message.type === 'text') {
    flexText(event)
  } else if (event.message.type === 'location') {
    console.log(1)
  }
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('啟動')
})
