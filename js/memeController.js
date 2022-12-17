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

function drawSticker1(offsetX,offsetY) {
  const elImg = new Image() // Create a new html img element
  elImg.src = 'img/stickers/sticker1.jpg' // Send a network req to get that
  elImg.onload = () => {
      gCtx.drawImage(elImg,offsetX, offsetY,50,50)
  }
}

function drawSticker2(offsetX,offsetY) {
  const elImg = new Image() // Create a new html img element
  elImg.src = 'img/stickers/sticker2.jpg' // Send a network req to get that
  elImg.onload = () => {
    gCtx.drawImage(elImg,offsetX, offsetY,50,50)
  }
}

function drawSticker3(offsetX,offsetY) {
  const elImg = new Image() // Create a new html img element
  elImg.src = 'img/stickers/sticker3.jpg' // Send a network req to get that
  elImg.onload = () => {
    gCtx.drawImage(elImg,offsetX, offsetY,50,50)
  }
}

function drawSticker4(offsetX,offsetY) {
  const elImg = new Image() // Create a new html img element
  elImg.src = 'img/stickers/sticker4.jpg' // Send a network req to get that
  elImg.onload = () => {
      gCtx.drawImage(elImg,offsetX, offsetY,50,50)
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
  }
}

function drawTextRect(idx) {
      gCtx.globalAlpha = 0.2;
      gCtx.fillStyle = 'white'
      
      if (idx ===0) {
        gCtx.fillRect(0, 20, gElCanvas.width, 60)
      }else if(idx ===1){
        gCtx.fillRect(0, gElCanvas.height-80, gElCanvas.width, 60)
      }else if(idx > 1){
        gCtx.fillRect(0, gElCanvas.height/2 -30, gElCanvas.width, 60)
      }
      gCtx.globalAlpha = 1;
  

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

function onShareMeme(){
  
}

function onUploadImg(){
  
}

function onDownloadMeme(){
  
}


function onImgInput(ev) {
  loadImageFromInput(ev, renderImg)
}

function loadImageFromInput(ev, onImageReady) {
  const reader = new FileReader()
  // After we read the file
  reader.onload = (event) => {
      let img = new Image() // Create a new html img element
      img.src = event.target.result // Set the img src to the img file we read
      // Run the callBack func, To render the img on the canvas
      img.onload = () => onImageReady(img)
  }

  reader.readAsDataURL(ev.target.files[0]) // Read the file we picked

}

function renderImg(img) {
  // Draw the img on the canvas
  gCtx.drawImage(img, 0, 0, gElCanvas.width, gElCanvas.height)
}


function downloadCanvas(elLink) {
  const data = gElCanvas.toDataURL()
  elLink.href = data
}

function onUploadImg() {
  const imgDataUrl = gElCanvas.toDataURL('image/jpeg') // Gets the canvas content as an image format

  // A function to be called if request succeeds
  function onSuccess(uploadedImgUrl) {
      // Encode the instance of certain characters in the url
      const encodedUploadedImgUrl = encodeURIComponent(uploadedImgUrl)
      window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodedUploadedImgUrl}&t=${encodedUploadedImgUrl}`)
  }
  // Send the image to the server
  doUploadImg(imgDataUrl, onSuccess)
}

function doUploadImg(imgDataUrl, onSuccess) {
  // Pack the image for delivery
  const formData = new FormData()
  formData.append('img', imgDataUrl)
  // Send a post req with the image to the server
  fetch('//ca-upload.com/here/upload.php', { method: 'POST', body: formData })
      .then(res => res.text())
      .then(url => {
          onSuccess(url)
      })
}

// function addListeners() {
//   addMouseListeners()
//   addTouchListeners()
//   window.addEventListener('resize', () => {
//       resizeCanvas()

//   })
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