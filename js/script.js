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
let f = true

function formatTime(time) {
    return time < 10 ? `0${time}` : time
}

function clock() {
    const time = new Date()
    const hours = time.getHours()
    const minutes = time.getMinutes() + (time.getHours() * 60)
    const seconds = time.getSeconds() + (time.getMinutes() * 60) + (time.getHours() * 3600)
    const transitionStyle = f ? '' : 'transition: 1s linear;'
    hour.style = `transform: rotate(${hours * 30}deg); ${transitionStyle}`
    min.style = `transform: rotate(${minutes * 6}deg); ${transitionStyle}`
    sec.style = `transform: rotate(${seconds * 6}deg); ${transitionStyle}`
    document.querySelector('.hours').textContent = formatTime(hours)
    document.querySelector('.minutes').textContent = formatTime(minutes % 60)
    f = false;
    setTimeout(clock, 1000)
}

clock()
