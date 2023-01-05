let result = document.getElementById('result');
let searchBtn=document.getElementById('Search-btn');
let cityRef=document.getElementById('city');

//fetch weather values
let getWeather =()=>{
  let cityVal=cityRef.value;
  // if input field is empty
  if (cityVal.length==0) {
     result.innerHTML="<h3>Please Enter a City Name </h3>";
  }
  else{
  let url= `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=${key}&units=metric`;
  fetch(url).then((resp)=>resp.json()).
    then(data=>{
    console.log(data);
    console.log(data.weather[0].icon);
    console.log(data.weather[0].main);
    console.log(data.weather[0].description);
    console.log(data.name);
    console.log(data.main.temp_min);
    console.log(data.main.temp_max);

    result.innerHTML=`<br/>
    <h2>${data.name}</h2><br/>
    <h4 class="wheather">${data.weather[0].description}</h4>
    <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png"/>
    <h1>${data.main.temp}&#176</h1><br/>
    <div calss="temp-container">
    <div>
         <h4>Min</h4>
         <h4>${data.main.temp_min}</h4>
    </div>
    <br/>
    <div>
         <h4>Max</h4>
         <h4>${data.main.temp_max}</h4>
    </div>
    </div>` 
  }).
    catch(()=>{
    result.innerHTML="<h3> City Not Found :(</h3>";
  });
  }
  
};
searchBtn.addEventListener("click",getWeather);
window.addEventListener("load",getWeather);