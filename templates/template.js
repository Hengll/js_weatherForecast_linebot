export default () => {
  return {
    type: 'bubble',
    size: 'hecto',
    header: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'text',
          text: '新北市泰山區',
          color: '#FFFFFF',
          align: 'center',
          size: '3xl',
          gravity: 'center',
          weight: 'bold'
        },
        {
          type: 'separator'
        },
        {
          type: 'text',
          color: '#FFFFFF',
          align: 'center',
          size: 'lg',
          gravity: 'center',
          text: '2024-11-21',
          margin: 'lg'
        },
        {
          type: 'text',
          color: '#FFFFFF',
          align: 'center',
          size: 'lg',
          gravity: 'center',
          text: '白天(06:00~18:00)',
          margin: 'lg'
        }
      ],
      backgroundColor: '#27ACB2',
      paddingTop: '19px',
      paddingAll: '12px',
      paddingBottom: '16px',
      background: {
        type: 'linearGradient',
        angle: '45deg',
        startColor: '#5ADFE5',
        endColor: '#0367D3'
      }
    },
    body: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'box',
          layout: 'horizontal',
          contents: [
            {
              type: 'text',
              text: '陰短暫雨',
              color: '#000000',
              size: 'sm',
              wrap: true,
              flex: 0
            },
            {
              type: 'image',
              url: 'https://www.cwa.gov.tw/V8/assets/img/weather_icons/weathers/svg_icon/day/08.svg',
              size: '18px',
              flex: 0,
              margin: '2px'
            }
          ],
          flex: 0
        },
        {
          type: 'box',
          layout: 'horizontal',
          contents: [
            {
              type: 'text',
              text: '降雨機率 60%\n溫度攝氏19至20度\n稍有寒意至舒適\n東北風 風速<= 1級(每秒2公尺)\n相對濕度88%\n',
              color: '#000000',
              size: 'sm',
              wrap: true
            }
          ],
          flex: 0,
          offsetTop: '-8px'
        }
      ],
      spacing: 'md',
      paddingAll: '12px'
    },
    styles: {
      footer: {
        separator: false
      }
    }
  }
}
