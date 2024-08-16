document.addEventListener('DOMContentLoaded', () => {
    const calendar = document.getElementById('calendar');
    const today = new Date();
    const currentDay = today.getDate();
    const currentMonth = today.toLocaleString('default', { month: 'long' });
    const currentYear = today.getFullYear();
    const currentTime = today.toLocaleTimeString();

    // Basic calendar setup
    let calendarHTML = `
        <div class="header">
            <span>${currentMonth}</span>
            <span>${currentYear}</span>
        </div>
        <div class="weekdays">
            <div>Sun</div>
            <div>Mon</div>
            <div>Tue</div>
            <div>Wed</div>
            <div>Thu</div>
            <div>Fri</div>
            <div>Sat</div>
        </div>
        <div class="days">`;

    for (let i = 1; i <= 31; i++) {
        if (i === currentDay) {
            calendarHTML += `<div class="highlight">${i}</div>`;
        } else {
            calendarHTML += `<div>${i}</div>`;
        }
    }
    calendarHTML += `
        </div>
        <div class="today">Today ${currentTime}</div>`;
    calendar.innerHTML = calendarHTML;

    // Mock data for consumed, targeted, remaining calories
    const consumedCalories = 1500;
    const targetedCalories = 2500;
    const remainingCalories = targetedCalories - consumedCalories;

    // Displaying consumed, targeted, remaining calories in circles
    document.querySelector('.circle.consumed .value').textContent = `${consumedCalories} kcal`;
    document.querySelector('.circle.targeted .value').textContent = `${targetedCalories} kcal`;
    document.querySelector('.circle.remaining .value').textContent = `${remainingCalories} kcal`;
});
