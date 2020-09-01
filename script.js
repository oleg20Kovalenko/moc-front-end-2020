function OnSubmit(event) {
    event.preventDefault();
    ResetColor();
    AddColor();
    SetValue();
}

function ResetColor() {
    let element = document.getElementById("text");
    element.classList.remove("green", "red");
}

function AddColor() {
    const pattern = /[!@#$%^&*(),.?":{}|<>]/g;
    let element = document.getElementById("username");
    let text = document.getElementById("text");
    let value = element.value;
    let inRange = pattern.test(value);
    if (value.length > 3) {
        text.classList.add("green")
    }
    if (inRange) {
        text.classList.add("red")
    }
}

function SetValue() {
    let element = document.getElementById("username");
    document.getElementById("text").innerHTML = element.value;
    element.value = "";
}