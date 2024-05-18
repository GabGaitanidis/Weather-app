const btn = document.getElementById("btn");
const city = document.querySelector(".city");
const temp = document.querySelector(".feels");
const wind = document.querySelector(".wind");
const type = document.querySelector(".type");
const faBtn = document.querySelector(".f");
const country = document.querySelector("sub");
async function getData(choice) {
  try {
    const data = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=bb53b94f6a054a1aa45140928241605&q=${choice}`
    );
    const jsonData = await data.json();
    console.log(jsonData);
    city.textContent = jsonData.location.name;
    temp.innerHTML = `Feels like: ${jsonData.current.feelslike_c} C`;
    wind.innerHTML = `Wind kph: ${jsonData.current.wind_kph}`;
    type.innerHTML = `${jsonData.current.condition.text}`;
    country.innerHTML = `Country: ${jsonData.location.country}`;
    const img = new Image();
    img.src = jsonData.current.condition.icon;
    city.appendChild(img);
    faBtn.addEventListener("click", () => {
      if (faBtn.textContent == "Fahrenheit") {
        faBtn.textContent = "Celcius";
        temp.innerHTML = `Feels like: ${jsonData.current.feelslike_f} `;
      } else {
        faBtn.textContent = "Fahrenheit";
        temp.innerHTML = `Feels like: ${jsonData.current.feelslike_c} C`;
      }
    });
  } catch (err) {
    alert("Invalid Location");
  }
}

btn.addEventListener("click", () => {
  const input = document.querySelector("input").value;
  getData(input);
});
window.onload(getData("Athens"));
