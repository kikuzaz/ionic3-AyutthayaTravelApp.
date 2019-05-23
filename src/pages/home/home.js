var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
// Import pages to allow links to the page
import { CategoryPage } from '../../pages/category/category';
// Service import for items
import { ItemApi } from '../../services/service';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, params, itemApi) {
        this.navCtrl = navCtrl;
        this.params = params;
        this.itemApi = itemApi;
    }
    // This is where the data loads from the service.
    // It happens when the view loads for the first time.
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.itemApi.getItems().then(function (data) { return _this.items = data; });
    };
    // This function is an event to listen to clicks on elements.
    // The SingleItem Page has been included to be passed in this function.
    HomePage.prototype.CategoryTapped = function ($event, category) {
        this.navCtrl.push(CategoryPage, {
            category: 'VisitTemple'
        });
    };
    HomePage.prototype.CategoryTapped_2 = function ($event, category) {
        this.navCtrl.push(CategoryPage, {
            category: 'VisitResturent'
        });
    };
    HomePage.prototype.CategoryTapped_3 = function ($event, category) {
        this.navCtrl.push(CategoryPage, {
            category: 'VisitEtc.'
        });
    };
    HomePage.prototype.CategoryTapped_4 = function ($event, category) {
        this.navCtrl.push(CategoryPage, {
            category: 'VisitOneDay'
        });
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html',
            providers: [Http]
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ItemApi])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map