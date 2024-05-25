import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import { convertTimestampToDateTime } from '../utils/getDateTime';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

const Map = ({ data, stoppages }) => {
    const positions = data.map(point => [point.latitude, point.longitude]);
    const myIcon = new Icon({
        iconUrl:"https://cdn-icons-png.flaticon.com/128/684/684908.png",
        iconSize: [38, 38]
    })
    console.log('in Map', stoppages)
    return (
        <MapContainer center={positions[0]} zoom={12} >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Polyline positions={positions} color="blue" />
                {stoppages.map((stoppage, index) => (
                    <Marker key={index} position={stoppage.location} icon={myIcon}>
                        <Popup>
                            <div>
                                <p><strong>Reach Time:</strong> {convertTimestampToDateTime(stoppage.startTime)}</p>
                                <p><strong>End Time:</strong> {convertTimestampToDateTime(stoppage.endTime)}</p>
                                <p><strong>Duration:</strong> {Math.floor(stoppage.duration / 60000)} minutes</p>
                            </div>
                        </Popup>
                    </Marker>
                ))}
        </MapContainer>
    );
};

export default Map;
