function CountryDetails({ country }) {

    if (!country) {
        return (
            <div className="content">
                <h2>Select a country</h2>
            </div>
        );
    }

    return (
        <div className="content">
            <h2>{country.name.common}</h2>

            <img
                src={country.flags.png}
                alt={country.name.common}
            />

            <p><strong>Capital:</strong> {country.capital?.[0]}</p>
            <p><strong>Region:</strong> {country.region}</p>
            <p><strong>Population:</strong> {country.population.toLocaleString()}</p>
        </div>
    );
}

export { CountryDetails };