function add_event(element) {
    element.innerHTML +=
    `
    <div class='event'>
        <p contenteditable='true'>Event info</p>
        <p>Duration: <span contenteditable='true'>[duration]</span></p>
        <button onclick='this.parentElement.remove()'>Delete</button>
    </div>
    `;
}

function populate_hours() {
    let blocks = document.getElementsByClassName("hour-block");
    let hours = 0;
    for (let i = 0; i < blocks.length; i++) {
        blocks[i].innerHTML = `<td>${get_hour_from_num(hours)}</td>`;
        for (let j = 0; j < 7; j++) {
            blocks[i].innerHTML += "<td><button onclick='add_event(this.parentElement)'>New Event</button></td>";
        }
        hours++;
    }
}