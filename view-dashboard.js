import { renderCountriesList } from "./dom-utils.js";


export const renderDashboard = () => {
    const API_URL_ALL = "https://restcountries.com/v3.1/all";

    var countries;
    let query = "";
    let region = "";
    
    fetch(API_URL_ALL)
        .then(res => res.json())
        .then((countriesRaw) => {
            console.log(countriesRaw);

            countries = countriesRaw.filter((country) => country.name.common.toLowerCase().includes(query.toLowerCase()));
            countries = countries.map((country) => {
                
                // if (country.cca3 === "MAS") {console.log(country)};
                // if (country.cca3 === "MYS") {console.log(country)};
                // if (country.cca3 === "DEU") {console.log(country)};
                // if (country.cca3 === "GER") {console.log(country)};
                

                // if (country.cioc === "undefined" || (!country.cioc)) {console.log(country)};
                // if (country.cioc === "undefined" || (!country.name)) {console.log(country)};
                // if (country.borders === "undefined" || (!country.borders)) {console.log(country)};
                

                
                return {
                    capital: country.capital && country.capital[0],
                    population: country.population.toLocaleString(),
                    name: country.name.common,
                    region: country.region,
                    flagUrl: country.flags.png,
                    code: country.cca3,
                };
            });
            // console.log(countries);
        renderCountriesList(countries);
    
        });
        
    const filteredDataAndRenderCountriesList = () => {
        const filteredCountries = countries.filter((country) => {
            return (
                country.name.toLowerCase().includes(query) &&
                (!region || country.region === region)
            );
        });
        console.log(filteredCountries);
        renderCountriesList(filteredCountries);
    };
    
    
    document.querySelector('#query').addEventListener("input", (e) => {
        // console.log(e.target.value);
        query = e.target.value.toLowerCase().trim();
        filteredDataAndRenderCountriesList();
        
    });
    
    document.querySelector('#region').addEventListener("change", (e) => {
        // console.log(e.target.value);
        region = e.target.value;
        filteredDataAndRenderCountriesList();   
    });

};

