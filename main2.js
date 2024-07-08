const input = document.getElementById("input");
const output = document.getElementById("output");
const api = "d17facf6eb97fe9cddbb29eebf3d911b";
const BTN = document.getElementById("BTN");
const main = document.getElementById("main");
const base = document.getElementById("base");
const feel = document.getElementById("feel");
const max = document.getElementById("max");
const min = document.getElementById("min");
const rise = document.getElementById("rise");
const set = document.getElementById("set");

function getinfo(){
    if(!isNaN(input.value)){
        output.textContent = "Please enter a valid place!";
    }

    const city = input.value;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}&units=metric`)
          .then(response => response.json())
          .then(json => {
            if(json.cod ==='404'){
                output.textContent = "Place not found!";
            }
            else{

                const unixTimestamp = json.sys.sunrise * 1000;
                const unixTimestamp2 = json.sys.sunset * 1000;
                const dateObject = new Date(unixTimestamp);
                const dateObject2 = new Date(unixTimestamp2);
                const readableDate = dateObject.toLocaleString();
                const readableDate2 = dateObject2.toLocaleString();
                output.innerHTML = json.weather[0].description
                main.innerHTML = json.weather[0].main
                base.innerHTML = `The average temperature is ${json.main.temp}°C`
                feel.innerHTML = `feels like ${json.main.feels_like}°C`
                max.innerHTML = `Maximum temperature ${json.main.temp_max}°C`
                min.innerHTML = `minimum temperature ${json.main.temp_min}°C`
                rise.innerHTML = `sun rises at ${readableDate}`
                set.innerHTML = `sun sets at ${readableDate2}`
            }
          })

}

BTN.addEventListener("click", getinfo);

