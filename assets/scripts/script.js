let addEventWindowOpen = false;
let addEventWindowId;

class CalendarDay {
    constructor(dayName, dayNum, monthName, year) {
        this.dayName = dayName;
        this.dayNum = dayNum;
        this.month = monthName;
        this.year = year;
        this.id = `${this.year}-${this.month}-${this.dayNum}`;
    }

    renderDayEl() {
        const dayEl = document.createElement('li');
        dayEl.className = 'day';
        dayEl.id = `${this.id}-el`
        dayEl.innerHTML = `
            <div id="${this.id}-label" class="day-label">
                <h2>${this.dayName}</h2>
                <h2>${this.month} ${this.dayNum}, ${this.year}</h2>
            </div>
            <div class="day-events">
                <ul id="${this.id}-event" class="event-ul"></ul>
            </div>
        `;
        document.getElementById('calendar-body').appendChild(dayEl);

        const dayElement = document.getElementById(`${this.id}-label`);
        dayElement.addEventListener('click', this.renderAddEventWindow);
    }

    renderAddEventWindow = () => {
        if (!addEventWindowOpen) {
            addEventWindowOpen = true;
            addEventWindowId = `${this.id}`;
            const addEventWindowEl = document.createElement('div');
            addEventWindowEl.className = 'add-event-window';
            addEventWindowEl.id = `${this.id}`;
            addEventWindowEl.innerHTML = `
                <div class="add-event-window-sub-div">
                    <label for="input-event-name">Event Name</label>
                    <input id="input-event-name" type="text">
                </div>
                <div class="add-event-window-sub-div">
                    <label for="input-event-info">Event Information</label>
                    <textarea id="input-event-info" rows="10" ></textarea>
                </div>
                <div class="add-event-window-sub-div">
                    <button class="add-event-window-button-${this.id}">Add Event</button>
                </div>
            `;
            const selectedDay = document.getElementById(`${this.id}-el`);
            selectedDay.insertBefore(addEventWindowEl, selectedDay.firstElementChild.nextSibling);

            const addEventWindowBtn = document.querySelector(`.add-event-window-button-${this.id}`);
            addEventWindowBtn.addEventListener('click', this.getEventInfo);
        } else if (addEventWindowOpen) {
            this.closeAddEventWindow(this.id);
        }
    }

    closeAddEventWindow = (id) => {
        // if the addEventWindow is open inside of this event day then close window using this.id
            if (addEventWindowId === id) {
                const addEventWindowBtn = document.querySelector(`.add-event-window-button-${id}`);
                addEventWindowBtn.removeEventListener;
                document.getElementById(id).remove();
                addEventWindowOpen = false;
            } else {
                // if the addEventWindow is open inside of a different event day then close window using addEventWindowId.
                const addEventWindowBtn = document.querySelector(`.add-event-window-button-${addEventWindowId}`);
                addEventWindowBtn.removeEventListener;
                document.getElementById(addEventWindowId).remove();
                addEventWindowOpen = false;
                this.renderAddEventWindow();
            }
    }

    getEventInfo = () => {
        const eventName = document.getElementById('input-event-name').value;
        const eventDescription = document.getElementById('input-event-info').value;
        // on 'Submit' pass this.id, eventName, eventDescription to CalendarEvent.renderEventEl()
        const newEvent = new CalendarEvent(this.dayName, this.dayNum, this.month, this.year);
        newEvent.renderEventEl(eventName, eventDescription);
    }
}

class CalendarEvent extends CalendarDay {
    constructor(dayName, dayNum, monthName, year) {
        super(dayName, dayNum, monthName, year);
        // this.eventName = eventName;
        // this.eventInformation = eventInfo;
    }

    renderEventEl(eventName, eventInfo) {
        const eventEl = document.createElement('li');
        eventEl.className = 'event-li';
        eventEl.innerHTML = `
            <h3>${eventName}</h3>
            <p>${eventInfo}</p>
        `;
        document.getElementById(`${this.id}-event`).appendChild(eventEl);
        
        this.closeAddEventWindow(this.id);
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

const newDay = new CalendarDay('Sunday', '1', 'March', '2021');
newDay.renderDayEl('March', '2021');

const newDay2 = new CalendarDay('Monday', '2', 'March', '2021');
newDay2.renderDayEl('March', '2021');

// test for setting up click event on dayEl
// const dayElement = document.querySelector('.day-label');
// dayElement.addEventListener('click', newDay.getEventInfo);

// const newEvent = new CalendarEvent('1', 'Sunday', 'March', '2021', 'Party', 'A birthday party for Kalias!' );
// newEvent.renderEventEl(/*maybe put eventName and eventDesc in here instead */);