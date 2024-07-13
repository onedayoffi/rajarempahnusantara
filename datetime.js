document.addEventListener('DOMContentLoaded', (event) => {
    const dateElement = document.getElementById('date');
    const optionsDate = { day: 'numeric', month: 'long', year: 'numeric' };
    const optionsTime = { hour: '2-digit', minute: '2-digit' };
    const today = new Date();

    const formattedDate = today.toLocaleDateString('id-ID', optionsDate);
    const formattedTime = today.toLocaleTimeString('id-ID', optionsTime);

    dateElement.textContent = `${formattedDate} - ${formattedTime}`;
});