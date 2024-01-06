let hours = minutes = seconds = 0
let isRunning = false

document.body.querySelector('.stopwatch__btn').addEventListener('click', function() {
    isRunning ? (this.textContent = "start", stopStopwatch()) : (this.textContent = "stop", startStopwatch())
})

function startStopwatch() {
    resetStopwatch()
    isRunning = true
    timer = setTimeout(stopwatch, 1000)
}

function stopStopwatch() {
    isRunning = false
    clearTimeout(timer)
}

function updateStopwatch(hours, minutes, seconds) {
    document.body.querySelector('.stopwatch__hours').textContent = hours
    document.body.querySelector('.stopwatch__minutes').textContent = minutes
    document.body.querySelector('.stopwatch__seconds').textContent = seconds
}

function resetStopwatch() {
    hours = minutes = seconds = 0
    updateStopwatch(hours, minutes, seconds)
}

function stopwatch() {
    if (isRunning) {
        seconds++
        if (seconds == 60) {
            seconds = 0
            minutes++
            if (minutes == 60) {
                minutes = 0
                hours++
            }
        }
    }
    updateStopwatch(hours, minutes, seconds)
    timer = setTimeout(stopwatch, 1000)
}


document.querySelectorAll('.tabsItem').forEach(function(element) {
    element.addEventListener('click', function() {
        document.querySelectorAll('.tabsItem').forEach(function(item) {
            item.classList.remove('active')
        })
        this.classList.add('active')
        const tabText = this.textContent.toLowerCase().trim()
        document.querySelector('.clock').classList.toggle('active', tabText == 'часы')
        document.querySelector('.stopwatch').classList.toggle('active', tabText == 'секундомер')
    })
})
