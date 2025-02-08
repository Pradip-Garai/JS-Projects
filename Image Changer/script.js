const button = document.getElementById('generate'); // Make sure button exists
const print = document.getElementById('img'); // Get div where image will be shown

button.addEventListener('click', () => {
    let index = Math.floor(Math.random() * 10); // Generate random index (0-2)
    print.innerHTML = `<img src="./${index}.jpg" alt="banana">`;
});
