let layer1 = document.querySelector('div.layer1')
let layer2 = document.querySelector('div.layer2')

function makeColor() {
  let h = 50 
  let s = 50 
  let l = 50
  return `hsl(${h}, ${s}%, ${l}%)`
}

function makeGradient() {
  let c1 = makeColor()
  let c2 = makeColor()
  let angle = 45
  return `linear-gradient(${angle}deg, ${c1}, ${c2})`
}

function changeBg() {
  layer1.style.backgroundImage = makeGradient()
  layer2.style.backgroundImage = makeGradient()
}

changeBg()
