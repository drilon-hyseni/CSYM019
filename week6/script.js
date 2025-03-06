function myLoadFunction() {
  const ctx = document.getElementById("myChart").getContext("2d");
  var myChartConfig = {
    type: "bar",
    data: {
      labels: [
        "kcal",
        "fat",
        "saturates",
        "carbs",
        "sugars",
        "fibre",
        "protein",
        "salt",
      ],
      /* The two datasets are given below as twi items in an array of json objects, i.e. [{}, {}]*/
      datasets: [
        {
          label: "Nutrition - R1",
          data: [12, 19, 3, 5, 2, 3, 5, 7],
          backgroundColor: [
            "red",
            "blue",
            "yellow",
            "green",
            "purpple",
            "orange",
            "black",
            "white",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
          ],
          borderWidth: 1,
        },
        {
          label: "Nutrition - R2",
          data: [10, 9, 13, 15, 12, 13, 3, 2],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  };
  const myChart = new Chart(ctx, myChartConfig);
}

const countries = {
  Russia: 16377742,
  Canada: 9984670,
  China: 9596961,
  "United States": 9161969,
  Brazil: 8511965,
  Australia: 7692024,
  India: 3287590,
  Argentina: 2780400,
  Kazakhstan: 2724900,
  Sudan: 2486000,
  Algeria: 2381741,
  "Congo, Democratic Republic of the": 2344858,
  "Saudi Arabia": 2149690,
  Mexico: 1964375,
  Indonesia: 1904569,
  Libya: 1759536,
  // "Chad": 1284000,
  // "Niger": 1267000,
  // "Mali": 1240192,
  // "Egypt": 1001450,
  // "Peru": 1285216,
  // "Mongolia": 1566500,
  // "Iran": 1648000,
  // "South Sudan": 644321,
  // "Angola": 1346714,
  // "Namibia": 823567,
  // "Botswana": 600370
};

const countryNames = Object.keys(countries);
const countrySizes = Object.values(countries);

// Function to generate random colors
function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// Generate background colors for each bar
const backgroundColors = countryNames.map(() => getRandomColor());

function myLoadFunction2() {
  const ctx = document.getElementById("mySecondChart").getContext("2d");
  var myChartConfig = {
    type: "bar",
    data: {
      labels: countryNames,
      datasets: [
        {
          label: "Country Size (sq km)",
          data: countrySizes,
          backgroundColor: backgroundColors,
          borderColor: backgroundColors,
          borderWidth: 1,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: "Size (sq km)",
          },
        },
        x: {
          title: {
            display: true,
            text: "Country",
          },
        },
      },
    },
  };
  const myChart = new Chart(ctx, myChartConfig);
}

document.addEventListener("DOMContentLoaded", myLoadFunction);
document.addEventListener("DOMContentLoaded", myLoadFunction2);
