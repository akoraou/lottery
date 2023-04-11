function lotteryNumberGenerator(num=6, Max = 49) {
    //Remove the circles 
    if (document.getElementsByClassName('circle').length) {
        const removeElements = (elements) => elements.forEach(el => el.remove());
       removeElements( document.querySelectorAll(".circle") );
   }

   //Create an empty array and add the random numbers
    let list = [];
    while (list.length<num) {
        let ran=Math.floor(Math.random() * Max) + 1;
        if(!list.includes(ran)){
            list.push(ran);
        }
        
    }

    //sort the random numbers in an ascending order
    list.sort(function(a, b){return a - b});

    //add the circles and set the number at the center of each circle
    //set the background color of the circles
    list.forEach(function (num) {
    let lottery = document.getElementById("numbers");
    let circle = document.createElement('span');
    circle.setAttribute('class', 'circle');
    circle.style.backgroundColor = setBackground(num); 
    circle.textContent = num<10?'0'+num:num;
    lottery.append(circle);
    });
}

function setBackground(num) {
   if(num>=1 && num<=9){
   return 'grey';
   }
   else if(num>=10 && num<=19){
    return 'blue';
   }
   else if(num>=20 && num<=29){
    return 'pink';
   }
   else if(num>=30 && num<=39){
    return 'green';
   }
   else if(num>=40 && num<=49){
    return 'yellow';
   }
}
