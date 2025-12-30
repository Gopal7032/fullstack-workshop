console.log(`Console log print chai ☕`);

let count = 0;

const counterEl = document.getElementById("counter");

// Initial render
counterEl.textContent = count;

// Helper function to update UI
const updateCounter = (color = "black") => {
    counterEl.textContent = count;
    counterEl.style.color = color;
};

const increasebtn = () => {
    count += 1;
    updateCounter("green");
};

const decreasebtn = () => {
    if (count > 0) {
        count -= 1;
        updateCounter(count === 0 ? "black" : "red");
    }
};

const resetbtn = () => {
    count = 0;
    updateCounter("black");
};

const Adding1 = () => {
    count += 1;
    updateCounter();
};

const Adding5 = () => {
    count += 5;
    updateCounter();
};

const Adding10 = () => {
    count += 10;
    updateCounter();
};
