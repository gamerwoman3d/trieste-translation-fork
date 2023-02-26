let tool_text = ''
let tool_clickable = true
const tool = document.getElementById('tool_text')
const tool_text_container = $('.info_text_container')

$('#info').click(() => {
  if(tool_clickable) {
    showText(tool_text)
    tool_clickable = false
  }
})

const showText = (text) => {
  sound_dialog.play()

  const typewriter = new Typewriter(tool, {
    delay: 60
  })

  tool_text_container.show()

  typewriter
    .pauseFor(200)
    .typeString(text)
    .start()
    .callFunction(() => {
      stopSoundDialog()
    })
    .pauseFor(1500)
    .callFunction(() => {
      hideText()
    })
}

const hideText = () => {
  tool_text_container.fadeOut()

  setTimeout(() => {
    tool.innerHTML = ''
    tool_clickable = true
  }, 500)
}

const changeInfoText = (text = 'Navigate from scene to scene with <b>the arrows</b>.<br/>And take a good look at the paintings, some areas offer <b>an interaction</b>.') => {
  tool_text = text
}