const BASE_URL = "https://restcountries.com/v3.1";

export function getAllCountries() {
    return fetch(
        `${BASE_URL}/all?fields=name,cca3,capital,region,population,flags,languages,currencies`
    ).then(response => response.json());
}