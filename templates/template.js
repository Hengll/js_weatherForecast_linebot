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
              text: '11月23日',
              margin: 'lg'
            },
            {
              type: 'text',
              color: '#FFFFFF',
              align: 'center',
              size: 'xl',
              gravity: 'center',
              text: '(晚上)00:00~06:00',
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
              text: '陰短暫雨',
              color: '#FF0000',
              size: 'sm',
              wrap: true,
              flex: 0
            },
            {
              type: 'image',
              url: 'https://raw.githubusercontent.com/Hengll/js_weatherForecast_linebot/refs/heads/main/weatherIcon/night/png/11.png',
              size: '18px',
              flex: 0,
              margin: '2px',
              offsetTop: '2px'
            }
          ],
          flex: 0
        },
        {
          type: 'box',
          layout: 'horizontal',
          contents: [
            {
              type: 'box',
              layout: 'vertical',
              contents: [
                {
                  type: 'image',
                  url: 'https://cdn-icons-png.flaticon.com/512/4088/4088981.png',
                  size: '18px'
                },
                {
                  type: 'image',
                  url: 'https://cdn-icons-png.flaticon.com/512/2100/2100100.png',
                  size: '18px',
                  offsetTop: '2px'
                },
                {
                  type: 'image',
                  url: 'https://cdn-icons-png.flaticon.com/512/13779/13779995.png',
                  size: '18px',
                  offsetTop: '3px'
                },
                {
                  type: 'image',
                  url: 'https://cdn-icons-png.flaticon.com/512/11742/11742598.png',
                  size: '18px',
                  offsetTop: '4px'
                },
                {
                  type: 'image',
                  url: 'https://cdn-icons-png.flaticon.com/512/17901/17901179.png',
                  size: '18px',
                  offsetTop: '6px'
                }
              ],
              paddingAll: '0px',
              width: '20px',
              offsetTop: '2px'
            },
            {
              type: 'text',
              text: '降雨機率 60%\n溫度攝氏17至18度\n稍有寒意\n偏西風 風速2級(每秒2公尺)\n相對濕度96%\n',
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
