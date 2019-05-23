var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
// Service import for items
import { ItemApi } from '../../services/service';
var SingleItem = /** @class */ (function () {
    function SingleItem(navCtrl, navParams, itemApi, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.itemApi = itemApi;
        this.loadingController = loadingController;
        this.item = this.navParams.data;
    }
    // ------------------------------------------------------------------------------------------
    // FUNCTIONS
    // ------------------------------------------------------------------------------------------
    //  let posMaceio =
    SingleItem.prototype.ionViewDidLoad = function () {
        // Load the google map
        this.loadMap();
    };
    // Function to add marker at current location
    SingleItem.prototype.addInfoWindow = function (marker, content) {
        var _this = this;
        var infoWindow = new google.maps.InfoWindow({
            content: content
        });
        google.maps.event.addListener(marker, 'click', function () {
            infoWindow.open(_this.map, marker);
        });
    };
    // Function for loading the google map and getting geolocation coords
    SingleItem.prototype.loadMap = function () {
        // lat:13.820790, lng:100.514187 
        var str = parseFloat(this.item.lat);
        var str1 = parseFloat(this.item.lng);
        var loc = { lat: str, lng: str1 };
        console.log(loc);
        var mapOptions = {
            // center: {lat:13.820790, lng:100.514187},
            center: loc,
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        //automatically place marker at current location
        this.addMarker();
    };
    SingleItem.prototype.addMarker = function () {
        var marker = new google.maps.Marker({
            map: this.map,
            animation: google.maps.Animation.BOUNCE,
            position: this.map.getCenter()
        });
        var content = "<h4> </h4>" + this.item.title;
        this.addInfoWindow(marker, content);
    };
    SingleItem.prototype.goLatLng = function () {
        window.open("https://www.google.co.th/maps/search/" + this.item.title + "/", '_system', 'location=yes');
    };
    __decorate([
        ViewChild('map'),
        __metadata("design:type", ElementRef)
    ], SingleItem.prototype, "mapElement", void 0);
    SingleItem = __decorate([
        Component({
            selector: 'page-single-item',
            templateUrl: 'single-item.html',
            providers: [Http]
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ItemApi,
            LoadingController])
    ], SingleItem);
    return SingleItem;
}());
export { SingleItem };
//# sourceMappingURL=single-item.js.map