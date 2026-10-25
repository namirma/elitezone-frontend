import React from 'react'
import 'leaflet/dist/leaflet.css';
import './LeafletMap.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';

function LeafletMap() {


    const makers = [
        {
            geolocation: [32.6248171, 51.7265077],
        },
    ]

    const customIcon = new Icon({
        iconUrl: require('./Assets/placeholder.png'),
        iconSize: [35, 35]
    })

    return (
        <>
            <div style={{ padding: '0', margin: '0', boxSizing: 'border-box' }}>

                <MapContainer center={[32.6248171, 51.7265077]} zoom={16}>

                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    // url="https://stamen-tiles.a.ssl.fastly.net/toner/{z}/{x}/{y}.png"
                    // url="https://stamen-tiles.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
                    // url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                    // url="https://{s}.basemaps.cartocdn.com/rastertiles/dark_all/{z}/{x}/{y}{r}.png"
                    // url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
                    />

                    {makers.map((marker, index) => (
                        <Marker Marker key={index} position={marker.geolocation} icon={customIcon}>
                            <Popup keepInView={true}>
                                <div className='map-popup-container'>
                                    <div className='map-popup-header'> گروه نرم افزاری سازه اسپادانا </div>
                                    <div className='map-popup-body'> اصفهان - خیابان سلمان فارسی (مشتاق سوم) - بعد از پل تاریخی شهرستان - جنب دانشگاه پیام نور - ساختمان شهرک علمی تحقیقاتی اصفهان - طبقه اول واحد 114 </div>
                                    <div className='map-popup-footer'> 031-34005 </div>
                                </div>
                            </Popup>
                        </Marker>
                    ))}

                </MapContainer>
            </div >
        </>
    )
}

export default LeafletMap