let city = ["London", "Hong Kong","Taiwan","Macao","Singapore","Malaysia"];

let btn = document.getElementById("btn");

btn.addEventListener("click", async function fetchData() {
  const oldInfo = document.querySelector(".info");
  if (oldInfo) {
    oldInfo.remove();
  }
  let input = document.getElementById("search");
  console.log(input.value); 
  try {
    const response = await fetch(
      `https://api.api-ninjas.com/v1/weather?city=${input.value}`,
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
    if(result.humidity > 70){
      suggest3.textContent = `今天推薦看海賊王`
    }
    humidity.textContent = `濕度:${result.humidity}`
    let cloudinfo = document.createElement("div");
    cloudinfo.textContent = `雲覆蓋率:${result.cloud_pct}%`;
    let suggest1 = document.createElement('div')
    if(result.cloud_pct > 70){
      suggest1.textContent = `今天推薦看火影`
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

