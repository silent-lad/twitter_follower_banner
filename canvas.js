const fs = require('fs')
const { registerFont, createCanvas, loadImage } = require('canvas')

registerFont('MadHacker.ttf', { family: 'MadHacker' })

const width = 1500
const height = 500

const canvas = createCanvas(width, height)
const context = canvas.getContext('2d')

context.fillStyle = '#fff'
context.fillRect(0, 0, width, height)

context.font = '70pt "MadHacker"'
context.textAlign = 'center'
context.textBaseline = 'top'
context.fillStyle = '#3574d4'

const text = 'HI I AM silentlad'

const textWidth = context.measureText(text).width
context.fillRect(600 - textWidth / 2 - 10, 170 - 5, textWidth + 20, 120)
context.fillStyle = '#000'
context.fillText(text, 600, 170)

context.fillStyle = '#000'
context.font = 'bold 30pt Menlo'
context.fillText('silentlad.com', 500, 530)

loadImage('./logo.jpg').then(image => {
  context.drawImage(image, 340, 415, 70, 70)
  const buffer = canvas.toBuffer('image/png')
  fs.writeFileSync('./test.png', buffer)
})