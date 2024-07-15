import React, { useState } from 'react';
import { MapContainer, TileLayer, FeatureGroup } from 'react-leaflet';
import { EditControl } from 'react-leaflet-draw';
import axios from 'axios';
import 'leaflet/dist/leaflet.css';
import 'leaflet-draw/dist/leaflet.draw.css';
import '../../node_modules/leaflet-draw/dist/leaflet.draw.css'
import '../../node_modules/leaflet-draw/dist/leaflet.draw.css'


function Task1() {
    const [rectangle, setRectangle] = useState(null);

    const _onCreate = (e) => {
        const { layerType, layer } = e;
        if (layerType === 'rectangle') {
            setRectangle(layer.getBounds());
        }
    };

    const handleDownload = () => {
        if (rectangle) {
            const coordinates = {
                north: rectangle.getNorth(),
                south: rectangle.getSouth(),
                east: rectangle.getEast(),
                west: rectangle.getWest(),
            };

            axios.post('http://localhost:8000/api/get-image/', { coordinates })
                .then(response => {
                    const url = window.URL.createObjectURL(new Blob([response.data]));
                    const link = document.createElement('a');
                    link.href = url;
                    link.setAttribute('download', 'image.png');
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                })
                .catch(error => console.error('Error downloading image:', error));
        } else {
            alert('Please draw a rectangle first.');
        }
    };

    return (
        <div>
            <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "600px", width: "100%" }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <FeatureGroup>
                    <EditControl
                        position='topright'
                        onCreated={_onCreate}
                        draw={{
                            rectangle: true,
                            polyline: false,
                            polygon: false,
                            circle: false,
                            marker: false,
                            circlemarker: false,
                        }}
                    />
                </FeatureGroup>
            </MapContainer>
            <button onClick={handleDownload}>Download Image</button>
        </div>
    );
}

export default Task1;
