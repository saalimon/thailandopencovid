startTimer = (display) => {
    setInterval(function () {
        const currentDate = new Date(Date.now());
        const openDate = new Date('7/1/2021');
        const numberOfDaysToAdd = 120;
        openDate.setDate(openDate.getDate() + numberOfDaysToAdd); 
        // get total seconds between the times
        var delta = Math.abs(openDate - currentDate) / 1000;

        // calculate (and subtract) whole days
        var days = Math.floor(delta / 86400);
        delta -= days * 86400;

        // calculate (and subtract) whole hours
        var hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;

        // calculate (and subtract) whole minutes
        var minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;

        // what's left is seconds
        var seconds = Math.floor(delta % 60);  // in theory the modulus is not required

        display.innerHTML  = days + " days<br/>" + hours + " hours<br/>" + minutes + " minutes<br/>" + seconds + " seconds<br/>"
    }, 1000);
}

window.onload = function () {
    let display = document.getElementById("counter");
    startTimer(display);
};


