// Update footer year and last modified
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// Wind chill calculator for metric units
function calculateWindChill(temp, windSpeed) {
  // Metric formula: 13.12 + 0.6215*T - 11.37*V^0.16 + 0.3965*T*V^0.16
  return (13.12 + 
          0.6215 * temp - 
          11.37 * Math.pow(windSpeed, 0.16) + 
          0.3965 * temp * Math.pow(windSpeed, 0.16));
}

// Extract HTML values correctly

const values = document.querySelectorAll('.weather .value');
const tempC = parseFloat(values[0].textContent);
const windKmh = parseFloat(values[1].textContent);
const windChillElement = document.querySelector("#windchill");

// Calculate and display wind chill if conditions are met
if (tempC <= 10 && windKmh > 4.8) {
  const windChill = calculateWindChill(tempC, windKmh).toFixed(1);
  windChillElement.textContent = `${windChill} °C`;
} else {
  windChillElement.textContent = "N/A";
}

