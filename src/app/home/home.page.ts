import { Component } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import '@capacitor-community/http';
import { Plugins } from '@capacitor/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  productInformation=null;
  barCode: any;
  constructor(public barcodeScanner: BarcodeScanner) {}

  openBarCodeScanner(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      this.barCode = barcodeData;
      //   Barcode data {"cancelled":0,"text":"8413384010008","format":"EAN_13"}
    }).catch(err => {
      console.log('Error', err);
    });
  }
  async getProductWithBarCode(barcode){
    const { Http } = Plugins;
    let urlToCall = "https://fr.openfoodfacts.org/api/v0/produit/"+barcode+".json"
    let ret = await Http.request({
      method: 'GET',
      url: urlToCall,
      headers: {
        'content-type': 'application/json',
      }
    });
    console.log(ret.data)
    if (ret.data){
      this.productInformation = ret.data
      console.log("==Product ",this.productInformation.product)
    }
  }
}


