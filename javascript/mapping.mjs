import Map from 'node_modules/ol/Map.js';
import OSM from '/ol/source/OSM';
import TileLayer from '/ol/layer/Tile';
import View from '/ol/View';
import {Circle as CircleStyle, Fill, Stroke, Style} from '/ol/style';
import {MultiPoint, Point} from '/ol/geom';
import {getVectorContext} from '/ol/render';

const map = new Map({
  target: 'map',
  layers: [
    new TileLayer({
      source: new OSM()
    })
  ],
  view: new View({
    center: [0, 0],
    zoom: 2
  })
});
