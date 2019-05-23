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
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
// Service import for items
import { ItemApi } from '../../services/service';
var SingleItem2Page = /** @class */ (function () {
    function SingleItem2Page(navCtrl, navParams, itemApi, loadingController) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.itemApi = itemApi;
        this.loadingController = loadingController;
        this.item = this.navParams.data;
    }
    // ------------------------------------------------------------------------------------------
    // FUNCTIONS
    // -----------------------------------------------------------------------------------------
    SingleItem2Page.prototype.goTrip1 = function () {
        window.open(" ", '_system', 'location=yes');
    };
    SingleItem2Page.prototype.goTrip2 = function () {
        window.open(" ", '_system', 'location=yes');
    };
    SingleItem2Page = __decorate([
        Component({
            selector: 'page-single-item2',
            templateUrl: 'single-item2.html',
            providers: [Http]
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ItemApi,
            LoadingController])
    ], SingleItem2Page);
    return SingleItem2Page;
}());
export { SingleItem2Page };
//# sourceMappingURL=single-item2.js.map