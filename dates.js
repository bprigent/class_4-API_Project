// get formated date
function getFormattedDate(daysFromToday) {
    const date = new Date();
    date.setDate(date.getDate() + daysFromToday);

    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const dayOfWeek = dayNames[date.getDay()];
    const month = monthNames[date.getMonth()];
    const dayOfMonth = date.getDate();
    const year = date.getFullYear();

    const suffix = getOrdinalSuffix(dayOfMonth);

    return `${dayOfWeek}, ${month} ${dayOfMonth}${suffix}, ${year}`;
}

// child function of the function above so that I can add a suffix to the formated date
function getOrdinalSuffix(i) {
    const j = i % 10;
    const k = i % 100;

    if (j == 1 && k != 11) {
        return "st";
    }
    if (j == 2 && k != 12) {
        return "nd";
    }
    if (j == 3 && k != 13) {
        return "rd";
    }
    return "th";
}

// Creating variables for each of the days
function updateDatesInHTML () {
    //creating dates
    let dateToday = getFormattedDate(0);
    let datePlus1 = getFormattedDate(1);
    let datePlus2 = getFormattedDate(2);
    let datePlus3 = getFormattedDate(3);
    let datePlus4 = getFormattedDate(4);
    let datePlus5 = getFormattedDate(5);
    let datePlus6 = getFormattedDate(6);
    let datePlus7 = getFormattedDate(7);

    //adding dates to htmls file
    document.getElementById("date_today").innerText = dateToday;
    document.getElementById("date_plus1").innerText = datePlus1;
    document.getElementById("date_plus2").innerText = datePlus2;
    document.getElementById("date_plus3").innerText = datePlus3;
    document.getElementById("date_plus4").innerText = datePlus4;
    document.getElementById("date_plus5").innerText = datePlus5;
    document.getElementById("date_plus6").innerText = datePlus6;
    document.getElementById("date_plus7").innerText = datePlus7;

};
//calling function
updateDatesInHTML();