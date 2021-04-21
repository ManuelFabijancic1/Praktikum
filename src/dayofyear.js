 function dayofyear(day,month,year) {
     let pom=0;
    let m=[0,31,28,31,30,31,30,31,31,30,31,30,31]
    let i=0

while(i<month){

    if(isleapyear(year)==true && i>=2){
        pom +=1+m[i] 
    }

    else{
    pom +=m[i]
    }

    i++;
};


if(month==1){
    return day;
}



return pom+day-1;

}

function isleapyear(year){
    if(!(year%4) && (year%100) || !(year%400)){return true }
    return false
        }


module.exports = dayofyear;