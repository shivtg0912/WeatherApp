
var input = document.querySelector('.input_text');
var lat=document.querySelector('.lat')
var lon=document.querySelector('.lon')
var main = document.querySelector('#name');
var temp_min = document.querySelector('.temp_min');
var temp_max = document.querySelector('.temp_max');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var humid=document.querySelector('.humid');
var button= document.querySelector('.submit');
button.addEventListener('click', function(name){

fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=50a7aa80fa492fa92e874d23ad061374')
fetch('https://api.openweathermap.org/geo/1.0/direct?q='+input.value+'&limit=2&appid=5e7b7faaa7568661018741909b25513a')

.then(response=>response.json())
.then(data=>{
var mintempValue = data['main']['temp_min'];
var maxtempValue = data['main']['temp_max'];
var tempValue = data['main']['temp'];
var humidValue = data['main']['humidity'];
var nameValue = data['name'];
var descValue = data['weather'][0]['description'];
  main.innerHTML = nameValue;
  humid.innerHTML="Humidity-"+humidValue;
  desc.innerHTML = "Description - "+descValue;
  temp.innerHTML = `Temperature-${parseInt(tempValue)-273}\u00B0C`;
  temp_min.innerHTML = `Min.-${parseInt(mintempValue)-273}\u00B0C`;
  temp_max.innerHTML = `Max.-${parseInt(maxtempValue)-273}\u00B0C`;
  input.value ="";
})
.catch(err=>alert("Doesn't exist."));
})