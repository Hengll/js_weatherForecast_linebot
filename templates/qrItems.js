export default () => {
  return {
    type: 'action',
    action: {
      type: 'message',
      // 按下用使用者會傳送的文字
      text: '新北市泰山區!11月22日',
      // 按鈕顯示文字
      label: '22日'
    }
  }
}
