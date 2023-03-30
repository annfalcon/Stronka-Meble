function incrementOrder(name)
{
let quantity=document.getElementById("quantity").value || 0;
quantity++
document.getElementById("quantity").value = quantity;
}


function getMonthByNumber(number){
    if(number==1){
        return "January"
    }
    else if(number==2){
        return "February"
    }
    else if(number==3){
        return "March"
    }
    else {
        return "Bad number"
    }
}

// alert(getMonthByNumber(Number(prompt("enter"))))

function square(x) {
    return x*x
}

function getGradeByNumber(grade){
    if(grade==1){
        return "Niedostateczna"
    }
    else if(grade==2){
        return "Dopuszczalna"
    }
    else if(grade==3){
        return "Dostateczna"
    }
    else if(grade==4){
        return "Dobry"
    }
    else if(grade==5){
        return "Bardzo dobry"
    }
    else if(grade==6){
        return "Celujący"
    }
    else {
        return"Invalid"
    }
}
// const input=Number(prompt("Enter your grade"))

// console.log(getGradeByNumber(input))


function getFineBySpeed(speed){
    if (speed>0 && speed<=10){
        return 100
    }
    if (speed>10 && speed<=20){
        return 200
    }
    if (speed>20 && speed<=30){
        return 300
    }
    if (speed>30 && speed<=40){
        return 400
    }
    if (speed>40 && speed<=50){
        return 500
    }
    if (speed>50){
        return 1000
    }
    
}

// const input=Number(prompt('Enter speed'))

// if (isNaN(input)) {
//     console.error("invalid number")
// }
// else{
//     console.log(`${getFineBySpeed(input)} zł`)
// }

function isDivisible(x, y){
    if (x%y==0){
        return true
    }
    else{
        return false
    }
}





