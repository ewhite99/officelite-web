
    let releaseDate = new Date("May 31, 2023 12:00:00").getTime();
    
    let timer = setInterval(tick, 1000)

    function tick () {
        let now = new Date().getTime();

        let difference = releaseDate - now

        if (difference > 0){
            let days = Math.floor( difference / (1000 * 60 * 60 * 24))
            let hours = Math.floor((difference % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)))
            let minutes = Math.floor((difference % (1000 * 60 * 60) / (1000 * 60)))
            let seconds = Math.floor((difference % (1000 * 60) / 1000))

            if (days < 10){
                days = `0${days}`
            }    
            if (hours < 10){
                hours = `0${hours}`
            }
            if (minutes < 10){
                minutes = `0${minutes}`
            }
            if (seconds < 10){
                seconds = `0${seconds}`
            }
            
        document.getElementById("days").textContent = days

        document.getElementById("hours").textContent = hours

        document.getElementById("minutes").textContent = minutes

        document.getElementById("seconds").textContent = seconds
        }
    }

    

