const createCountryItemElement = (country) => {
    const countryElement = document.createElement("li");

    return countryElement;
};

const createListElement = (countries) => {
    const listElement = document.createElement("ul");
    listElement.innerText = 'lista xd';


    return listElement;
};

export const renderCountriesList = (countries) => {
    const rootElement = document.querySelector("#root");
    rootElement.appendChild(createListElement(countries));    
};