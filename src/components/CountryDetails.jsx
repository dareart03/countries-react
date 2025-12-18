function CountryDetails({ country }) {
    if (!country) {
        return (
            <div>
                <p style={{ opacity: 0.6 }}>
                    Выберите страну
                </p>
            </div>
        );
    }

    return (
        <div>
            <h2>{country.name.common}</h2>

            <img
                src={country.flags.svg}
                alt={`Флаг ${country.name.common}`}
            />

            <p>
                <strong>Столица:</strong>{" "}
                {country.capital?.[0] || "—"}
            </p>

            <p>
                <strong>Регион:</strong>{" "}
                {country.region}
            </p>

            <p>
                <strong>Население:</strong>{" "}
                {country.population.toLocaleString()}
            </p>

            {country.languages && (
                <p>
                    <strong>Языки:</strong>{" "}
                    {Object.values(country.languages).join(", ")}
                </p>
            )}

            {country.currencies && (
                <p>
                    <strong>Валюта:</strong>{" "}
                    {Object.values(country.currencies)
                        .map(c => c.name)
                        .join(", ")}
                </p>
            )}
        </div>
    );
}

export { CountryDetails };
