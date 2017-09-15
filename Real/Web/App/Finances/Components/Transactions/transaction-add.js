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
var LocationService_js_1 = require("../../Common/Services/LocationService.js");
var FinancesViewModels_js_1 = require("../ViewModels/FinancesViewModels.js");
var router_1 = require("@angular/router");
var KeyValuePair_js_1 = require("../../Common/KeyValuePair.js");
var GlobalLoadingIndicatorService_js_1 = require("../../Scaffold/Services/GlobalLoadingIndicatorService.js");
var FinancesNewTransactionComponent = (function () {
    function FinancesNewTransactionComponent(_financesService, _locationService, _router, _globalLoadingIndicatorService) {
        this._financesService = _financesService;
        this._locationService = _locationService;
        this._router = _router;
        this._globalLoadingIndicatorService = _globalLoadingIndicatorService;
        this.includeTimeStampTime = false;
        this.showAddPersonForm = false;
    }
    FinancesNewTransactionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._globalLoadingIndicatorService.addLoadingProcess();
        this._financesService.persons.subscribe(function (x) {
            _this.persons = x;
            _this.person = x.length > 0 ? x[0].id : null;
            _this._globalLoadingIndicatorService.removeLoadingProcess();
        });
        this._globalLoadingIndicatorService.addLoadingProcess();
        this._financesService.users.subscribe(function (x) {
            _this.users = x;
            _this.user = x.length > 0 ? x[0].id : null;
            _this._globalLoadingIndicatorService.removeLoadingProcess();
        });
        this._globalLoadingIndicatorService.addLoadingProcess();
        this._locationService.location.subscribe(function (x) {
            _this.coordinates = x ? x.coords : null;
            _this._globalLoadingIndicatorService.removeLoadingProcess();
        });
        this.timeStampDate = new Date();
        this.timeStampDate.setHours(0, 0, 0, 0);
        this.timeStampTime = new Date('12:34 AM');
        this.value = 0;
    };
    Object.defineProperty(FinancesNewTransactionComponent.prototype, "user", {
        get: function () {
            return this._user;
        },
        set: function (value) {
            var _this = this;
            this._globalLoadingIndicatorService.addLoadingProcess();
            this._user = value;
            this._financesService.getCurrencyAccounts(value).subscribe(function (x) {
                _this.currencyAccounts = x;
                _this.currencyAccount = x.length > 0 ? x[0].id : null;
                _this._globalLoadingIndicatorService.removeLoadingProcess();
            });
        },
        enumerable: true,
        configurable: true
    });
    FinancesNewTransactionComponent.prototype.submit = function () {
        var _this = this;
        this._globalLoadingIndicatorService.addLoadingProcess();
        var tvm = new FinancesViewModels_js_1.TransactionViewModel();
        tvm.currencyAccountId = this.currencyAccount;
        tvm.personId = this.person;
        tvm.userId = this.user;
        tvm.timeStampDate = this.timeStampDate;
        tvm.timeStampTime = this.timeStampTime;
        tvm.includeTimeStampTime = this.includeTimeStampTime;
        tvm.note = this.name;
        tvm.value = this.value;
        if (this.coordinates) {
            tvm.rawData = [
                new KeyValuePair_js_1.KeyValuePair("Coordinates", JSON.stringify(this.coordinates))
            ];
        }
        this._financesService.addTransactions([tvm]).subscribe(function () {
            _this._router.navigateByUrl("/Finances");
            _this._globalLoadingIndicatorService.removeLoadingProcess();
        }, function (error) {
            alert(error);
            _this._globalLoadingIndicatorService.removeLoadingProcess();
        });
    };
    FinancesNewTransactionComponent.prototype.cancel = function () {
        this._router.navigateByUrl("/Finances");
    };
    FinancesNewTransactionComponent.prototype.submitNewPerson = function () {
        var _this = this;
        this._globalLoadingIndicatorService.addLoadingProcess();
        this._financesService.addPerson(this.addNewPersonName, this.user);
        this.addNewPersonName = "";
        this.showAddPersonForm = false;
        this._financesService.persons.subscribe(function (x) {
            _this.persons = x;
            _this.person = x.length > 0 ? x[0].id : null;
            _this._globalLoadingIndicatorService.removeLoadingProcess();
        });
    };
    return FinancesNewTransactionComponent;
}());
FinancesNewTransactionComponent = __decorate([
    core_1.Component({
        selector: "finances-transaction-add",
        templateUrl: "/Templates/Finances/TransactionAdd.html"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof FinancesService_js_1.FinancesService !== "undefined" && FinancesService_js_1.FinancesService) === "function" && _a || Object, typeof (_b = typeof LocationService_js_1.LocationService !== "undefined" && LocationService_js_1.LocationService) === "function" && _b || Object, router_1.Router, typeof (_c = typeof GlobalLoadingIndicatorService_js_1.GlobalLoadingIndicatorService !== "undefined" && GlobalLoadingIndicatorService_js_1.GlobalLoadingIndicatorService) === "function" && _c || Object])
], FinancesNewTransactionComponent);
exports.FinancesNewTransactionComponent = FinancesNewTransactionComponent;
var _a, _b, _c;
