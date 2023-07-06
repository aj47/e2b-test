document.addEventListener('DOMContentLoaded', (event) => {
    let isRed = true;
    const button = document.getElementById('toggleButton');
    button.addEventListener('click', toggleBackgroundColor);

    function toggleBackgroundColor() {
        if (isRed) {
            document.body.classList.remove('bg-red');
            document.body.classList.add('bg-white');
        } else {
            document.body.classList.remove('bg-white');
            document.body.classList.add('bg-red');
        }
        isRed = !isRed;
    }
});