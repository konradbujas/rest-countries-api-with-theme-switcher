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
    anchorElement.href = `/rest-countries-api-with-theme-switcher/?country=${country.name}`;
    
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

const createDetailButton = (text, link) => {
    const anchorElement = document.createElement("a");
    anchorElement.innerText = text;
    anchorElement.classList.add("detail-button-link");
    anchorElement.href = link;

    return anchorElement;
}

const createBorderCountriesContainer = (country) => {
    // if (!country.borders || country.borders.length === 0) {
    //     return;
    // }
    const borderCountriesContainerElement = document.createElement("div");
    borderCountriesContainerElement.classList.add("border-countries-container");

    const labelElement = document.createElement("strong");
    labelElement.innerText = "Border Countries: ";

    borderCountriesContainerElement.appendChild(labelElement);

    country.borders.forEach((border) => {
        borderCountriesContainerElement.appendChild(createDetailButton(border, `https://konradbujas.github.io/rest-countries-api-with-theme-switcher/?country=${border}`));
    });
    return borderCountriesContainerElement;
};


export const renderCountriesList = (countries) => {
    const rootElement = document.querySelector("#root");
    rootElement.innerHTML = "";
    rootElement.appendChild(createListElement(countries));    
};

export const renderCountryDetails = (country) => {
    const rootElement = document.querySelector("#root");
    rootElement.innerHTML = "";
    rootElement.appendChild(createDetailButton("Go back", "https://konradbujas.github.io/rest-countries-api-with-theme-switcher/"));    
    rootElement.appendChild(createDetailElement(country));  
     
};