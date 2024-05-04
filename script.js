const apikey = "915e7a7dd92575301bc7865dcde33549";
    const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const mainpng = document.querySelector(".mainpng");

    async function check(place){
        const response = await fetch(apiurl + place + `&appid=${apikey}`);
        var data = await response.json();
    
        document.querySelector(".place").innerHTML = data.name;
        document.querySelector(".status").innerHTML = data.weather[0].main;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

        document.querySelector(".pre").innerHTML = data.main.pressure;
        document.querySelector(".vis").innerHTML = data.visibility;
        document.querySelector(".fl").innerHTML = data.main.feels_like  + "°c";
        document.querySelector(".wd").innerHTML = data.wind.deg  + "°";


        if(data.weather[0].main == "Clouds")
        {
            mainpng.src = "pngs/clouds.png";  
        }
        else if(data.weather[0].main == "Clear")
        {
            mainpng.src = "pngs/clear.png";
        }
        else if(data.weather[0].main == "Rain")
        {
            mainpng.src = "pngs/rain.png";
        }
        else if(data.weather[0].main == "Mist")
        {
            mainpng.src = "pngs/mist.png";
        }
        else if(data.weather[0].main == "Drizzle")
        {
            mainpng.src = "pngs/drizzle.png";
        }

        document.querySelector(".report").style.display = "block";
        document.querySelector(".odetails").style.display = "block";
    }
    
    searchBtn.addEventListener("click", ()=>{
        check(searchBox.value);
    })