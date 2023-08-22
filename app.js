setInterval(setClock, 1000)

    const hourHand = document.querySelector('[data-hour-hand]')
    const miniuteHand = document.querySelector('[data-minute-hand]')
    const secondHand = document.querySelector('[data-second-hand]')


        function setClock() {
            const currentDate = new Date()
            const secondsRatio = currentDate.getSeconds() / 60
            const minutesRatio = (secondsRatio + currentDate.getMinutes() ) / 60

            const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

                setRotation(secondHand, secondsRatio)
                setRotation(miniuteHand, minutesRatio)
                setRotation(hourHand, hoursRatio)
        }
    function setRotation(element, rotationRatio){
        element.style.setProperty('--rotation', rotationRatio * 360)
    }
    setClock()


//     var x = document.body;
//      var color =  ["#03045e" , "#023e8a", "#0077b6", "#0096c7", "#00b4d8"];

//   setInterval(function() {
//       for (let y = 0; y < 4; y++) {
//           x.style.backgroundColor =
//               color[Math.floor(Math.random() * 4)];
//      }
// }, 300) / 6666


// var b = document.clock;
// var color =  ["red" , "green", "#0096c7", "#03045e", "#023e8a" ];

// setInterval(function() {
//   for (let y = 0; y < 4; y++) {
//       b.style.backgroundColor =
//           color[Math.floor(Math.random() * 4)];
//  }
// }, 300) / 6666
