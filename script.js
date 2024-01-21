//bulb
//button 
//click 

let bulb = document.getElementById('bulb')

let button = document.querySelector('#button')


let click = 0;


button.addEventListener('click' , function(){
    //odd --> ON
    //even -- ON
    click++;
    console.log('click' , click)
    
    if(click % 2 ==0) {
        //even -- off 
        bulb.style.backgroundColor  = 'white'
        button.textContent ="ON"
    } 
    else {
        bulb.style.backgroundColor  = 'blue'
        button.textContent ="OFF"

    }
})


