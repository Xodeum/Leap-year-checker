function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

function checkLeapYear() {
    const yearInput = document.getElementById('yearInput').value;
    const result = document.getElementById('result');

    if (yearInput === '') {
        result.textContent = 'Please enter a year.';
        result.style.color = 'red';
        return;
    }

    const year = parseInt(yearInput, 10);
    if (isLeapYear(year)) {
        result.textContent = `${year} is a leap year.`;
        result.style.color = 'green';
    } else {
        result.textContent = `${year} is not a leap year.`;
        result.style.color = 'red';
    }
}
