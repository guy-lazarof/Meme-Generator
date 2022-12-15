'use strict'

function makeId(length = 3) {
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    var text = ''
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}

function makeLorem(wordCount = 100) {
    const words = ['Thesky','above','the','was','television','tuned','to','channel','.','All','happened','less','.','I','had','story','bit','people','and','all','happens','cases','time','it','was','different','.','It','was','sure','to','burn']
    var text = ''
    while (wordCount > 0) {
        wordCount--
        text += words[Math.floor(Math.random() * words.length)] + ' '
    }
    return text
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min //The maximum is inclusive and the minimum is inclusive 
}
