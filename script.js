function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function selectCountry() {
  const countryname = document.getElementById("name").value;
  const url = "https://restcountries.com/v3.1/name/";

  fetch(url + countryname + "?fullText=true")
    .then((raw) => raw.json())
    .then((data) => {
      if (!data || data.status === 404) {
        document.getElementById("countryName").innerHTML = "Not found";
        return;
      }

      document.getElementById("countryName").innerHTML = data[0].name.common;
      const pop = data[0].population;
      document.getElementById("population").innerHTML = numberWithCommas(pop);
      document.getElementById("capital").innerHTML = data[0].capital;
      document.getElementById("call").innerHTML = data[0].idd.root;
      document.getElementById("time").innerHTML = data[0].region;
      document.getElementById("img1").src = data[0].flags.png;
    })
    .catch((err) => {
      console.error("Error fetching country data:", err);
    });
}
