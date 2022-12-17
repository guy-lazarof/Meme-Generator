'use-strict'

let gElCanvas
let gCtx
let gCurrShape = ''

const TOUCH_EVS = ['touchstart', 'touchmove', 'touchend']

function onInitMemeController() {
  gElCanvas = document.querySelector('canvas')
  gCtx = gElCanvas.getContext('2d')
  // addListeners()
  resizeCanvas()
  renderCanvas()
}


function getEvPos(ev) {
  let pos = {
      x: ev.offsetX,
      y: ev.offsetY,
  }
  if (TOUCH_EVS.includes(ev.type)) {
      console.log('ev:', ev)
      ev.preventDefault()     
      ev = ev.changedTouches[0]      
      pos = {
          x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
          y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
      }
  }
  return pos
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

function drawTextRect(idx) {
  gCtx.globalAlpha = 0.2;
  gCtx.fillStyle = 'white'
  let rectPos = []
  if (idx === 0) {
    gCtx.fillRect(0, 20, gElCanvas.width, 60)
    rectPos = [0, 20, gElCanvas.width, 60]
  }else if(idx === 1){
    gCtx.fillRect(0, gElCanvas.height - 80, gElCanvas.width, 60)
    rectPos = [0, gElCanvas.height - 80, gElCanvas.width, 60]
  }else if(idx > 1){
    gCtx.fillRect(0, gElCanvas.height / 2 - 30, gElCanvas.width, 60)
    rectPos = [0, gElCanvas.height / 2 - 30, gElCanvas.width, 60]
  }
  gCtx.globalAlpha = 1; 
  
  return rectPos
}

function drawSticker1(offsetX,offsetY) {
  const elImg = new Image()
  elImg.src = 'img/stickers/sticker1.jpg'
  elImg.onload = () => {
      gCtx.drawImage(elImg,offsetX - 25, offsetY - 25,50,50)
  }
}

function drawSticker2(offsetX,offsetY) {
  const elImg = new Image()
  elImg.src = 'img/stickers/sticker2.jpg'
  elImg.onload = () => {
    gCtx.drawImage(elImg,offsetX - 25, offsetY - 25,50,50)
  }
}

function drawSticker3(offsetX,offsetY) {
  const elImg = new Image()
  elImg.src = 'img/stickers/sticker3.jpg'
  elImg.onload = () => {
    gCtx.drawImage(elImg,offsetX - 25, offsetY - 25,50,50)
  }
}

function drawSticker4(offsetX,offsetY) {
  const elImg = new Image()
  elImg.src = 'img/stickers/sticker4.jpg'
  elImg.onload = () => {
      gCtx.drawImage(elImg,offsetX - 25, offsetY - 25,50,50)
  }
}

function drawSticker5(offsetX,offsetY) {
  const elImg = new Image()
  elImg.src = 'img/stickers/sticker5.jpg'
  elImg.onload = () => {
      gCtx.drawImage(elImg,offsetX - 25, offsetY - 25,50,50)
  }
}

function drawSticker6(offsetX,offsetY) {
  const elImg = new Image()
  elImg.src = 'img/stickers/sticker6.jpg'
  elImg.onload = () => {
      gCtx.drawImage(elImg,offsetX - 25, offsetY - 25,50,50)
  }
}

function setShape(shape) {
  gCurrShape = shape
}

function draw(ev) {
  const { offsetX, offsetY } = ev

  switch (gCurrShape) {
      case 'sticker1':
      drawSticker1(offsetX, offsetY)
          break
      case 'sticker2':
        drawSticker2(offsetX, offsetY)
          break
      case 'sticker3':
        drawSticker3(offsetX, offsetY)
          break
      case 'sticker4':
        drawSticker4(offsetX, offsetY)
      break
      case 'sticker5':
        drawSticker5(offsetX, offsetY)
      break
      case 'sticker6':
        drawSticker6(offsetX, offsetY)
          break
  }
}

function toggleMemeEditorSectionDisplay() {
  const elMemeEditorSection = document.querySelector('.meme-editor')
  elMemeEditorSection.hidden === true ? elMemeEditorSection.hidden = false : elMemeEditorSection.hidden = true
}

function onAddLine() {
  const elLineText = document.querySelector('.text-editor')
  const meme = getGMeme()
  meme.lines.push({
        text: '',
        size: 20,
        align: 'center',
        color: 'white'
      })
  setLineText(elLineText.value)
  renderMeme()
  elLineText.value = ''
}

function onSelectLine() {
  let line = selectedLine()
}

function onDeleteSelectedLine() {
  deleteSelectedLine()
  renderMeme()
}

function onFontPlus(){
  fontPlus()
  renderMeme()
}

function onFontMinus(){
  fontMinus()
  renderMeme()
}

function onTextAlignLeft() {
  textAlignLeft()
  renderMeme()
}

function onTextAlignCenter() {
  textAlignCenter()
  renderMeme()
}

function onTextAlignRight() {
  textAlignRight()
  renderMeme()
}


function onImgInput(ev) {
  loadImageFromInput(ev, renderImg)
  toggleImgGallerySectionDisplay()
  toggleMemeEditorSectionDisplay()
  createMeme(getRandomIntInclusive(20, 80))
  resizeCanvas()
  renderMeme()
}

function loadImageFromInput(ev, onImageReady) {
  const reader = new FileReader()
  reader.onload = (event) => {
      let img = new Image()
      img.src = event.target.result
    img.onload = () => onImageReady(img)
  }
  reader.readAsDataURL(ev.target.files[0])
}

function renderImg(img) {
  gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
}

function downloadCanvas(elLink) {
  const data = gElCanvas.toDataURL()
  elLink.href = data
}

function onUploadImg() {
  const imgDataUrl = gElCanvas.toDataURL('image/jpeg')
  function onSuccess(uploadedImgUrl) {
      const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}`)
  }
  doUploadImg(imgDataUrl, onSuccess)
}

function doUploadImg(imgDataUrl, onSuccess) {
  const formData = new FormData()
  formData.append('img', imgDataUrl)
  fetch('//ca-upload.com/here/upload.php', { method: 'POST', body: formData })
      .then(res => res.text())
      .then(url => {
          onSuccess(url)
      })
}


// function drawTextBorder(ev) {

//   ev.stopPropagation()
  
//   const { offsetX, offsetY, pageX, pageY } = ev
//   const clickedStar = gStars.find(star => {
//       return (
//           offsetX >= star.x && offsetX <= star.x + BAR_WIDTH &&
//           offsetY >= star.y
//       )
//   })

//   if (clickedStar) {
//       const { name, rate } = clickedStar
//       openModal(name, rate, pageX, pageY)
//   } else {
//       closeModal()
//   }



// }

  // const star = getGMeme()
  // if (star.selectedLineIdx === 1) {
  //   gCtx.globalAlpha = 0.4;
  //   gCtx.fillStyle = 'white'
  //   gCtx.fillRect(0, 20, gElCanvas.width,60 )
  //   gCtx.globalAlpha = 1.0;
  // }
  // if (star.selectedLineIdx === 2) {
  //   gCtx.globalAlpha = 0.4;
  //   gCtx.fillStyle = 'white'
  //   gCtx.fillRect(0, gElCanvas.height-80,gElCanvas.width, 60 )
  //   gCtx.globalAlpha = 1.0;
  // }
  // if (star.selectedLineIdx > 2) {
  //   gCtx.globalAlpha = 0.4;
  //   gCtx.fillStyle = 'white'
  //   gCtx.fillRect(0, gElCanvas.height/2 - 30, gElCanvas.width,60 )
  //   gCtx.globalAlpha = 1.0;
  // }


// function onLineTextChange(elLineText){
//   const lineTextValue = elLineText.value
//   setLineText(lineTextValue)
//   renderMeme()
// }

// function addListeners() {
//   addMouseListeners()
//   addTouchListeners()
// }

// function addMouseListeners() {
//   gElCanvas.addEventListener('mousemove', onMove)
//   gElCanvas.addEventListener('mousedown', onDown)
//   gElCanvas.addEventListener('mouseup', onUp)
// }

// function addTouchListeners() {
//   gElCanvas.addEventListener('touchmove', onMove)
//   gElCanvas.addEventListener('touchstart', onDown)
//   gElCanvas.addEventListener('touchend', onUp)
// }

// function onDown(ev) {
//   // Get the ev pos from mouse or touch
//   const lines = getGMeme().lines
//   const pos = getEvPos(ev)
//   if () return

//   setCircleDrag(true)
//   //Save the pos we start from
//   gStartPos = pos
//   document.body.style.cursor = 'grabbing'
// }