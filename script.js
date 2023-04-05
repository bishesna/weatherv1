const apiKey='451c7c03ee4bb9ae7e6a75ac8c00317f';

const defaultCity='Chester';
const search_Button=document.querySelector('.button');
const input_Value=document.querySelector('.inputValue');
const city=document.querySelector('.name1');
const desc=document.querySelector('.desc');
const temp=document.querySelector('.temp');
const humidity=document.querySelector('.humidity');
const wind_Speed=document.querySelector('.wind-speed');
const rainfall=document.querySelector('.rainfall');
const weather_Icon=document.querySelector('.weather-icon');


search_Button.addEventListener('click',()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input_Value.value}&appid=${apiKey}&units=metric`)
    .then(response=>response.json())
    .then(data => {
        city.textContent=data.name+', '+data.sys.country;
        desc.textContent=data.weather[0].description;
        temp.innerHTML=data.main.temp+'&#8451;';
        humidity.textContent=data.main.humidity+ ' %';
        wind_Speed.textContent=data.wind.speed+ ' m/s';
        if(data.rain){
            rainfall.textContent=data.rain['1h']+'mm';
        }else{
            rainfall.textContent='omm';
        }
        const icon_I=data.weather[0].icon;
        const icon_Url=`http://openweathermap.org/img/w/${icon_I}.png`;
        weather_Icon.setAttribute('src',icon_Url);

    })
    .catch(err=>console.log('error:',err));
});
window.addEventListener('load',()=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=chester&appid=${apiKey}&units=metric`)
    .then(response=>response.json())
    .then(data=>{
        city.textContent=data.name+', '+data.sys.country;
        desc.textContent=data.weather[0].description;
        temp.innerHTML=data.main.temp+'&#8451';
        humidity.textContent=data.main.humidity+ ' %';
        wind_Speed.textContent=data.wind.speed+ ' m/s';
        if(data.rain){
            rainfall.textContent=data.rain['1h']+'mm';
        }else{
            rainfall.textContent='omm';
        }
        const icon_I=data.weather[0].icon;
        const icon_Url=`http://openweathermap.org/img/w/${icon_I}.png`;
        weather_Icon.setAttribute('src',icon_Url);


    })
    .catch(err=>console.log('error:',err));
})