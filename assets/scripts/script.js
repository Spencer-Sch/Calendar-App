let modalOpen = false;
let modalId;

class CalendarDay {
    constructor(dayName, dayNum, monthName, year) {
        this.dayName = dayName;
        this.day = dayNum;
        this.month = monthName;
        this.year = year;
        this.id = `${this.year}-${this.month}-${this.day}`;
        this.modalOpen = false;
    }

    renderDayEl() {
        const dayEl = document.createElement('li');
        dayEl.className = 'day';
        dayEl.id = `${this.id}-el`
        dayEl.innerHTML = `
            <div id="${this.id}-label" class="day-label">
                <h2>${this.dayName}</h2>
                <h2>${this.month} ${this.day}, ${this.year}</h2>
            </div>
            <div class="day-events">
                <ul id="${this.id}-event" class="event-ul"></ul>
            </div>
        `;
        document.getElementById('calendar-body').appendChild(dayEl);

        const dayElement = document.getElementById(`${this.id}-label`);
        dayElement.addEventListener('click', this.renderModal);
    }

    renderModal = () => {
        if (!modalOpen) {
            modalOpen = true;
            modalId = `${this.id}`;
            const modalEl = document.createElement('div');
            modalEl.className = 'modal';
            modalEl.id = `${this.id}`;
            modalEl.innerHTML = `
                <div class="modal-sub-div">
                    <label for="input-event-name">Event Name</label>
                    <input id="input-event-name" type="text">
                </div>
                <div class="modal-sub-div">
                    <label for="input-event-info">Event Information</label>
                    <textarea id="input-event-info" rows="10" ></textarea>
                </div>
                <div class="modal-sub-div">
                    <button class="modal-button-${this.id}">Add Event</button>
                </div>
            `;
            const selectedDay = document.getElementById(`${this.id}-el`);
            selectedDay.insertBefore(modalEl, selectedDay.firstElementChild.nextSibling);

            const modalBtn = document.querySelector(`.modal-button-${this.id}`);
            modalBtn.addEventListener('click', this.getEventInfo);
        } else if (modalOpen) {
            if (modalId === this.id) {
                const modalBtn = document.querySelector(`.modal-button-${this.id}`);
                modalBtn.removeEventListener;
                document.getElementById(this.id).remove();
                modalOpen = false;
            } else {
                const modalBtn = document.querySelector(`.modal-button-${modalId}`);
                modalBtn.removeEventListener;
                document.getElementById(modalId).remove();
                modalOpen = false;
                this.renderModal();
            }
        }
    }

    getEventInfo = () => {
        console.log('Test Text');
        const eventName = document.getElementById('input-event-name').value;
        // on 'Submit' pass this.id, eventName, eventDescription to CalendarEvent.renderEventEl()
    }
}

class CalendarEvent extends CalendarDay {
    constructor(dayName, dayNum, monthName, year, eventName, eventInfo) {
        super(dayNum, dayName, monthName, year);
        this.eventName = eventName;
        this.eventInformation = eventInfo;
    }

    renderEventEl() {
        const eventEl = document.createElement('li');
        eventEl.className = 'event-li';
        eventEl.innerHTML = `
            <p>${this.eventName}</p>
        `;
        document.getElementById(`${this.id}-event`).appendChild(eventEl);
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

const newEvent = new CalendarEvent('1', 'Sunday', 'March', '2021', 'Party', 'A birthday party for Kalias!' );
newEvent.renderEventEl(/*maybe put eventName and eventDesc in here instead */);