function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function selectCountry(){
  event.preventDefault()
var countryname = document.getElementById("name").value;

 var url = 'https://restcountries.com/v3.1/name/';
fetch(url + countryname + "?fullText=true")
  .then(function(raw){
  return raw.json();
})
  .then(function(data){
  document.getElementById("countryName").innerHTML = (data[0].name.common);
var pop = data[0].population;
var pop2 = numberWithCommas(pop);
document.getElementById("population").innerHTML = (pop2);
document.getElementById("capital").innerHTML = (data[0].capital);
document.getElementById("call").innerHTML = (data[0].idd.root);
document.getElementById("time").innerHTML = (data[0].region);
document.getElementById("img1").src = (data[0].flags.png);
  
});

};
