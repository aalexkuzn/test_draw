const container = document.getElementById("container")

let contentPads = []
for (let i = 0; i < 5000; i++){
    contentPads.push (document.createElement ('div'))
    contentPads[i].classList.add ('drawpad')
    container.append (contentPads[i])
    contentPads[i].onmouseover = drawFunc;
}


let current = undefined

function drawFunc() {
  if (current) {
    // current.classList.remove('mouseover')
  }
  this.classList.add('mouseover')
  current = this
}