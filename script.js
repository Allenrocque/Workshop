let age = prompt('How old are you');

//if age is 18 , can drive a small car
//if age is between 18 and 24 big car
//if age is above 24 truck

if(age == 18){
console.log('can drive small car');
}else if(age >=18 && age <=24){
    console.log('can drive a big car');
    }
else if(age >24){
    console.log('can drive a truck')
}
else{
    console.log('too young to drive');
}
