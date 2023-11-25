const {fromEvent,Subject} = rxjs;

const button_input = document.getElementById("submitTimer");
fromEvent(button_input,'click').subscribe(getTimer);

function getTimer() {
    let hours = document.getElementById("hours").value.trim();
    let minutes = document.getElementById("minutes").value.trim();
    let seconds = document.getElementById("seconds").value.trim();

    const minuteSubject = new Subject();
    const hourSubject = new Subject();

    console.log(hours);
    console.log(minutes);
    console.log(seconds);

    const hourInput = String(hours).padStart(2, '0');
    const minInput = String(minutes).padStart(2, '0');
    const secondInput = String(seconds).padStart(2, '0');

    console.log(hourInput);
    console.log(minInput);
    console.log(secondInput);

    let hoursInSeconds = hours * 3600;
    let minutesInSeconds = minutes * 60;
    let secondsInSeconds = seconds * 1;
    console.log(hoursInSeconds);
    console.log(minutesInSeconds)

    let timeRemaining = hoursInSeconds + minutesInSeconds + secondsInSeconds;
    console.log(timeRemaining);

    let x = setInterval(function () {

        document.getElementById("demo").innerHTML =
           hours + " H: " + minutes + " M: " + seconds + " S";

           const minutesSubscription = minuteSubject.subscribe(() => {
            // if more than 0 minutes, decrement value
            if (minInput > 0) {
              minInput--;
            } 
            // if minutes is 0
            else {
              //if there are hours left reset minutes and decrement hours
              if (hourInput > 0) {
                minInput = 59;
                hourSubject.next(); // decrement hourSubject
              }
            }
          });
      
          // subscribe to hourSubject to decrement hours
          const hoursSubscription = hourSubject.subscribe(() => {
            // if more than 0 hours left, decrement hours
            if (hours > 0) {
              hourInput--;
            }
          });

        if(seconds>0){
            seconds--;
        }
        if(seconds <= 0){
            minutes--;
            seconds = 59;
        }
        if(minuteSubject === 0 && seconds === 0){
            hours--
            minutes = 59;
        }
        if(minutes < 0){
            hours--
            minutes = 59
        }
        if(hours < 0){
            document.getElementById("demo")
            .innerHTML = "00:00";
        }

    }, 1000);

    const secondsSubscription = x.subscribe();

    // clean all subscriptions at the same time
    // when the secondsSubscription is completed or unsubscribed, unsubscribe from these subscriptions at same time
    secondsSubscription.add(minutesSubscription);
    secondsSubscription.add(hoursSubscription)
   
}
