export const renderDetail = () => {
    console.log(window.location.search);
    const searchParams = new URLSearchParams(window.location.search);
    const countryCode = searchParams.get("country");
    

    if (!countryCode) {
        goBackToDashboard();
    }

    console.log(countryCode);

    const API_URL_DETAIL = `https://restcountries.com/v3.1/alpha/${countryCode}`;
    fetch(API_URL_DETAIL)
        .then(res => res.json())
        .then(arr => {
            let country = arr[0];
            console.log(country);
            if (!country) {
                goBackToDashboard();  
            }
            console.log(country);
            country = {
                capital: country.capital && country.capital[0],
                population: country.population.toLocaleString(),
                name: country.name.common,
                nativeName: country.name.nativeName,
                region: country.region,
                flagUrl: country.flags.png,
                code: country.cioc,
            };
           
        } );
};

const goBackToDashboard = () => {
    window.location.href= "/";
}