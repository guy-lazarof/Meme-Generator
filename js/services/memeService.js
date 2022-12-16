'use-strict'

const STORAGE_KEY = 'memeDB'

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


// function imgSelect(elImgSelect) {
//   const imgSrc = elImgSelect.
//   gGallery.find(() =>)
// }

function setMemeImg(imgSelectId) {
  gMeme.selectedImgId = imgSelectId
}

function getMemeImg(meme) {
  const imgs = getAllImgs()
  const img = imgs[meme.selectedImgId]
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