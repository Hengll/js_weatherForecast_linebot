import axios from 'axios';

(async () => {
  const areaUrl = {
    宜蘭縣: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-003?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&limit=13&format=JSON&elementName=Wx,WeatherDescription',
    桃園市: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-007?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&limit=13&format=JSON&elementName=Wx,WeatherDescription',
    新竹縣: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-011?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&limit=13&format=JSON&elementName=Wx,WeatherDescription',
    苗栗縣: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-015?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&limit=13&format=JSON&elementName=Wx,WeatherDescription',
    彰化縣: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-019?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&limit=13&format=JSON&elementName=Wx,WeatherDescription',
    南投縣: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-023?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&limit=13&format=JSON&elementName=Wx,WeatherDescription',
    雲林縣: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-027?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&limit=13&format=JSON&elementName=Wx,WeatherDescription',
    嘉義縣: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-031?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&limit=13&format=JSON&elementName=Wx,WeatherDescription',
    屏東縣: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-035?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&limit=13&format=JSON&elementName=Wx,WeatherDescription',
    臺東縣: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-039?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&limit=13&format=JSON&elementName=Wx,WeatherDescription',
    台東縣: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-039?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&limit=13&format=JSON&elementName=Wx,WeatherDescription',
    花蓮縣: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-043?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&limit=13&format=JSON&elementName=Wx,WeatherDescription',
    澎湖線: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-047?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&limit=13&format=JSON&elementName=Wx,WeatherDescription',
    基隆市: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-051?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&limit=13&format=JSON&elementName=Wx,WeatherDescription',
    新竹市: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-055?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&limit=13&format=JSON&elementName=Wx,WeatherDescription',
    嘉義市: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-059?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&limit=13&format=JSON&elementName=Wx,WeatherDescription',
    臺北市: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-063?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&limit=13&format=JSON&elementName=Wx,WeatherDescription',
    台北市: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-063?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&limit=13&format=JSON&elementName=Wx,WeatherDescription',
    高雄市: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-067?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&limit=13&format=JSON&elementName=Wx,WeatherDescription',
    新北市: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-071?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&limit=13&format=JSON&elementName=Wx,WeatherDescription',
    臺中市: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-075?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&limit=13&format=JSON&elementName=Wx,WeatherDescription',
    台中市: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-075?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&limit=13&format=JSON&elementName=Wx,WeatherDescription',
    臺南市: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-079?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&limit=13&format=JSON&elementName=Wx,WeatherDescription',
    台南市: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-079?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&limit=13&format=JSON&elementName=Wx,WeatherDescription',
    連江縣: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-083?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&limit=13&format=JSON&elementName=Wx,WeatherDescription',
    金門縣: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-087?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&limit=13&format=JSON&elementName=Wx,WeatherDescription'
  }

  const area = '新北市'
  const smallarea = '泰山區'
  const { data } = await axios.get(areaUrl[area])
  const locations = data.records.locations[0].location
  const location = []

  for (let i = 0; i < locations.length; i++) {
    if (locations[i].locationName === smallarea) {
      location.push(locations[i].weatherElement)
    }
  }

  // console.log(location[0][0].time[1].startTime.split(' ')[0])
  // console.log(location[0][0].time[1].startTime.split(' ')[1])
  // console.log(location[0][6].time[1].elementValue[0].value)
  // console.log(location[0][10].time[1].elementValue[0].value.split('。').slice(1).join('\n'))
  console.log(location)
})()
