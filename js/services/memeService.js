'use-strict'

const STORAGE_KEY = 'memeDB'

let gMeme ;

// {
//   text: 'one',
//   size: 20,
//   align: 'left',
//   color: 'red'
// },
// {
//   text: 'two',
//   size: 20,
//   align: 'right',
//   color: 'blue'
// },
// {
//   text: 'three',
//   size: 20,
//   align: 'left',
//   color: 'red'
// },{
//   text: 'four',
//   size: 20,
//   align: 'right',
//   color: 'blue'
// },{
//   text: 'five',
//   size: 20,
//   align: 'center',
//   color: 'red'
// }
// function imgSelect(elImgSelect) {
//   const imgSrc = elImgSelect.
//   gGallery.find(() =>)
// }

function getGMeme() {
  const meme = gMeme
  return meme
}

function createMeme(selectedImgId) {
  gMeme = {
    selectedImgId,
    selectedLineIdx:0,
    lines: [
      {
        text: '',
        size: 20,
        align: 'center',
        color: 'white'
      }
    ]
  }
  console.log('gMeme:', gMeme)
}

function getMemeImg(meme) {
  const imgs = getAllImgs()
  const img = imgs[meme.selectedImgId]
  return img
}

function generateMeme() {
  return {
    memeImg: getMemeImg(gMeme),
    // memeText: gMeme.lines
  }

}

function setLineText(textNewValue) {
  let line = gMeme.lines[gMeme.lines.length - 2]
  line.text = textNewValue
  return line
}

function selectedLine() {
  let selectedLine = gMeme.lines[gMeme.selectedLineIdx]
  console.log(selectedLine);
  gMeme.selectedLineIdx++
  console.log(selectedLine);
  if (gMeme.selectedLineIdx === gMeme.lines.length - 1) {
    gMeme.selectedLineIdx = 0
  }
  return selectedLine
}

// function selectNextLine() {
// }

function deleteSelectedLine() {
  if (gMeme.lines.length > 1) {
    gMeme.lines.splice([gMeme.selectedLineIdx - 1],1)
  }
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