import { Component, OnInit, OnDestroy } from '@angular/core';
import * as Leaflet from 'leaflet';
import { antPath } from 'leaflet-ant-path';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit, OnDestroy {
  map: Leaflet.Map;

  constructor() {
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.leafletMap();
  }

  leafletMap() {
    this.map = Leaflet.map('mapId').setView([45.188529, 5.724524], 13);
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'edupala.com © Angular LeafLet',
    }).addTo(this.map);

    Leaflet.marker([45.191373603962546, 5.72001886497889]).addTo(this.map).bindPopup('Carrefour City').openPopup();
    Leaflet.marker([45.19270433335892, 5.729031087382475]).addTo(this.map).bindPopup('Carrefour Express').openPopup();
    Leaflet.marker([45.187018272027345, 5.73134851600054]).addTo(this.map).bindPopup('Carrefour Express').openPopup();
    Leaflet.marker([45.18901450719965, 5.706028462580944]).addTo(this.map).bindPopup('Carrefour City').openPopup();
    Leaflet.marker([45.191192138452294, 5.694183827421947]).addTo(this.map).bindPopup('Carrefour Contact').openPopup();
    Leaflet.marker([45.186110869260226, 5.758041860453061]).addTo(this.map).bindPopup('Géant Casino').openPopup();
    Leaflet.marker([45.191373603962546, 5.72001886497889]).addTo(this.map).bindPopup('Carrefour City').openPopup();
    Leaflet.marker([45.15989797129493, 5.726319442438197]).addTo(this.map).bindPopup('Carrefour').openPopup();
    Leaflet.marker([45.20216555723127, 5.707294369347798]).addTo(this.map).bindPopup('Carrefour Express').openPopup();
    Leaflet.marker([45.18407740408245, 5.721027275726941]).addTo(this.map).bindPopup('Monoprix').openPopup();
    Leaflet.marker([45.18698114574636, 5.713817497804072]).addTo(this.map).bindPopup('Franprix').openPopup();
    Leaflet.marker([45.19157843379381, 5.728237053649809]).addTo(this.map).bindPopup('Monoprix').openPopup();
    Leaflet.marker([45.181657506117396, 5.720598122288875]).addTo(this.map).bindPopup('Auchan').openPopup();
    Leaflet.marker([45.18165483068869, 5.7074660228360194]).addTo(this.map).bindPopup('Leader Price').openPopup();
    Leaflet.marker([45.17318437751332, 5.7220572400435605]).addTo(this.map).bindPopup('Lidl').openPopup();
    Leaflet.marker([45.16967482072811, 5.753728764490443]).addTo(this.map).bindPopup('Leclerc').openPopup();
    Leaflet.marker([45.16138414684562, 5.693303959041647]).addTo(this.map).bindPopup('Neto').openPopup();
    Leaflet.marker([45.18879323384586, 5.761539357198044]).addTo(this.map).bindPopup('Lidl').openPopup();

  }

  ngOnDestroy(): void {
  }
}

