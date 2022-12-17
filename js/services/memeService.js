'use-strict'

const STORAGE_KEY = 'memeDB'

let gMeme ;

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
}

function getMemeImg(meme) {
  const imgs = getAllImgs()
  const img = imgs[meme.selectedImgId]
  return img
}

function generateMeme() {
  return {
    memeImg: getMemeImg(gMeme),
  }

}

function setLineText(textNewValue) {
  let line = gMeme.lines[gMeme.lines.length - 2]
  line.text = textNewValue
  return line
}

function selectedLine() {
  renderMeme()
  setTimeout(() => { drawTextRect(gMeme.selectedLineIdx),gMeme.selectedLineIdx++ },0)
  let selectedLine = gMeme.lines[gMeme.selectedLineIdx]
  if (gMeme.selectedLineIdx >= gMeme.lines.length - 1) {
    gMeme.selectedLineIdx = 0
  }
  return selectedLine
}

function deleteSelectedLine() {
  if (gMeme.lines.length > 1) {
    if (gMeme.selectedLineIdx === 0) {
      gMeme.lines.splice([gMeme.selectedLineIdx - 2], 1)
    }
    else if (gMeme.selectedLineIdx !== 0) {
      gMeme.lines.splice([gMeme.selectedLineIdx - 1], 1)
    }
  }
}

function fontPlus() {
  gMeme.lines[gMeme.selectedLineIdx -1].size += 4
}

function fontMinus() {
  gMeme.lines[gMeme.selectedLineIdx -1].size -= 4
}

function textAlignLeft() {
  gMeme.lines[gMeme.selectedLineIdx -1].align = 'left'
}

function textAlignCenter() {
  gMeme.lines[gMeme.selectedLineIdx -1].align = 'center'
}

function textAlignRight() {
  gMeme.lines[gMeme.selectedLineIdx -1].align = 'right'
}