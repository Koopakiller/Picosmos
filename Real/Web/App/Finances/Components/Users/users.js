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
var FinancesService_js_1 = require("../Services/FinancesService.js");
var router_1 = require("@angular/router");
var GlobalLoadingIndicatorService_js_1 = require("../../Scaffold/Services/GlobalLoadingIndicatorService.js");
var IndexComponent = (function () {
    function IndexComponent(_financesService, _router, _globalLoadingIndicatorService) {
        this._financesService = _financesService;
        this._router = _router;
        this._globalLoadingIndicatorService = _globalLoadingIndicatorService;
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._globalLoadingIndicatorService.addLoadingProcess();
        this._financesService.users.subscribe(function (x) {
            _this.users = x;
            _this._globalLoadingIndicatorService.removeLoadingProcess();
        }, function (error) {
            alert(error);
        });
    };
    return IndexComponent;
}());
IndexComponent = __decorate([
    core_1.Component({
        templateUrl: "/Templates/Finances/Users.html"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof FinancesService_js_1.FinancesService !== "undefined" && FinancesService_js_1.FinancesService) === "function" && _a || Object, router_1.Router, typeof (_b = typeof GlobalLoadingIndicatorService_js_1.GlobalLoadingIndicatorService !== "undefined" && GlobalLoadingIndicatorService_js_1.GlobalLoadingIndicatorService) === "function" && _b || Object])
], IndexComponent);
exports.IndexComponent = IndexComponent;
var _a, _b;
