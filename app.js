import { renderCountriesList } from "./dom-utils.js";



console.log('Hey there ! ;)');

const API_URL_ALL = "https://restcountries.com/v3.1/all";

let countries;
let query = "";

fetch(API_URL_ALL)
    .then(res => res.json())
    .then((countriesRaw) => {
        console.log(countriesRaw);
        countries = countriesRaw.filter((country) => country.name.common.toLowerCase().includes(query.toLowerCase()));
        countries = countries.map((country) => {
            return {
                capital: country.capital && country.capital[0],
                population: country.population,
                name: country.name.common,
                region: country.region,
                flagUrl: country.flags.png,
            };
        });
        // console.log(countries);
    renderCountriesList(countries);
    });
    
document.querySelector('#query').addEventListener("input", (e) => {
    // console.log("", e.target.value);
    const query = e.target.value.toLowerCase().trim();
    countries = countries.filter((country) =>
     country.name.toLowerCase().includes(query));
    
    console.log(countries);
    renderCountriesList(countries);
})