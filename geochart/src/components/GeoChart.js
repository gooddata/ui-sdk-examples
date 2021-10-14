import React, { useState, useRef, useEffect } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import usa from "../us_states.json";

import styles from "./GeoChart.module.scss";

mapboxgl.accessToken =
    "pk.eyJ1IjoiYnVnc2J1bm55MzM4IiwiYSI6ImNrOWFjM3RwdDFwbTgzbWxjYXY5c2owcHEifQ.txtRg3caaSKdJObOMVwM6Q";

const GeoChart = ({ height, data }) => {
    const mapContainer = useRef(null);
    const map = useRef(null);
    const hoveredStateId = useRef(null);
    const popup = useRef(null);
    const [lng, setLng] = useState(-100.486052);
    const [lat, setLat] = useState(37.830348);
    const [zoom, setZoom] = useState(3);

    useEffect(() => {
        if (map.current) return; // initialize map only once
        // Create a popup, but don't add it to the map yet.
        popup.current = new mapboxgl.Popup({
            closeButton: false,
            offset: [0, -10],
        });
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: "mapbox://styles/mapbox/streets-v11",
            center: [lng, lat],
            zoom: zoom,
        });
        map.current.on("load", () => {
            map.current.addSource("states", {
                type: "geojson",
                data: "https://docs.mapbox.com/mapbox-gl-js/assets/us_states.geojson",
            });

            // The feature-state dependent fill-opacity expression will render the hover effect
            // when a feature's hover state is set to true.
            map.current.addLayer({
                id: "state-fills",
                type: "fill",
                source: "states",
                layout: {},
                paint: {
                    "fill-color": "#627BC1",
                    "fill-opacity": ["case", ["boolean", ["feature-state", "hover"], false], 1, 0.5],
                },
            });

            map.current.addLayer({
                id: "state-borders",
                type: "line",
                source: "states",
                layout: {},
                paint: {
                    "line-color": "#627BC1",
                    "line-width": 2,
                },
            });
        });
    }, [lat, lng, zoom]);

    useEffect(() => {
        if (!map.current) return; // wait for map to initialize
        map.current.on("move", () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });

        // When the user moves their mouse over the state-fill layer, we'll update the
        // feature state for the feature under the mouse.
        map.current.on("mousemove", "state-fills", e => {
            // map.current.getCanvas().style.cursor = 'pointer';

            if (e.features.length > 0) {
                if (hoveredStateId.current !== null) {
                    map.current.setFeatureState(
                        { source: "states", id: hoveredStateId.current },
                        { hover: false },
                    );
                }
                hoveredStateId.current = e.features[0].id;
                map.current.setFeatureState(
                    { source: "states", id: hoveredStateId.current },
                    { hover: true },
                );
            }

            const stateName = usa.features.find(feature => feature.id === hoveredStateId.current).properties
                .STATE_NAME;
            const population = data.find(state => state.state === stateName)?.population;
            const density = data.find(state => state.state === stateName)?.density;
            popup.current
                .setLngLat(e.lngLat)
                .setHTML(
                    `<div class="${styles.Popup}"><h3>${stateName}</h3><table><tr><td>population</td><td>${population}</td></tr><tr><td>density</td><td>${density}</td></tr></table></div>`,
                )
                .addTo(map.current);
        });

        // When the mouse leaves the state-fill layer, update the feature state of the
        // previously hovered feature.
        map.current.on("mouseleave", "state-fills", () => {
            if (hoveredStateId.current !== null) {
                map.current.setFeatureState(
                    { source: "states", id: hoveredStateId.current },
                    { hover: false },
                );
            }
            hoveredStateId.current = null;
            popup.current.remove();
        });
    }, [data]);

    return (
        <div>
            <div className={styles.Sidebar}>
                Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
            </div>
            <div ref={mapContainer} className={styles.MapContainer} style={{ height }} />
        </div>
    );
};

export default GeoChart;
