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
            console.log("Countries from API:", data);

            if (Array.isArray(data)) {
                setCountries(data);
            } else {
                setCountries([]);
            }
        });
    }, []);

    const filteredCountries = countries.filter(country =>
        country.name.common
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    return (
        <main className="main">
            <CountryList
            countries={filteredCountries}
            search={search}
            onSearch={setSearch}
            selectedCountry={selectedCountry}
            onSelect={setSelectedCountry}
        />

        <div className="map-container">
            <WorldMap selectedCountry={selectedCountry} />
        </div>

        <div className="details-container">
            <CountryDetails country={selectedCountry} />
        </div>
    </main>
    );

}

export default App;