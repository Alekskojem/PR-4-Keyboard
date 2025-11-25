const memoryKeys = document.querySelectorAll(".memory-keys li");
const capslockLightElement = document.querySelector(
    ".info-lights .capslock-light"
);
const numlockLightElement = document.querySelector(
    ".info-lights .numlock-light"
);

const lists = document.querySelectorAll(".keyboard-wrapper li");

document.addEventListener("click", handleListClick);

document.addEventListener("keydown", handleKeydown);

document.addEventListener("keyup", handleKeyup);

window.addEventListener("blur", handleWindowBlur);

function handleListClick(event) {
    const el = event.target;
    
    if (
        el.parentNode.classList.contains("memory-keys") &&
        !el.classList.contains("memory")
    ) {
        memoryKeys.forEach((keyEl) => keyEl.classList.remove("active"));
        el.classList.add("active");
    }

    if (
        el.parentNode.classList.contains("utility-keys") &&
        el.classList.contains("game")
    ) {
        el.classList.toggle("color-white");
    }

    if (
        el.parentNode.classList.contains("numpad-keys") &&
        el.classList.contains("numlock")
    ) {
        numlockLightElement.classList.toggle("active");
    }

    if (
        el.parentNode.classList.contains("center-keys_row-3") &&
        el.classList.contains("caps-key")
    ) {
        capslockLightElement.classList.toggle("active");
    }
}

function handleKeydown(event) {
    lists.forEach((list) => {
        if (list.dataset.key === event.code && !event.repeat) {
            list.click();
            list.classList.add("click");
        }
    });
}

function handleKeyup(event) {
    lists.forEach((list) => {
        if (list.dataset.key === event.code) {
            if (list.classList.contains("click")) {
                list.classList.remove("click");
            }
        }
    });
}

function handleWindowBlur() {
    lists.forEach((list) => {
        if (list.classList.contains("click")) {
            list.classList.remove("click");
        }
    });
}