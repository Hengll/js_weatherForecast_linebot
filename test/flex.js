import axios from 'axios'

export default async event => {
  const areaUrl = {
    宜蘭縣: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-003?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&format=JSON',
    桃園市: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-007?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&format=JSON',
    新竹縣: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-011?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&format=JSON',
    苗栗縣: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-015?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&format=JSON',
    彰化縣: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-019?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&format=JSON',
    南投縣: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-023?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&format=JSON',
    雲林縣: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-027?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&format=JSON',
    嘉義縣: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-031?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&format=JSON',
    屏東縣: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-035?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&format=JSON',
    臺東縣: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-039?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&format=JSON',
    台東縣: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-039?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&format=JSON',
    花蓮縣: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-043?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&format=JSON',
    澎湖線: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-047?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&format=JSON',
    基隆市: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-051?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&format=JSON',
    新竹市: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-055?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&format=JSON',
    嘉義市: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-059?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&format=JSON',
    臺北市: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-063?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&format=JSON',
    台北市: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-063?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&format=JSON',
    高雄市: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-067?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&format=JSON',
    新北市: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-071?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&format=JSON',
    臺中市: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-075?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&format=JSON',
    台中市: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-075?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&format=JSON',
    臺南市: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-079?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&format=JSON',
    台南市: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-079?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&format=JSON',
    連江縣: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-083?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&format=JSON',
    金門縣: 'https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-087?Authorization=CWA-3538B9F3-1190-4861-8523-3E66C9639ED8&format=JSON'
  }

  const { data } = await axios.get(areaUrl[event.message.text])
  const location = data.records.locations[0].location
}
