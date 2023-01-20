import { renderCountryDetails } from "./dom-utils.js";
import { home } from "./dom-utils.js";

export const renderDetail = () => {
    // console.log(window.location.search);
    const searchParams = new URLSearchParams(window.location.search);
    const countryData = searchParams.get("country");
    

    if (!countryData) {
        goBackToDashboard();
    }
    // console.log(countryData);

 const API_URL_DETAIL = `https://restcountries.com/v3.1/alpha/${countryData}`; 
    // const API_URL_DETAIL = `https://restcountries.com/v3.1/name/${countryData}`;
    fetch(API_URL_DETAIL)
        .then(res => res.json())
        .then(arr => {
            let country = arr[0];
            console.log(country);
            if (!country) {
                goBackToDashboard();  
            };
            if (!country.currencies) {

                country = {
                    capital: country.capital && country.capital[0],
                    population: country.population.toLocaleString(),
                    name: country.name.common,
                    nativeName: Object.values(country.name.nativeName)[0].official,
                    region: country.region,
                    subregion: country.subregion,
                    flagUrl: country.flags.png,
                    code: country.code,
                    tld: country.tld[0],
                    currencies: "no data",
                    languages: Object.values(country.languages).join(", "),
                    borders: country.borders,

            }} else { country = {
                capital: country.capital && country.capital[0],
                population: country.population.toLocaleString(),
                name: country.name.common,
                nativeName: Object.values(country.name.nativeName)[0].official,
                region: country.region,
                subregion: country.subregion,
                flagUrl: country.flags.png,
                code: country.code,
                tld: country.tld[0],
                currencies: Object.values(country.currencies).map((currency) => currency.name).join(", "),
                languages: Object.values(country.languages).join(", "),
                borders: country.borders,
            };};
            
           
           renderCountryDetails(country);
           // console.log(country);
        } );
};



const goBackToDashboard = () => {
    window.location.href= `${home}`;
}