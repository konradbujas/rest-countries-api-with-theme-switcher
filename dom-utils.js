const createInfoElement = (labelName, value) => {
    const infoElement = document.createElement("div");

    const labelElement = document.createElement("strong");
    labelElement.innerText = `${labelName}: `;

    const valueElement = document.createElement("span");
    valueElement.innerText = value;

    infoElement.appendChild(labelElement);
    infoElement.appendChild(valueElement);

    return infoElement;
}





const createCountryItemElement = (country) => {
    const countryElement = document.createElement("li");

    const countryNameElement = document.createElement("span");
    countryNameElement.innerText = country.name;

    
    countryElement.appendChild(countryNameElement);

    countryElement.appendChild(createInfoElement("Population", country.population));

    countryElement.appendChild(createInfoElement("Region", country.region));

    countryElement.appendChild(createInfoElement("Capital", country.capital));



    return countryElement;
};

const createListElement = (countries) => {
    const listElement = document.createElement("ul");
    countries.forEach(country => {
        listElement.appendChild(createCountryItemElement(country));
    })

    return listElement;
};

export const renderCountriesList = (countries) => {
    const rootElement = document.querySelector("#root");
    rootElement.appendChild(createListElement(countries));    
};