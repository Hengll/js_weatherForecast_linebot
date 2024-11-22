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
          url: 'https://img.freepik.com/free-vector/beautiful-night-sky-starry-banner-stunning-display-universe_1017-50560.jpg?t=st=1732237717~exp=1732241317~hmac=a159c45f6cd26dbb19dea3ccf3ea08e96aa2bf2d4493e9ea3dda7442b012bad6&w=1380',
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
              color: '#FFFFFF',
              align: 'center',
              size: '3xl',
              gravity: 'center',
              text: '11月22日',
              margin: 'lg'
            },
            {
              type: 'text',
              color: '#FFFFFF',
              align: 'center',
              size: 'xl',
              gravity: 'center',
              text: '(晚上)18:00~06:00',
              margin: 'lg'
            }
          ],
          position: 'absolute',
          offsetStart: '30px',
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
              text: '陰天',
              color: '#FF0000',
              size: 'sm',
              wrap: true,
              flex: 0
            },
            {
              type: 'image',
              url: 'https://raw.githubusercontent.com/Hengll/js_weatherForecast_linebot/refs/heads/main/weatherIcon/night/png/07.png',
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
              text: '降雨機率 20%\n溫度攝氏18至19度\n稍有寒意\n偏東風 風速2級(每秒3公尺)\n相對濕度68%\n',
              color: '#0000FF',
              size: 'sm',
              wrap: true
            }
          ],
          flex: 0,
          offsetTop: '-8px'
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
