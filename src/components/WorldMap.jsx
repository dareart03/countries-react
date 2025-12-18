import * as d3 from "d3";
import { useEffect, useRef } from "react";
import worldData from "../data/world.geo.json";

function WorldMap({ selectedCountry, onSelectCountry }) {
    const ref = useRef(null);

    useEffect(() => {
        const container = ref.current;
        if (!container) return;

        const width = container.clientWidth;
        const height = container.clientHeight;

        let svg = d3.select(container).select("svg");

        // === создаём карту ОДИН раз ===
        if (svg.empty()) {
            svg = d3
                .select(container)
                .append("svg")
                .attr("width", width)
                .attr("height", height);

            const projection = d3
                .geoMercator()
                .fitSize([width, height], worldData);

            const path = d3.geoPath().projection(projection);

            svg.append("g")
                .selectAll("path")
                .data(worldData.features)
                .enter()
                .append("path")
                .attr("class", "country")
                .attr("d", path)
                .attr("stroke", "#555")
                .attr("stroke-width", 0.5)
                .on("click", (event, d) => {
                    const code = d.properties.iso_a3;
                    onSelectCountry?.(code);
                });

        }

        // === обновляем выделение ===
        svg.selectAll(".country")
            .classed(
                "selected",
                d =>
                    selectedCountry &&
                    d.id === selectedCountry.cca3
            );

    }, [selectedCountry, onSelectCountry]);

    return <div className="map" ref={ref}></div>;
}

export { WorldMap };