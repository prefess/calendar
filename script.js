const date = new Date();

const renderCalendar = () => {
    const monthDays = document.querySelector('.days');

    // date.setMonth(5);
    
    date.setDate(1);
    
    const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    
    // const prevLastDay = new Date(date.getFullYear(), date.getMonth(), 0).getDate();
    
    const firstDayIndex = date.getDay();
    
    const lastDayIndex = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDay();
    
    const nextDays= 7 - lastDayIndex - 1;
    
    const months = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ];
    
    document.querySelector('.date h1').innerHTML = months[date.getMonth()];

    document.querySelector('.date p').innerHTML = date.getFullYear();
    
    let days = "";
    
    for(let x = firstDayIndex; x > 0; x--) {
        days += `<div class="prev-date"> </div>`;
        // days += `<div class="prev-date">${prevLastDay-x+1}</div>`;
    }
    
    for(let i = 1; i <= lastDay; i++) {
        let day = new Date(date.getFullYear(), date.getMonth(), i);
        let weekDay = day.getDay();
        if(i === new Date().getDate() && date.getMonth() === new Date().getMonth() && date.getFullYear() === new Date().getFullYear()) {
            days += `<div class="today">${i}</div>`
        } else {
            if(weekDay == 0) {
                days += `<div class="weekend">${i}</div>`;
            } else {
                days += `<div>${i}</div>`;
            }
        }
    }
    
    for(let j = 1; j <= nextDays; j++) {
        days += `<div class="next-date"> </div>`;
        // days += `<div class="next-date">${j}</div>`;
    }
    monthDays.innerHTML = days;
}

document.querySelector('.prev').addEventListener('click', () => {
    date.setMonth(date.getMonth() - 1);
    renderCalendar();
})

document.querySelector('.next').addEventListener('click', () => {
    date.setMonth(date.getMonth() + 1);
    renderCalendar();
})

document.querySelector('.current').addEventListener('click', () => {
    const d = new Date();
    date.setMonth(d.getMonth());
    date.setFullYear(d.getFullYear());
    renderCalendar();
})

renderCalendar();
