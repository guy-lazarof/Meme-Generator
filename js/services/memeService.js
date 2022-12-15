'use-strict'

const STORAGE_KEY = 'memeDB'

var gImgs = [
              {
                id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat']
              }, {
                id: 2, url: 'img/2.jpg', keywords: ['cute', 'dog']
              }, {
                id: 2, url: 'img/3.jpg', keywords: ['cute', 'baby', 'dog']
              },{
                id: 3, url: 'img/4.jpg', keywords: ['funny', 'cat','sleep']
              }, {
                id: 4, url: 'img/5.jpg', keywords: ['funny', 'kid']
              }, {
                id: 5, url: 'img/6.jpg', keywords: ['funny', 'science']
              },
            ];

var gMeme= {
  selectedImgId: 5,
  selectedLineIdx: 0,
  lines: [
        {
          text: 'one',
          size: 20,
          align: 'left',
          color: 'red'
        },
        {
          text: 'two',
          size: 20,
          align: 'right',
          color: 'blue'
        },
        {
          text: 'three',
          size: 20,
          align: 'left',
          color: 'red'
        },{
          text: 'four',
          size: 20,
          align: 'right',
          color: 'blue'
        },{
          text: 'five',
          size: 20,
          align: 'center',
          color: 'red'
        }
          ]
}

function getMemeImg(meme) {
  const img = gImgs[meme.selectedImgId]
  console.log('img:', img)
  return img
}

function getMeme() {
  const meme = {
    memeImg: getMemeImg(gMeme),
    memeText: gMeme.lines
  }
  return meme

}
// getMeme(gMeme)
// function getMeme(meme) {
//   const memeLines = meme.lines 
//   return memeLines
// }


// function _createMeme(title,price) {
//   const meme = {
//     selectedImgId: 5,
//   selectedLineIdx: 0,
//   lines: [
//           {
//             text: 'I sometimes eat Falafel', size: 20,
//             align: 'left',
//             color: 'red'
//           }
//   ]
//   }

//   return meme
// }