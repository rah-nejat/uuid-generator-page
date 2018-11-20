import uuid from 'uuid/v4';

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
}

function updateHistory() {
    h.innerHTML = history.reduce((thing, val, index) => thing += `<li>${val}</li>`)
}