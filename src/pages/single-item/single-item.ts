import { Component,ViewChild,ElementRef} from '@angular/core';
import { NavController, NavParams, LoadingController} from 'ionic-angular';
import { Http } from '@angular/http';

// Service import for items
import { ItemApi } from '../../services/service';

declare const google;

@Component({
  selector: 'page-single-item',
  templateUrl: 'single-item.html',
  providers: [Http]
})
export class SingleItem {

  item: any;
  
  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(
              public navCtrl: NavController,
              private navParams:NavParams,
              private itemApi: ItemApi,
              public loadingController: LoadingController
            )
            {
              this.item = this.navParams.data;
              
            }

  // ------------------------------------------------------------------------------------------
  // FUNCTIONS
  // ------------------------------------------------------------------------------------------

  
    //  let posMaceio =
  ionViewDidLoad() {
    // Load the google map
    this.loadMap();
  }


  // Function to add marker at current location

  addInfoWindow(marker, content){

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });
  }

  // Function for loading the google map and getting geolocation coords
  loadMap(){
      // lat:13.820790, lng:100.514187 
     
      let str = parseFloat(this.item.lat);
      let str1 = parseFloat(this.item.lng);

      let loc = {lat:str, lng:str1};
      console.log(loc);


      let mapOptions = {
        // center: {lat:13.820790, lng:100.514187},
        center: loc,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
    //automatically place marker at current location
    this.addMarker();    
  }

   addMarker(){

    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.BOUNCE,
      position: this.map.getCenter()
    });

    let content = "<h4> </h4>"+this.item.title;

    this.addInfoWindow(marker, content);

  }

  goLatLng(){
    window.open("https://www.google.co.th/maps/search/"+this.item.title+"/",'_system', 'location=yes');
  }
  

}
