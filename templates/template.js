export default () => {
  return {
    type: 'bubble',
    size: 'hecto',
    header: {
      type: 'box',
      layout: 'vertical',
      contents: [
        {
          type: 'image',
          url: 'https://img.freepik.com/free-photo/white-cloud-blue-sky_74190-7728.jpg',
          size: 'full',
          aspectMode: 'cover',
          aspectRatio: '1.5:1'
        },
        {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'text',
              text: '台北市大安區',
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
              text: '2024-11-22',
              margin: 'lg'
            },
            {
              type: 'text',
              color: '#FFFFFF',
              align: 'center',
              size: 'lg',
              gravity: 'center',
              text: '(白天)06:00~18:00',
              margin: 'lg'
            }
          ],
          position: 'absolute',
          offsetStart: 'xl',
          offsetTop: 'xl'
        }
      ],
      backgroundColor: '#27ACB2',
      paddingAll: '0px',
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
              color: '#FF0000',
              size: 'sm',
              wrap: true,
              flex: 0
            },
            {
              type: 'image',
              url: 'https://raw.githubusercontent.com/Hengll/js_weatherForecast_linebot/refs/heads/main/weatherIcon/day/png/11.png',
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
              text: '降雨機率 30%\n溫度攝氏18至21度\n稍有寒意至舒適\n東北風 風速3級(每秒4公尺)\n相對濕度80%\n',
              color: '#0000FF',
              size: 'sm',
              wrap: true
            }
          ],
          flex: 0,
          offsetTop: '-8px'
        },
        {
          type: 'box',
          layout: 'vertical',
          contents: [
            {
              type: 'separator'
            },
            {
              type: 'text',
              text: '取得天氣資訊，輸入:\n1. OO縣(市)XX鄉(鎮、區...)\n2. line位置資訊',
              wrap: true,
              margin: '6px',
              size: 'xs'
            }
          ],
          position: 'relative',
          offsetTop: '-12px',
          paddingAll: '0px'
        }
      ],
      spacing: 'md',
      paddingAll: '12px',
      paddingBottom: '0px'
    },
    styles: {
      footer: {
        separator: false
      }
    }
  }
}
