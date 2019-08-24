//let age = prompt('how old are you');
function drive(event){
let age = document.getElementsById('age').value;
event.preventDefault();
}
if(age == 18){
document.getElementsById('log')
.innerHTML = 'small cars';
}else if(age >=18 && age <=24){
    document.getElementById('log')
    .innerHTML = 'big car';
    }
else if(age >24){
    document.getElementById('log')
    .innerHTML = 'truck';
}
else{
    document.getElementsById('log')
    .innerHTML = 'too young';
}