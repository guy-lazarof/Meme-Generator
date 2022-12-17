'use-strict'

let gElCanvas
let gCtx

const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']

function onInitMemeController() {
  gElCanvas = document.querySelector('canvas')
  gCtx = gElCanvas.getContext('2d')
  // addListeners()
  resizeCanvas()
  renderCanvas()
}

function resizeCanvas() {
  const elContainer = document.querySelector('.canvas-container')
  gElCanvas.width = (elContainer.offsetWidth) 
  gElCanvas.height = (elContainer.offsetHeight)
}

function renderCanvas() {
  gCtx.fillStyle = 'white'
  gCtx.fillRect(0, 0, gElCanvas.width, gElCanvas.height)
}

function renderMeme() {
  const meme = getGMeme()
  const memeImg = getMemeImg(meme)
  const elImg = new Image()
  
  elImg.src = memeImg.url
  elImg.onload = () => {
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
    drawText(meme.lines)
  }
}

function drawText(memeLines) {
  memeLines.forEach((memeLine,lineIdx) => {
    let lineX
    let lineY
    gCtx.lineWidth = 2
    gCtx.strokeStyle = 'black'
    gCtx.fillStyle = memeLine.color
    gCtx.font = `${memeLine.size + 20}px arial`;
    gCtx.textAlign = memeLine.align
    gCtx.textBaseline = 'middle'

    if (lineIdx === 0){
      lineY = 50
      lineX = gElCanvas.width/2
    }else if(lineIdx === 1){
      lineY = gElCanvas.height - 50
      lineX = gElCanvas.width/2
    }else if(lineIdx > 1){
      lineY = gElCanvas.height/2
      lineX = gElCanvas.width/2
    }
    gCtx.fillText(memeLine.text, lineX,lineY)
    gCtx.strokeText(memeLine.text, lineX, lineY)
  });
}

function onLineTextChange(elLineText){
  const lineTextValue = elLineText.value
  setLineText(lineTextValue)
  renderMeme()
}

function toggleMemeEditorSectionDisplay() {
  const elMemeEditorSection = document.querySelector('.meme-editor')
  elMemeEditorSection.hidden === true ? elMemeEditorSection.hidden = false : elMemeEditorSection.hidden = true
}

function onAddLine() {
  const lineTextValue = document.querySelector('.text-editor').value
  setLineText(lineTextValue)
  renderMeme()
}

// function addListeners() {
//   addMouseListeners()
//   addTouchListeners()
//   window.addEventListener('resize', () => {
//       resizeCanvas()

//   })
// }

// function addMouseListeners() {
//   console.log('test');
//   gElCanvas.addEventListener('mousemove', onMove)
//   gElCanvas.addEventListener('mousedown', onDown)
//   gElCanvas.addEventListener('mouseup', onUp)
// }

// function addTouchListeners() {
//   gElCanvas.addEventListener('touchmove', onMove)
//   gElCanvas.addEventListener('touchstart', onDown)
//   gElCanvas.addEventListener('touchend', onUp)
//   console.log('test');
// }