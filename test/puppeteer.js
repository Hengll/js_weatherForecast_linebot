import puppeteer from 'puppeteer'
import fs from 'node:fs';

(async () => {
  const Icons = {}
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto('https://www.cwa.gov.tw/V8/C/K/Weather_Icon.html')

  const text = await page.$$eval('td:nth-child(1)', elements => {
    return elements.map(e => e.innerText)
  })

  const day = await page.$$eval('td:nth-child(2) img', elements => {
    return elements.map(e => e.src)
  })

  const night = await page.$$eval('td:nth-child(3) img', elements => {
    return elements.map(e => e.src)
  })

  await browser.close()

  for (let i = 0; i < text.length; i++) {
    Icons[text[i]] = {
      day: day[i],
      night: night[i]
    }
  }

  fs.writeFileSync('./weatherIcon/weatherIcon.json', JSON.stringify(Icons, null, 2))
})()
