function CountryList({ countries, search, onSearch, onSelect }) {

    return (
        <aside className="aside">
            <h3>Countries</h3>

            <input
                type="text"
                placeholder="Search country..."
                value={search}
                onChange={e => onSearch(e.target.value)}
            />

            <ul>
                {countries.map(country => (
                    <li
                        key={country.cca3}
                        onClick={() => onSelect(country)}
                    >
                        {country.name.common}
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export { CountryList };
