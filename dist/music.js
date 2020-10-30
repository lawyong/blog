const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: false,
    audio: [
      {
        name: "你一定要幸福",
        artist: '简弘亦',
        url: 'http://www.ytmp3.cn/down/51689.mp3',
        cover: 'http://img.ytmp3.cn/image/52.jpg',
      },
      {
        name: '一百万个可能(Live)',
        artist: '摩登兄弟',
        url: 'http://www.ytmp3.cn/down/52772.mp3',
        cover: 'http://img.ytmp3.cn/image/53.jpg',
      },
      {
        name: 'The Rose',
        artist: 'Westlife',
        url: 'http://www.ytmp3.cn/down/56694.mp3',
        cover: 'http://img.ytmp3.cn/image/51.jpg',
      },
      {
        name: 'In The Eyes',
        artist: '江映东',
        url: 'http://www.ytmp3.cn/down/53053.mp3',
        cover: 'http://img.ytmp3.cn/image/10.jpg',
      }
    ]
});