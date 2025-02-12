// ini file javascript

let isCelsiusToFahrenheit = true;

function convertSuhu() {
  const inputValue = document.getElementById("main-input").value;
  console.log(inputValue);

  if (!inputValue) {
    alert("Kolom input tidak boleh kosong");
    return;
  }

  let result, caraKonversi;

  if (isCelsiusToFahrenheit) {
    //celcius to fahrenheit
    result = (inputValue * 9) / 5 + 32;
    caraKonversi = `${inputValue}°C * (9/5) + 32 = ${result.toFixed(2)}°F`;
  } else {
    //fahrenheit to celcius
    result = ((inputValue - 32) * 5) / 9;
    caraKonversi = `${inputValue}°F - 32 * (5/9) = ${result.toFixed(2)}°C`;
  }
  document.getElementById("main-result").value = result.toFixed(2);
  document.getElementById("cara-konversi").value = caraKonversi;
}

function reverseConversion() {
  isCelsiusToFahrenheit = !isCelsiusToFahrenheit;
  console.log(isCelsiusToFahrenheit);

  if (isCelsiusToFahrenheit) {
    document.getElementById("input-label").innerText = "Celsius (°C):";
    document.getElementById("main-input").placeholder =
      "Masukkan suhu dalam °C";
    document.getElementById("output-label").innerText = "Fahrenheit (°F):";
    document.getElementById("main-result").placeholder =
      "Hasil konversi dalam °F";
  } else {
    document.getElementById("input-label").innerText = "Fahrenheit (°F):";
    document.getElementById("main-input").placeholder =
      "Masukkan suhu dalam °F";
    document.getElementById("output-label").innerText = "Celsius (°C):";
    document.getElementById("main-result").placeholder =
      "Hasil konversi dalam °C";
  }

  // Kosongkan input dan hasil saat mode diubah
  reset();
}

function reset() {
  document.getElementById("main-input").value = "";
  document.getElementById("main-result").value = "";
}
