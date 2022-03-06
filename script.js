// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

// api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

const API_KEY = '42d1428e67c4508aa19230a8471db321';

let city = 'bishkek';

let temp = document.querySelector('.weather__temp');
let btn = document.querySelector('.weather__btn');
let weather_city = document.querySelector('.weather__city');
let description = document.querySelector('.weather__description');
let humidity = document.querySelector('.weather__humidity');
let icon = document.querySelector('.weather__icon');
let country = document.querySelector('.weather__country');

btn.addEventListener('click', () => {
    city = document.querySelector('.weather__input').value;
    console.log(city);
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&appid=${API_KEY}`)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            country.textContent = data[0].country;
            fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=${API_KEY}&units=metric`)
                .then((r) => r.json())
                .then((d) => {

                    console.log(d);
                    temp.innerHTML = d.main.temp + '&deg';

                    description.textContent = d.weather[0].description;
                    icon.innerHTML = `<img src='http://openweathermap.org/img/wn/${d.weather[0].icon}.png'/>`;
                    humidity.textContent = "humidity: " + d.main.humidity + "%";
                })
        })
})



// http://openweathermap.org/img/wn/01d@2x.png

// Array(1)
// 0:
// country: "KG"
// lat: 42.81774895
// local_names: {ky: 'Токмок', ru: 'Токмок', ar: 'توكموك', en: 'Tokmok', ja: 'トクマク'}
// lon: 75.31899399794347
// name: "Tokmok"
// state: "Chuy Region"
// [[Prototype]]: Object
// length: 1
// [[Prototype]]: Array(0)