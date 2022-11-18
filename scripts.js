// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function () {
    const takeoff = document.getElementById("takeoff");
    takeoff.addEventListener("click", function () {
        let isReady = confirm('Confirm that the shuttle is ready for takeoff.');
        if (!isReady) return;
        
        const flightStatus = document.getElementById("flightStatus");
        flightStatus.innerText = 'Shuttle in flight.'

    });
});