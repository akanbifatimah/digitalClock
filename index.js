window.addEventListener('load', CalculateTimer)
function CalculateTimer(){
    let time = new Date();
    let hour= time.getHours();
    let minute = time.getMinutes();
    let day =time.getDay();
    let ampm = hour >= 12 ? 'PM' : "AM" ;
    hour= hour % 12;
    hour=hour ? hour : '12';
    hour=hour < 10 ? '0' + hour : hour;
    minute=minute < 10 ? '0' + minute : minute;
    let dayNames=['SUN','MON', 'TUES', 'WED', 'THUR', 'FRI', 'SAT']

    console.log(hour)
    document.getElementById('day').innerHTML=dayNames[day];
    document.getElementById('hour').innerHTML=hour;
    document.getElementById('secs').innerHTML=minute;
    document.getElementById('amp').innerHTML=ampm;

    setTimeout(CalculateTimer, 200)

}
