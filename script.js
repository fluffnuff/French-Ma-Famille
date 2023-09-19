const toggleButton = document.getElementById('toggle-theme');
const body = document.body;

toggleButton.onclick = () => {
    if (body.classList.contains('dark')) {
        body.classList.remove('dark');
        body.classList.add('light');
        toggleButton.innerText = `Haha, now you're blind :)`
    } else {
        body.classList.remove('light');
        body.classList.add('dark');
        toggleButton.innerText = `Click Me!`
    }
}