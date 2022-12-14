'use-strict'

let gElCanvas
let gCtx

const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']

function onInit() {
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

function onRenderMeme() {
  
  const memeImg = getMemeImg(3)
  const elImg = new Image()
  
  elImg.src = memeImg.url
  elImg.onload = () => {
    gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
    drawText(gMeme.lines)
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
    gCtx.fillText(memeLine.txt, lineX,lineY)
    gCtx.strokeText(memeLine.txt, lineX, lineY)
  });
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