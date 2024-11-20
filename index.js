import 'dotenv/config'
import linebot from 'linebot'

const bot = linebot({
  channelId: process.env.CHANNEL_ID,
  channelSecret: process.env.CHANNEL_SECRET,
  channelAccessToken: process.env.CHANNEL_ACCESS_TOKEN
})

bot.on('message', event => {
  // console.log(event.message)
  event.reply('132')
})

bot.listen('/', process.env.PORT || 3000, () => {
  console.log('啟動')
})
