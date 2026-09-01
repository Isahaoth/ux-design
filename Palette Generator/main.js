let colors = [];

newPalette();

function createColor()
{
    return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}

function newPalette()
{
    colors = [];
    for (let i = 1; i <= 5; i++) {
        let color = createColor();
        document.getElementById(`col${i}`).style.backgroundColor = color;
        document.getElementById(`code${i}`).textContent = color;
        colors.push(color);
    }
    return colors;
}

function copyClipboardColor(event)
{
    const buttonId = event.target.id;

    const index = buttonId - 1;

    return colors[index];
}

document.querySelector(".generate").addEventListener("click", newPalette);

document.querySelectorAll(".copy").forEach(button => {
    button.addEventListener("click", (event) => {
        const colorToClipboard = copyClipboardColor(event);
        if (colorToClipboard) {
            navigator.clipboard.writeText(colorToClipboard);
        }
    });
});


