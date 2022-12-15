'use-strict'

const STORAGE_KEY = 'memeDB'

var gImgs = [
              {
                id: 0, url: 'img/1.jpg', keywords: ['funny', 'cat']
              }, {
                id: 1, url: 'img/2.jpg', keywords: ['cute', 'dog']
              }, {
                id: 2, url: 'img/3.jpg', keywords: ['cute', 'baby', 'dog']
              },{
                id: 3, url: 'img/4.jpg', keywords: ['funny', 'cat','sleep']
              }, {
                id: 4, url: 'img/5.jpg', keywords: ['funny', 'kid']
              }, {
                id: 5, url: 'img/6.jpg', keywords: ['funny', 'science']
              },{
                id: 6, url: 'img/7.jpg', keywords: ['funny', 'science']
              },{
                id: 7, url: 'img/8.jpg', keywords: ['funny', 'science']
              },{
                id: 8, url: 'img/9.jpg', keywords: ['funny', 'science']
              },{
                id: 9, url: 'img/10.jpg', keywords: ['funny', 'science']
              },{
                id: 10, url: 'img/11.jpg', keywords: ['funny', 'science']
              },{
                id: 11, url: 'img/12.jpg', keywords: ['funny', 'science']
              },{
                id: 12, url: 'img/13.jpg', keywords: ['funny', 'science']
              },{
                id: 13, url: 'img/14.jpg', keywords: ['funny', 'science']
              },{
                id: 14, url: 'img/15.jpg', keywords: ['funny', 'science']
              },{
                id: 15, url: 'img/16.jpg', keywords: ['funny', 'science']
              },{
                id: 16, url: 'img/17.jpg', keywords: ['funny', 'science']
              },{
                id: 17, url: 'img/18.jpg', keywords: ['funny', 'science']
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

function getAllImgs() {
  const allImgs = gImgs
  return allImgs;
}

// function imgSelect(elImgSelect) {
//   const imgSrc = elImgSelect.
//   gGallery.find(() =>)
// }

function setMemeImg(imgSelectId) {
  gMeme.selectedImgId = imgSelectId
}

function getMemeImg(meme) {
  const img = gImgs[meme.selectedImgId]
  return img
}

function generateMeme() {
  return {
    memeImg: getMemeImg(gMeme),
    memeText: gMeme.lines
  }

}

function setLineText(textNewValue) {
  let line = gMeme.lines[gMeme.selectedLineIdx]
  line.text = textNewValue
  return line
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