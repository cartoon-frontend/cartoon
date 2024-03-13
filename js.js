import { city } from './cityname.js';
import { getSuggestedCities } from './cityname.js';
document.addEventListener('DOMContentLoaded', function() {
let inputElement = document.getElementById('search');
let suggestionBox = document.getElementById('suggestion-box');

inputElement.addEventListener('input', function() {
  // 檢查是否有輸入
  if (this.value.length > 0) {
    suggestionBox.style.display = 'block';
  } else {
    suggestionBox.innerHTML = '';
    suggestionBox.style.display = 'none';
  }
});

inputElement.addEventListener('input', () => {
  let inputValue = inputElement.value;
  let suggestions = getSuggestedCities(inputValue);
  suggestionBox.innerHTML = '';

  suggestions.forEach((suggestion) => {
    let div = document.createElement('div');
    div.textContent = suggestion;
    div.classList.add('suggestion');
    //當suggest被點撃時
    div.addEventListener('click', () => {
      inputElement.value = suggestion;
      suggestions.forEach((suggestion) => {
         // 為每個suggest增加div
  var suggestionDiv = document.createElement('div');
  suggestionDiv.innerText = suggestion;
  suggestionDiv.classList.add('suggestion-item'); 

  //點撃suggset然後會蓋上input
  suggestionDiv.addEventListener('click', function() {
    inputElement.value = suggestion;
    suggestionBox.style.display = 'none';
  });
  suggestionBox.appendChild(suggestionDiv);
      });  
      suggestionBox.innerHTML = '';
    });

    suggestionBox.appendChild(div);
  });
});
})

let btn = document.getElementById("btn");


btn.addEventListener("click", async function fetchData() {
  let inputElement = document.getElementById("search");
  let inputValue = inputElement.value;
  // 把input第一個英文字大階
  function capitalizeFirstLetter(text) {
      return text.split(' ').map(word =>
          word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      ).join(' ');
  }
  // 處理input
  let capitalizedText = capitalizeFirstLetter(inputValue);
  // 處理後再放回input框
  inputElement.value = capitalizedText;
  try {
    const response = await fetch(
      `https://api.api-ninjas.com/v1/weather?city=${inputElement.value}`,
      {
        method: "GET",
        headers: {
          "X-Api-Key": "DgwNAsdGzMiMJQb7Dk5hrA==T5stCP8Ce4qQ9NTa",
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const result = await response.json();
    console.log(result);
    let info = document.createElement("div");
    info.className = "info";
    let humidity = document.createElement('div')
    let suggest3 = document.createElement('div')
    if(result.humidity > 50){
      suggest3.textContent = `今天推薦看海賊王`
    }
    humidity.textContent = `濕度:${result.humidity}`
    let cloudinfo = document.createElement("div");
    cloudinfo.textContent = `雲覆蓋率:${result.cloud_pct}%`;
    let suggest1 = document.createElement('div')
    if(result.cloud_pct > 70){
      suggest1.textContent = `今天推薦看灌籃高手`
    }
    let temp = document.createElement("div");
    temp.textContent = `目前溫度:${result.temp}`;
    let mintemp = document.createElement("div");
    mintemp.textContent = `最低氣溫:${result.min_temp}`;
    let maxtemp = document.createElement("div");
    let suggest2 = document.createElement('div')
    maxtemp.textContent = `最高氣溫:${result.max_temp}`;
    if(result.max_temp >= 20){
      suggest2.textContent = `今天推薦看龍珠`
    }
    info.appendChild(temp);
    info.appendChild(maxtemp);
    info.appendChild(mintemp);
    info.appendChild(cloudinfo);
    info.appendChild(humidity)
    info.appendChild(suggest1)
    info.appendChild(suggest2)
    info.appendChild(suggest3)
    document.body.appendChild(info);
  } catch (error) {
    console.error("Error:", error);
  }
});
