import { renderCountriesList } from "./dom-utils.js";



console.log('Hey there ! ;)');

const API_URL_ALL = "https://restcountries.com/v3.1/all";

let countries;

fetch(API_URL_ALL)
    .then(res => res.json())
    .then((countriesRaw) => {
        
        countries = countriesRaw.map((country) => {
            return {
                capital: country.capital && country.capital[0],
                population: country.population,
                name: country.name.common,
                region: country.region,
                flagUrl: country.flags.png,
            };
        });
        console.log(countriesRaw);
    renderCountriesList(countries);
    });
