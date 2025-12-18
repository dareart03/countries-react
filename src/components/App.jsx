import { useEffect, useState } from "react";
import { getAllCountries } from "../api/countries";
import { CountryList } from "./CountryList";
import { CountryDetails } from "./CountryDetails";
import "../styles/main.css";
import { WorldMap } from "./WorldMap";

function App() {
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [search, setSearch] = useState("");

    useEffect(() => {
        getAllCountries().then(data => {
            if (Array.isArray(data)) {
                setCountries(data);
            } else {
                setCountries([]);
            }
        });
    }, []);
    // Поиск
    const filteredCountries = countries.filter(country =>
        country.name.common
            .toLowerCase()
            .includes(search.toLowerCase())
    );
    // Обработчик выбора страны на карте
    const handleMapSelect = (cca3) => {
        const country = countries.find(c => c.cca3 === cca3);
        if (country) {
            setSelectedCountry(country);
        }
    };
    // Рендер компонента
    return (
        <main className="main">
            <CountryList
            countries={filteredCountries}
            search={search}
            onSearch={setSearch}
            selectedCountry={selectedCountry}
            onSelect={(country) => setSelectedCountry(country)}
        />

        <div className="map-container">
            <WorldMap
            selectedCountry={selectedCountry}
            onSelectCountry={handleMapSelect}
        />

        </div>

        <div className="details-container">
            <CountryDetails country={selectedCountry} />
        </div>
    </main>
    );

}

export default App;