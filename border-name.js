import {createBorderCountriesContainer} from "./dom-utils.js";
import {createBorderButton} from "./dom-utils.js";
import { home } from "./dom-utils.js";
// import { renderBorderLabel } from "./dom-utils.js";



export const renderBorderName = (border) => {
    //console.log(borderName);
    // const borderName = border;
   
    // console.log(border);
    
    const API_URL_BORDER = `https://restcountries.com/v3.1/alpha/${border}`; 
    // console.log(border);
    // const API_URL_DETAIL = `https://restcountries.com/v3.1/name/${countryData}`;
    fetch(API_URL_BORDER)
        .then(res => res.json())
        .then(arr => {
            let border = arr[0];
            //console.log(country);
            
            
            border = {
                
                // name: country.name.common,
                // name: Object.values(country.name)[0],


                name: border.name.common,
                // nativeName: Object.values(country.name.nativeName)[0].official,
                // region: country.region,
                // subregion: country.subregion,
                // flagUrl: country.flags.png,
                // code: country.cca3,
                // tld: country.tld[0],
                // currencies: Object.values(country.currencies).map((currency) => currency.name).join(", "),
                // languages: Object.values(country.languages).join(", "),
                // borders: country.borders,
                
            };
            
           
           
          
           console.log(border.name);
        
            const labelBorder = document.querySelector(".border-button-link");
            console.log(labelBorder);
            labelBorder.innerText = "";
            labelBorder.innerText = "border.name";
            


        //    //debugger;
        //    const labelBorder = document.querySelector(".border-button-link");
           
        //     console.log(labelBorder);
        //    labelBorder.innerText = "";
        //    labelBorder.innerText = `${border.name}`;
        //    labelBorder.innerText = "test";
           
           // createBorderCountriesContainer();
           // const countryBorder = border.name;
           // console.log(countryBorder);
        
          // return countryBorder;
           
           
        //    country.name.forEach((borderLabel) => {
        //     console.log(borderLabel);
        //    });
            return border.name;
           // console.log(border);
  }); 
    };

    
