"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var GlobalLoadingIndicatorService_js_1 = require("../../../Shared/Services/GlobalLoadingIndicatorService.js");
var FinancesAuthenticationService_js_1 = require("../../Services/FinancesAuthenticationService.js");
var FinancesService_js_1 = require("../../Services/FinancesService.js");
var IndexComponent = (function () {
    function IndexComponent(_financesAuthenticationService, _financesService, _router, _globalLoadingIndicatorService) {
        this._financesAuthenticationService = _financesAuthenticationService;
        this._financesService = _financesService;
        this._router = _router;
        this._globalLoadingIndicatorService = _globalLoadingIndicatorService;
    }
    IndexComponent.prototype.submit = function () {
        this._financesAuthenticationService.getToken(this.userName, this.password).subscribe(function (token) {
            //this._financesService.assignToken(token);
            console.log(token);
            alert(token);
        }, function (error) {
            alert(error);
        });
    };
    return IndexComponent;
}());
IndexComponent = __decorate([
    core_1.Component({
        templateUrl: "/App/Finances/Templates/Authentication/Index.html"
    }),
    __metadata("design:paramtypes", [FinancesAuthenticationService_js_1.FinancesAuthenticationService,
        FinancesService_js_1.FinancesService,
        router_1.Router,
        GlobalLoadingIndicatorService_js_1.GlobalLoadingIndicatorService])
], IndexComponent);
exports.IndexComponent = IndexComponent;