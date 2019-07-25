setInterval(() => {
  document.getElementById(
    'time'
  ).innerHTML = `Hello.The time is ${new Date().toLocaleTimeString()}.`
}, 500)
