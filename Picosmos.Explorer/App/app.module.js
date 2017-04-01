"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var app_component_js_1 = require("./app.component.js");
var initialSelector_component_js_1 = require("./initialSelector.component.js");
var dataTable_component_js_1 = require("./dataTable.component.js");
var commonLegend_component_js_1 = require("./commonLegend.component.js");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            http_1.JsonpModule,
            forms_1.FormsModule
        ],
        declarations: [
            app_component_js_1.AppComponent,
            initialSelector_component_js_1.InitialSelectorComponent,
            dataTable_component_js_1.DataTableComponent,
            commonLegend_component_js_1.CommonLegendComponent
        ],
        bootstrap: [
            app_component_js_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map