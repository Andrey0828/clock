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

const hour = document.querySelector('.h'),
    min = document.querySelector('.m'),
    sec = document.querySelector('.s')

let h = 330
let m = s = 354

function formatTime(time) {
    return time < 10 ? `0${time}` : time
}

function clock() {
    const time = new Date()
    const hours = time.getHours() * 30
    const minutes = time.getMinutes() * 6
    const seconds = time.getSeconds() * 6
    if (hours == 330  || h > 330) {
        h += 30
        hour.style = `transform: rotate(${h}deg); transition: 1s linear;`
    } else {
        hour.style = `transform: rotate(${hours}deg); transition: 1s linear;`
    }
    if (minutes == 354  || m > 354) {
        m += 6
        min.style = `transform: rotate(${m}deg); transition: 1s linear;`
    } else {
        min.style = `transform: rotate(${minutes}deg); transition: 1s linear;`
    }
    if (seconds == 354  || s > 354) {
        s += 6
        sec.style = `transform: rotate(${s}deg); transition: 1s linear;`
    } else {
        sec.style = `transform: rotate(${seconds}deg); transition: 1s linear;`
    }
    document.querySelector('.hours').textContent = formatTime(hours / 30)
    document.querySelector('.minutes').textContent = formatTime(minutes / 6)
    setTimeout(clock, 1000)
}

clock()
