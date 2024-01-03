function checkLeapYear(year){
    if((0==year%4)&&(0!=year%100)|| (0==year%400)){
        console.log(year +'is a leap year')
    }
    else{
        console.log(year + ' is not a leap year');
    }
}

checkLeapYear(2016);

//Check Leap Year Using newDate()

function checkLeapYear1(year){
    const leap =new Date(year, 1, 29).getDate()===29;
    if(leap){
        console.log(year + " is a leap year");
    }
    else{
        console.log(year + " is not leap year");
    }
}
checkLeapYear1(2016);