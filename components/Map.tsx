import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

const expoIcon = L.icon({ iconUrl: "/images/expo-logo.png", iconSize: [20, 20] })
const milleniumIcon = L.icon({ iconUrl: "/images/millenium-logo.png", iconSize: [20, 20] })

const expo: { station: string, coords: [number, number] }[][] = [
    [
        {
            station: 'Waterfront',
            coords: [49.28595, -123.11127]
        },
        {
            station: 'Burrard',
            coords: [49.28565, -123.11980]
        },
        {
            station: 'Granville',
            coords: [49.28323, -123.11605]
        },
        {
            station: 'Stadium–Chinatown',
            coords: [49.27940, -123.10930]
        },
        {
            station: 'Main–Street Science World',
            coords: [49.27315, -123.10040]
        },
        {
            station: 'Commercial-Broadway',
            coords: [49.26185, -123.06910]
        },
        {
            station: 'Nanaimo',
            coords: [49.24837, -123.05600]
        },
        {
            station: '29th Avenue',
            coords: [49.24420, -123.04593]
        },
        {
            station: 'Joyce–Collingwood',
            coords: [49.23835, -123.03170]
        },
        {
            station: 'Patterson',
            coords: [49.22980, -123.01279]
        },
        {
            station: 'Metrotown',
            coords: [49.22585, -123.00390]
        },
        {
            station: 'Royal Oak',
            coords: [49.22008, -122.98843]
        },
        {
            station: 'Edmonds',
            coords: [49.21213, -122.95922]
        },
        {
            station: '22nd Street',
            coords: [49.20006, -122.94898]
        },
        {
            station: 'New Westminster',
            coords: [49.20140, -122.91275]
        },
        {
            station: 'Columbia',
            coords: [49.20485, -122.90610]
        },
        {
            station: 'Scott Road',
            coords: [49.20445, -122.87413]
        },
        {
            station: 'Gateway',
            coords: [49.19910, -122.85060]
        },
        {
            station: 'Surrey Central',
            coords: [49.18951, -122.84787]
        },
        {
            station: 'King George',
            coords: [49.18277, -122.84475]
        },
    ],
    [
        {
            station: 'Columbia',
            coords: [49.20485, -122.90610]
        },
        {
            station: 'Sapperton',
            coords: [49.22455, -122.88952]
        },
        {
            station: 'Braid',
            coords: [49.23310, -122.88275]
        },
        {
            station: 'Lougheed Town Centre',
            coords: [49.24845, -122.89685]
        },
        {
            station: 'Production Way–University',
            coords: [49.25341, -122.91815]
        },
    ]
];

const millenium: { station: string, coords: [number, number] }[][] = [
    [
        {
            station: 'VCC–Clark',
            coords: [49.26582, -123.07915]
        },
        {
            station: 'Commercial–Broadway',
            coords: [49.26295, -123.06850]
        },
        {
            station: 'Renfrew',
            coords: [49.25895, -123.04525]
        },
        {
            station: 'Rupert',
            coords: [49.26073, -123.03310]
        },
        {
            station: 'Gilmore',
            coords: [49.26502, -123.01340]
        },
        {
            station: 'Brentwood Town Centre',
            coords: [49.26639, -123.00170]
        },
        {
            station: 'Holdom',
            coords: [49.26472, -122.98195]
        },
        {
            station: 'Sperling–Burnaby Lake',
            coords: [49.25920, -122.96405]
        },
        {
            station: 'Lake City Way',
            coords: [49.25460, -122.93925]
        },
        {
            station: 'Production Way–University',
            coords: [49.25342, -122.91815]
        },
        {
            station: 'Lougheed Town Centre',
            coords: [49.24845, -122.89685]
        },
        {
            station: 'Burquitlam',
            coords: [49.26135, -122.88995]
        },
        {
            station: 'Moody Centre',
            coords: [49.27810, -122.84685]
        },
        {
            station: 'Inlet Centre Station',
            coords: [49.27720, -122.82797]
        },
        {
            station: 'Coquitlam Central',
            coords: [49.27388, -122.79999]
        },
        {
            station: 'Lincoln',
            coords: [49.28038, -122.79399]
        },
        {
            station: 'Lafarge Lake–Douglas',
            coords: [49.28548, -122.79172]
        },
    ]
];

const expoOptions = { color: '#025BA6' }
const milleniumOptions = { color: '#FFD105' }

const Map = () => {
    return (
        <MapContainer
            style={{ height: "94.5vh" }}
            center={[49.24966, -123.00934]} zoom={12} scrollWheelZoom={true}
        >
            <TileLayer
                attribution='&copy; <a href="https://github.com/mpedrano/Expo-Line-and-Millennium-Line">By Mariela Pedrano</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {
                expo.map((line, index) => (
                    <div key={index}>
                        {
                            line.map((station, index) => (
                                <Marker key={index} position={station.coords} icon={expoIcon}>
                                    <Popup>
                                        {station.station}
                                    </Popup>
                                </Marker>
                            ))
                        }
                        {
                            line.length > 1 &&
                            <Polyline pathOptions={expoOptions} positions={line.map(station => station.coords)} />
                        }
                    </div>
                ))
            }

            {
                millenium.map((line, index) => (
                    <div key={index}>
                        {
                            line.map((station, index) => (
                                <Marker key={index} position={station.coords} icon={milleniumIcon}>
                                    <Popup>
                                        {station.station}
                                    </Popup>
                                </Marker>
                            ))
                        }
                        {
                            line.length > 1 &&
                            <Polyline pathOptions={milleniumOptions} positions={line.map(station => station.coords)} />
                        }
                    </div>
                ))
            }
        </MapContainer>
    )
}

export default Map;