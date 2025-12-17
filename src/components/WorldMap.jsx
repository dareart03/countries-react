import * as d3 from "d3";
import { useEffect, useRef } from "react";
import worldData from "../data/world.geo.json";

function WorldMap({ selectedCountry }) {
    const ref = useRef(null);

    useEffect(() => {
        const width = 900;
        const height = 500;

        d3.select(ref.current).selectAll("*").remove();

        const svg = d3
            .select(ref.current)
            .append("svg")
            .attr("width", width)
            .attr("height", height);

        const projection = d3
            .geoMercator()
            .scale(140)
            .translate([width / 2, height / 1.5]);

        const path = d3.geoPath().projection(projection);

        svg.selectAll("path")
            .data(worldData.features)
            .enter()
            .append("path")
            .attr("d", path)
            .attr("fill", d =>
                selectedCountry && d.id === selectedCountry.cca3
                    ? "#ff7043"
                    : "#cfd8dc"
            )
            .attr("stroke", "#555")
            .attr("stroke-width", 0.5);

    }, [selectedCountry]);

    return <div className="map" ref={ref}></div>;
}

export { WorldMap };
