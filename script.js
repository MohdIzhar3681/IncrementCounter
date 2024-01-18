const counters =   document.querySelectorAll('.counter');
counters.forEach( (counter) => {
    // console.log(counter);
    counter.innerHTML=0;

    const updateCounter = () =>{
        const targetCount = +counter.getAttribute('data-target');
        // console.log(typeof(targetCount)); + is for convert string to number ........

        const startingCount = Number(counter.innerHTML);
        // Number() constructer is used for string convert to a Number.....

        const incr = targetCount / 100 ;

        if( startingCount < targetCount ){
            counter.innerHTML =  `${Math.round( startingCount + incr)}`;

            setTimeout(updateCounter , 10)
        }else{
            innerHTML = targetCount;
        }



    }



    updateCounter();

});