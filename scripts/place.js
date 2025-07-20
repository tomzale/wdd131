// Update footer year and last modified
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Wind chill calculator
function calculateWindChill(tempF, speed) {
  if (tempF <= 50 && speed > 3.0) {
    const chill =
      35.74 +
      0.6215 * tempF -
      35.75 * Math.pow(speed, 0.16) +
      0.4275 * tempF * Math.pow(speed, 0.16);
    return chill.toFixed(1) + "°F";
  } else {
    return "N/A";
  }
}

// Extract HTML values and calculate chill
const tempC = parseFloat(document.querySelector('.weather .value:nth-of-type(1)').textContent);
const windKmh = parseFloat(document.querySelector('.weather .value:nth-of-type(2)').textContent);

// Convert to Fahrenheit and MPH
const tempF = (tempC * 9) / 5 + 32;
const windMph = windKmh / 1.609;

const windChill = calculateWindChill(tempF, windMph);
document.querySelector("#windchill").textContent = windChill;
