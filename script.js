let count = 0;

const valueEl = document.querySelector("#value");
const incBtn = document.querySelector("#inc");
const decBtn = document.querySelector("#dec");
const resetBtn = document.querySelector("#reset");

function render() {
    valueEl.textContent = count;
}

incBtn.addEventListener('click', () => {
    count++;
    render();
});

decBtn.addEventListener('click', () => {
    count--;
    render();
});

resetBtn.addEventListener('click', () => {
    count = 0;
    render();
});

render();
