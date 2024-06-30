// src/components/Map.tsx
import React from 'react';
import { YMaps, Map as YMap, Placemark } from '@pbe/react-yandex-maps';
import './Map.css';

const Map: React.FC = () => {
  return (
    <YMaps>
      <div className="map-container">
        <YMap defaultState={{ center: [58.603562, 49.667993], zoom: 12 }} width="100%" height="100%">
          <Placemark geometry={[58.603562, 49.667993]} properties={{ balloonContent: 'Самокат 1' }} />
          <Placemark geometry={[58.614539, 49.665568]} properties={{ balloonContent: 'Самокат 2' }} />
          <Placemark geometry={[58.595437, 49.658323]} properties={{ balloonContent: 'Самокат 3' }} />
        </YMap>
      </div>
    </YMaps>
  );
};

export default Map;