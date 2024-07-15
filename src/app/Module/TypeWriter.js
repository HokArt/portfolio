// useEffect(() => {
  //   const target = document.getElementById('edem')
  //   const text = 'kokou major achille Hoka'
  //   const typingDelay = 50

  //   let i = 0
  //   function typeWriter() {
  //     if (i < text.length) {
  //       target.textContent += text.charAt(i)
  //       i++
  //       setTimeout(typeWriter, typingDelay)
  //     }
  //   }
  //   typeWriter()
  // }, [])


document.addEventListener('DOMContentLoaded', function() {
  const target = document.getElementById('edem')
  const text = 'kokou major achille Hoka'
  const typingDelay = 50

  function typeWriter(textElement, textToWrite, delay) {
    let i = 0
    function type() {
      if (i < textToWrite.length) {
        textElement.textContent += textToWrite.charAt(i)
        i++
        setTimeout(type, delay)
      }
    }
    type()
  }
  typeWriter(target, text, typingDelay)
})