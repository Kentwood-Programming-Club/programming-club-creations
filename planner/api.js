function add_event(element) {
    element.innerHTML +=
        `<div class='event'>
            <input type='text' placeholder='Event info' />
            <p>Duration: <input type='text' /></p>
            <button onclick='removeEvent(this)'>Delete</button>
        </div>`;
}

const removeEvent = (event) => {
    event.parentElement.remove();
}

function populate_hours() {
    let blocks = document.getElementsByClassName("hour-block");
    let hours = 0;
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].innerHTML = `<td class='num'>${get_hour_from_num(hours)}</td>`;
        for (let j = 0; j < 7; j++) {
            blocks[i].innerHTML += "<td><button class='new-event' onclick='add_event(this.parentElement)'>New Event</button></td>";
        }
        hours++;
    }
}