// export const home = "/";

export const home = `https://konradbujas.github.io/rest-countries-api-with-theme-switcher/`;

import { renderBorderName } from "./border-name.js";
// import { renderBorderLabel } from "./border-name.js";
// import { countryBorder } from "./border-name.js";

// import { border } from "./border-name.js";
 



const createInfoElement = (labelName, value) => {
    const infoElement = document.createElement("p");

    const labelElement = document.createElement("strong");
    labelElement.innerText = `${labelName}: `;

    const valueElement = document.createElement("span");
    valueElement.innerText = value;

    infoElement.appendChild(labelElement);
    infoElement.appendChild(valueElement);

    return infoElement;
};


const createFlagImgElement = (country) => {
    const imgContainerElement = document.createElement("div");
    const imgElement = document.createElement("img");
    imgElement.src = country.flagUrl;
    imgElement.alt = `${country.name} flag`;
  
    imgContainerElement.appendChild(imgElement);

    return imgContainerElement;
}


const createCountryItemElement = (country) => {
    const countryElement = document.createElement("li");

    const anchorElement = document.createElement("a");
    anchorElement.href = `${home}?country=${country.code}`;
    
    anchorElement.appendChild(createFlagImgElement(country));


    const infoContainerElement = document.createElement("div");
    infoContainerElement.classList.add("info-container");
    

    const countryNameElement = document.createElement("strong");
    countryNameElement.innerText = country.name;
    countryNameElement.classList.add("country-name");


    infoContainerElement.appendChild(countryNameElement);

    infoContainerElement.appendChild(createInfoElement("Population", country.population));

    infoContainerElement.appendChild(createInfoElement("Region", country.region));

    infoContainerElement.appendChild(createInfoElement("Capital", country.capital));

    anchorElement.appendChild(infoContainerElement);

    countryElement.appendChild(anchorElement);
    
    return countryElement;
};


const createListElement = (countries) => {
    const listElement = document.createElement("ul");
    countries.forEach(country => {
        listElement.appendChild(createCountryItemElement(country));
    })

    return listElement;
};

const createDetailElement = (country) => {
    const detailContainerElement = document.createElement("div");
    detailContainerElement.classList.add("detail-container");

    const flagImgElement = createFlagImgElement(country);

    const detailContentElement = document.createElement("div");
    detailContentElement.classList.add("detail-content");

    const detailNameElement = document.createElement("strong");
    detailNameElement.innerText = country.name;
    detailNameElement.classList.add("detail-name");

    detailContainerElement.appendChild(flagImgElement);
    detailContentElement.appendChild(detailNameElement);

    const leftColumnElement = document.createElement("div");
    leftColumnElement.classList.add("column-left");

    leftColumnElement.appendChild(createInfoElement("Native name", country.nativeName));
    leftColumnElement.appendChild(createInfoElement("Population", country.population));
    leftColumnElement.appendChild(createInfoElement("Region", country.region));
    leftColumnElement.appendChild(createInfoElement("Sub Region", country.subregion));
    leftColumnElement.appendChild(createInfoElement("Capital", country.capital));

    const rightColumnElement = document.createElement("div");
    rightColumnElement.classList.add("column-right");

    rightColumnElement.appendChild(createInfoElement("Top Level Domain", country.tld));
    rightColumnElement.appendChild(createInfoElement("Currencies", country.currencies));
    rightColumnElement.appendChild(createInfoElement("Languages", country.languages));
    
    detailContentElement.appendChild(leftColumnElement);
    detailContentElement.appendChild(rightColumnElement);

    
    if (country.borders && country.borders.length > 0) { detailContentElement.appendChild(createBorderCountriesContainer(country));
    }; 

    detailContainerElement.appendChild(detailContentElement);

    return detailContainerElement;
}

export const createDetailButton = (text, link) => {
    const anchorElement = document.createElement("a");
    anchorElement.innerText = text;
    anchorElement.classList.add("detail-button-link");
    anchorElement.href = link;

    return anchorElement;
}

export const createBorderButton = (text, link) => {
    const anchorElement = document.createElement("a");
    anchorElement.innerText = text;
    anchorElement.classList.add("border-button-link");
    anchorElement.href = link;

    return anchorElement;
}


 

export const createBorderCountriesContainer = (country) => {
    const borderCountriesContainerElement = document.createElement("div");
    borderCountriesContainerElement.classList.add("border-countries-container");

    const labelElement = document.createElement("strong");
    labelElement.innerText = "Border Countries: ";

    borderCountriesContainerElement.appendChild(labelElement);
    // console.log(country.borders);
    country.borders.forEach((border) => {
        
        console.log(border);
        
       renderBorderName(border);
        // renderBorderName("DEU"); -> wysyłamy zmienną do border-name.js do funkcji renderBorderName





        //    const renderBorderLabel = () => {
        //     console.log(border.name);
        //     const labelBorder = document.querySelector(".border-button-link");
        //     labelBorder.innerText = "";
        //     labelBorder.innerText = "border.name";
        //     };
        // console.log(renderBorderName);

        // console.log(country.name);

        // renderLabelBorder() = () => {
        //     console.log(border.name);
        // }
        
        borderCountriesContainerElement.appendChild(createBorderButton(border, `${home}?country=${border}`));

        // borderCountriesContainerElement.appendChild(createDetailButton(border, `https://konradbujas.github.io/rest-countries-api-with-theme-switcher/?country=${border}`));
        
    });
    return borderCountriesContainerElement;
};



export const renderCountriesList = (countries) => {
    console.log(countries);
    const rootElement = document.querySelector("#root");
    rootElement.innerHTML = "";
    rootElement.appendChild(createListElement(countries));    
};

export const renderCountryDetails = (country) => {
    const rootElement = document.querySelector("#root");
    rootElement.innerHTML = "";
    rootElement.appendChild(createDetailButton("Go back", `${home}`));    
    rootElement.appendChild(createDetailElement(country));  
     
};
