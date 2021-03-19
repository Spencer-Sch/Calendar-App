class CalendarDay {
    constructor(dayName, dayNum, monthName, year) {
        this.dayName = dayName;
        this.day = dayNum;
        this.month = monthName;
        this.year = year;
        this.date = `${this.year}-${this.month}-${this.day}`;
    }

    renderDayEl() {
        const dayEl = document.createElement('li');
        dayEl.className = 'day';
        dayEl.innerHTML = `
            <div class="day-label">
                <h2>${this.dayName}</h2>
                <h2>${this.month} ${this.day}, ${this.year}</h2>
            </div>
            <div class="day-events">
                <ul id="${this.date}" class="event-ul"></ul>
            </div>
        `;
        document.getElementById('calendar-body').appendChild(dayEl);
    }

    getEventInfo() {
        // show modal
        // on 'Submit' pass this.dayName, this.day, this.month, this.year, eventName, eventDescription to CalendarEvent.renderEventEl()
    }
}

class CalendarEvent extends CalendarDay {
    constructor(dayName, dayNum, monthName, year, eventName, eventDesc) {
        super(dayNum, dayName, monthName, year);
        this.eventName = eventName;
        this.eventDescription = eventDesc;
    }

    renderEventEl() {
        const eventEl = document.createElement('li');
        eventEl.className = 'event-li';
        eventEl.innerHTML = `
            <p>${this.eventName}</p>
        `;
        document.getElementById(`${this.date}`).appendChild(eventEl);
    }
}




class CalendarWeek {
    constructor() {
        this.numOfDaysInWeek = 7;
        this.weekDayNames = [
            'Sunday',
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
        ];
    }

    renderWeekEl() {
        const weekEl = document.createElement('ul');
    }
}

const testClick = () => {
    console.log('Test Click!');
}

const newDay = new CalendarDay('Sunday', '1', 'March', '2021');
newDay.renderDayEl('March', '2021');

// test for setting up click event on dayEl
const dayElement = document.querySelector('.day-label');
dayElement.addEventListener('click', testClick);

const newEvent = new CalendarEvent('1', 'Sunday', 'March', '2021', 'Party', 'A birthday party for Kalias!' );
newEvent.renderEventEl(/*maybe put eventName and eventDesc in here instead */);
