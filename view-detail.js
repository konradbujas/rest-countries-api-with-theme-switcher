import { renderCountryDetails } from "./dom-utils.js";

export const renderDetail = () => {
    console.log(window.location.search);
    const searchParams = new URLSearchParams(window.location.search);
    const countryName = searchParams.get("country");
    

    if (!countryName) {
        goBackToDashboard();
    }
    console.log(countryName);

 // const API_URL_DETAIL = `https://restcountries.com/v3.1/alpha/${countryCode}`; 
    const API_URL_DETAIL = `https://restcountries.com/v3.1/name/${countryName}`;
    fetch(API_URL_DETAIL)
        .then(res => res.json())
        .then(arr => {
            let country = arr[0];
            console.log(country);
            if (!country) {
                
                goBackToDashboard();  
            };
            
            
            country = {
                capital: country.capital && country.capital[0],
                population: country.population.toLocaleString(),
                name: country.name.common,
                nativeName: Object.values(country.name.nativeName)[0].official,
                region: country.region,
                subregion: country.subregion,
                flagUrl: country.flags.png,
                code: country.cioc,
                tld: country.tld[0],
                currencies: Object.values(country.currencies).map((currency) => currency.name).join(", "),
                // currenciesSymbol: Object.keys(country.currencies),
                languages: Object.values(country.languages).join(", "),
                borders: country.borders,
            };
           renderCountryDetails(country);
        } );
};

const goBackToDashboard = () => {
    window.location.href= "https://konradbujas.github.io/rest-countries-api-with-theme-switcher/";
}