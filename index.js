import uuid from 'uuid/v4';
import ClipboardJS from 'clipboard';

const clipboard = new ClipboardJS('#copy');

clipboard.on('success', (event) => {
    event.clearSelection();
});

const text = document.getElementById('uuid');
const button = document.getElementById('generate');
const h = document.getElementById('history');

const history = [];

button.onclick = function(event) {
    const u = uuid();
    text.innerHTML = u;
    history.unshift(u);
    if (history.length > 10){
        history.pop();
    }
    updateHistory();

    // new ClipboardJS('#uuid', {
    //     text: function(trigger) {
    //         console.log(trigger);
    //         return trigger.getAttribute('aria-label');
    //     },
    //     target: function(trigger) {
    //         console.log(trigger);
    //         return trigger.nextElementSibling;
    //     }
    // });
}

function updateHistory() {
    h.innerHTML = history.reduce((thing, val, index) => thing += `<li>${val}</li>`)
}