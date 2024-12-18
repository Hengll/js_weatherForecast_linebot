import axios from 'axios'
import template from '../templates/template.js'
import fs from 'node:fs'
import weatherIcon from '../weatherIcon/weatherIcon.js'
import qrItems from '../templates/qrItems.js'

export default async (event) => {
  try {
    const areaUrl = {
      宜蘭縣: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-003?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&ElementName=%E5%A4%A9%E6%B0%A3%E9%A0%90%E5%A0%B1%E7%B6%9C%E5%90%88%E6%8F%8F%E8%BF%B0,%E5%A4%A9%E6%B0%A3%E7%8F%BE%E8%B1%A1',
      桃園市: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-007?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&ElementName=%E5%A4%A9%E6%B0%A3%E9%A0%90%E5%A0%B1%E7%B6%9C%E5%90%88%E6%8F%8F%E8%BF%B0,%E5%A4%A9%E6%B0%A3%E7%8F%BE%E8%B1%A1',
      新竹縣: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-011?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&ElementName=%E5%A4%A9%E6%B0%A3%E9%A0%90%E5%A0%B1%E7%B6%9C%E5%90%88%E6%8F%8F%E8%BF%B0,%E5%A4%A9%E6%B0%A3%E7%8F%BE%E8%B1%A1',
      苗栗縣: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-015?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&ElementName=%E5%A4%A9%E6%B0%A3%E9%A0%90%E5%A0%B1%E7%B6%9C%E5%90%88%E6%8F%8F%E8%BF%B0,%E5%A4%A9%E6%B0%A3%E7%8F%BE%E8%B1%A1',
      彰化縣: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-019?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&ElementName=%E5%A4%A9%E6%B0%A3%E9%A0%90%E5%A0%B1%E7%B6%9C%E5%90%88%E6%8F%8F%E8%BF%B0,%E5%A4%A9%E6%B0%A3%E7%8F%BE%E8%B1%A1',
      南投縣: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-023?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&ElementName=%E5%A4%A9%E6%B0%A3%E9%A0%90%E5%A0%B1%E7%B6%9C%E5%90%88%E6%8F%8F%E8%BF%B0,%E5%A4%A9%E6%B0%A3%E7%8F%BE%E8%B1%A1',
      雲林縣: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-027?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&ElementName=%E5%A4%A9%E6%B0%A3%E9%A0%90%E5%A0%B1%E7%B6%9C%E5%90%88%E6%8F%8F%E8%BF%B0,%E5%A4%A9%E6%B0%A3%E7%8F%BE%E8%B1%A1',
      嘉義縣: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-031?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&ElementName=%E5%A4%A9%E6%B0%A3%E9%A0%90%E5%A0%B1%E7%B6%9C%E5%90%88%E6%8F%8F%E8%BF%B0,%E5%A4%A9%E6%B0%A3%E7%8F%BE%E8%B1%A1',
      屏東縣: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-035?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&ElementName=%E5%A4%A9%E6%B0%A3%E9%A0%90%E5%A0%B1%E7%B6%9C%E5%90%88%E6%8F%8F%E8%BF%B0,%E5%A4%A9%E6%B0%A3%E7%8F%BE%E8%B1%A1',
      臺東縣: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-039?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&ElementName=%E5%A4%A9%E6%B0%A3%E9%A0%90%E5%A0%B1%E7%B6%9C%E5%90%88%E6%8F%8F%E8%BF%B0,%E5%A4%A9%E6%B0%A3%E7%8F%BE%E8%B1%A1',
      台東縣: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-039?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&ElementName=%E5%A4%A9%E6%B0%A3%E9%A0%90%E5%A0%B1%E7%B6%9C%E5%90%88%E6%8F%8F%E8%BF%B0,%E5%A4%A9%E6%B0%A3%E7%8F%BE%E8%B1%A1',
      花蓮縣: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-043?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&ElementName=%E5%A4%A9%E6%B0%A3%E9%A0%90%E5%A0%B1%E7%B6%9C%E5%90%88%E6%8F%8F%E8%BF%B0,%E5%A4%A9%E6%B0%A3%E7%8F%BE%E8%B1%A1',
      澎湖線: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-047?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&ElementName=%E5%A4%A9%E6%B0%A3%E9%A0%90%E5%A0%B1%E7%B6%9C%E5%90%88%E6%8F%8F%E8%BF%B0,%E5%A4%A9%E6%B0%A3%E7%8F%BE%E8%B1%A1',
      基隆市: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-051?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&ElementName=%E5%A4%A9%E6%B0%A3%E9%A0%90%E5%A0%B1%E7%B6%9C%E5%90%88%E6%8F%8F%E8%BF%B0,%E5%A4%A9%E6%B0%A3%E7%8F%BE%E8%B1%A1',
      新竹市: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-055?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&ElementName=%E5%A4%A9%E6%B0%A3%E9%A0%90%E5%A0%B1%E7%B6%9C%E5%90%88%E6%8F%8F%E8%BF%B0,%E5%A4%A9%E6%B0%A3%E7%8F%BE%E8%B1%A1',
      嘉義市: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-059?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&ElementName=%E5%A4%A9%E6%B0%A3%E9%A0%90%E5%A0%B1%E7%B6%9C%E5%90%88%E6%8F%8F%E8%BF%B0,%E5%A4%A9%E6%B0%A3%E7%8F%BE%E8%B1%A1',
      臺北市: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-063?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&ElementName=%E5%A4%A9%E6%B0%A3%E9%A0%90%E5%A0%B1%E7%B6%9C%E5%90%88%E6%8F%8F%E8%BF%B0,%E5%A4%A9%E6%B0%A3%E7%8F%BE%E8%B1%A1',
      台北市: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-063?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&ElementName=%E5%A4%A9%E6%B0%A3%E9%A0%90%E5%A0%B1%E7%B6%9C%E5%90%88%E6%8F%8F%E8%BF%B0,%E5%A4%A9%E6%B0%A3%E7%8F%BE%E8%B1%A1',
      高雄市: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-067?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&ElementName=%E5%A4%A9%E6%B0%A3%E9%A0%90%E5%A0%B1%E7%B6%9C%E5%90%88%E6%8F%8F%E8%BF%B0,%E5%A4%A9%E6%B0%A3%E7%8F%BE%E8%B1%A1',
      新北市: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-071?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&ElementName=%E5%A4%A9%E6%B0%A3%E9%A0%90%E5%A0%B1%E7%B6%9C%E5%90%88%E6%8F%8F%E8%BF%B0,%E5%A4%A9%E6%B0%A3%E7%8F%BE%E8%B1%A1',
      臺中市: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-075?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&ElementName=%E5%A4%A9%E6%B0%A3%E9%A0%90%E5%A0%B1%E7%B6%9C%E5%90%88%E6%8F%8F%E8%BF%B0,%E5%A4%A9%E6%B0%A3%E7%8F%BE%E8%B1%A1',
      台中市: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-075?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&ElementName=%E5%A4%A9%E6%B0%A3%E9%A0%90%E5%A0%B1%E7%B6%9C%E5%90%88%E6%8F%8F%E8%BF%B0,%E5%A4%A9%E6%B0%A3%E7%8F%BE%E8%B1%A1',
      臺南市: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-079?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&ElementName=%E5%A4%A9%E6%B0%A3%E9%A0%90%E5%A0%B1%E7%B6%9C%E5%90%88%E6%8F%8F%E8%BF%B0,%E5%A4%A9%E6%B0%A3%E7%8F%BE%E8%B1%A1',
      台南市: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-079?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&ElementName=%E5%A4%A9%E6%B0%A3%E9%A0%90%E5%A0%B1%E7%B6%9C%E5%90%88%E6%8F%8F%E8%BF%B0,%E5%A4%A9%E6%B0%A3%E7%8F%BE%E8%B1%A1',
      連江縣: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-083?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&ElementName=%E5%A4%A9%E6%B0%A3%E9%A0%90%E5%A0%B1%E7%B6%9C%E5%90%88%E6%8F%8F%E8%BF%B0,%E5%A4%A9%E6%B0%A3%E7%8F%BE%E8%B1%A1',
      金門縣: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-087?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&ElementName=%E5%A4%A9%E6%B0%A3%E9%A0%90%E5%A0%B1%E7%B6%9C%E5%90%88%E6%8F%8F%E8%BF%B0,%E5%A4%A9%E6%B0%A3%E7%8F%BE%E8%B1%A1'
    }

    // ex.新北市
    const area = (event.message.text.match(/..[縣,市]/) || [''])[0]
    // ex.泰山區
    const smallarea = (event.message.text.match(/[市,縣].*[^鄉,鎮,市,區][鄉,鎮,市,區]/) || [''])[0].slice(1)
    // 要查詢的日期
    const day = event.message.text.match(/..月../)[0].replace('月', '-')

    const { data } = await axios.get(areaUrl[area])
    const locations = data.records.Locations[0].Location
    const location = []

    for (let i = 0; i < locations.length; i++) {
      if (locations[i].LocationName === smallarea) {
        location.push(locations[i].WeatherElement)
      }
    }

    if (location.length === 0) {
      throw new Error('鄉鎮市區輸入錯誤')
    }

    const bubble = []
    const weatherIcons = weatherIcon()

    // 修改並建立bubble
    for (let i = 0; i < 14; i++) {
      if (location[0][0].Time[i].StartTime.slice(5, 10) === day) {
        const b = template()
        b.header.contents[1].contents[0].text = `${location[0][0].Time[i].StartTime.slice(5, 10)}日`.replace('-', '月')

        if (location[0][0].Time[i].StartTime.slice(11, 19) === '06:00:00' ||
          location[0][0].Time[i].StartTime.slice(11, 19) === '12:00:00') {
          b.header.contents[0].url = 'https://img.freepik.com/free-photo/white-cloud-blue-sky_74190-7728.jpg'
          b.header.contents[1].contents[1].text = `(白天)${location[0][0].Time[i].StartTime.slice(11, 16)}~${location[0][0].Time[i].EndTime.slice(11, 16)}`
          // 白天的圖片
          b.body.contents[0].contents[1].url =
            `https://raw.githubusercontent.com/Hengll/js_weatherForecast_linebot/refs/heads/main/weatherIcon/day/png/${weatherIcons[location[0][0].Time[i].ElementValue[0].Weather]}.png`
          // 白天的字體顏色改黑色
          b.header.contents[1].contents[0].color = '#000000'
          b.header.contents[1].contents[1].color = '#000000'
        } else {
          b.header.contents[0].url = 'https://img.freepik.com/free-vector/beautiful-night-sky-starry-banner-stunning-display-universe_1017-50560.jpg?t=st=1732237717~exp=1732241317~hmac=a159c45f6cd26dbb19dea3ccf3ea08e96aa2bf2d4493e9ea3dda7442b012bad6&w=1380'
          b.header.contents[1].contents[1].text = `(晚上)${location[0][0].Time[i].StartTime.slice(11, 16)}~${location[0][0].Time[i].EndTime.slice(11, 16)}`
          // 晚上的圖片
          b.body.contents[0].contents[1].url =
            `https://raw.githubusercontent.com/Hengll/js_weatherForecast_linebot/refs/heads/main/weatherIcon/night/png/${weatherIcons[location[0][0].Time[i].ElementValue[0].Weather]}.png`
        }

        b.body.contents[0].contents[0].text = location[0][0].Time[i].ElementValue[0].Weather
        b.body.contents[1].contents[1].text = location[0][1].Time[i].ElementValue[0].WeatherDescription.split('。').slice(1).join('\n')

        if (!location[0][1].Time[i].ElementValue[0].WeatherDescription.match(/降雨機率/)) {
          b.body.contents[1].contents[0].contents.splice(0, 1)
          b.body.contents[1].contents[0].offsetTop = '0px'
        }
        bubble.push(b)
      }
    }

    if (bubble.length === 0) {
      throw new Error('日期輸入錯誤')
    }

    const qr = []

    // 修改並建立qr(快速回覆)
    for (let i = 0; i < location[0][0].Time.length; i += 2) {
      const q = qrItems()
      q.action.text = area + smallarea + '!' + location[0][0].Time[i].StartTime.slice(5, 10).replace('-', '月') + '日'
      q.action.label = location[0][0].Time[i].StartTime.slice(8, 10) + '日'
      qr.push(q)
    }

    const result = await event.reply({
      type: 'flex',
      altText: '天氣查詢結果',
      contents: {
        type: 'carousel',
        contents: bubble
      },
      quickReply: {
        items: qr
      }
    })

    console.log(result)

    if (process.env.DEBUG === 'true') {
      // 從主程式位置
      fs.writeFileSync('./dump/fe.json', JSON.stringify(bubble, null, 2))
    }
  } catch (err) {
    if (err.message === 'Invalid URL') {
      event.reply('縣市輸入錯誤\n取得天氣預報資訊，請輸入:\n1. OO縣(市)XX鄉(鎮、區...)\n2. line位置資訊')
    } else if (err.message === '鄉鎮市區輸入錯誤') {
      event.reply('鄉鎮市區輸入錯誤\n取得天氣預報資訊，請輸入:\n1. OO縣(市)XX鄉(鎮、區...)\n2. line位置資訊')
    } else if (err.message === '日期輸入錯誤') {
      event.reply('日期輸入錯誤\n取得天氣預報資訊，請輸入:\n1. OO縣(市)XX鄉(鎮、區...)\n2. line位置資訊')
    } else {
      console.log(err)
    }
  }
}
