'use-strict'

var gFilterBy = { memeKeywords: '', }
var gImgs = [
  {
    id: 0, url: 'img/1.jpg', keywords: ['funny', 'man']
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
    id: 6, url: 'img/7.jpg', keywords: ['kid', 'surprise']
  },{
    id: 7, url: 'img/8.jpg', keywords: ['funny', 'listening']
  },{
    id: 8, url: 'img/9.jpg', keywords: ['funny', 'kid','bad']
  },{
    id: 9, url: 'img/10.jpg', keywords: ['obama', 'laugh']
  },{
    id: 10, url: 'img/11.jpg', keywords: ['fight', 'boys']
  },{
    id: 11, url: 'img/12.jpg', keywords: ['funny', 'man']
  },{
    id: 12, url: 'img/13.jpg', keywords: ['cheers', 'success']
  },{
    id: 13, url: 'img/14.jpg', keywords: ['surprise', 'matrix']
  },{
    id: 14, url: 'img/15.jpg', keywords: ['mad', 'zero','funny']
  },{
    id: 15, url: 'img/16.jpg', keywords: ['funny', 'laugh']
  },{
    id: 16, url: 'img/17.jpg', keywords: ['putin', 'war']
  },{
    id: 17, url: 'img/18.jpg', keywords: ['every where', 'toy']
  },
];

function getAllImgs() {
  const allImgs = gImgs
  return allImgs;
}

function getFilterBy() {
  const filterBy = gFilterBy.memeKeywords
  return filterBy;
}

function getFilterImgs() {
  var gImgs = getAllImgs()
  var filterImgs = gImgs.filter(img => img.keywords.find((keyword) => {
    if (keyword.includes(gFilterBy.memeKeywords)){return true}
  }))
  return filterImgs
}
function setGalleryFilter(filterBy) {
  gFilterBy.memeKeywords = filterBy
  
}