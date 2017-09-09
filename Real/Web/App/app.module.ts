import { NgModule } from "@angular/core";
import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./Scaffold/Components/app.js";
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./Components/home.js";
import { MediaAppletComponent } from "./Components/MediaApplet.js";
import { LoadingIndicatorComponent } from "./Components/loading-indicator.js";
import { GlobalLoadingIndicatorService } from "./Scaffold/Services/GlobalLoadingIndicatorService.js";
import { ErrorComponent } from "./Scaffold/Components/error.js";
import { NavigationService } from "./Scaffold/Services/NavigationService.js";

const appRoutes: Routes = [
  { path: 'Home', component: HomeComponent },

  { path: 'Finances', loadChildren: "/App/Finances/finances.module.js#FinancesModule" },
  { path: 'Test', loadChildren: "/App/Test/test.module.js#TestModule" },

  { path: 'Media', component: MediaAppletComponent },
  { path: 'Error/:errorId', component: ErrorComponent },
  { path: '', pathMatch: 'full', redirectTo: '/Home' },
  { path: '**', redirectTo: '/Error/http404' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    HttpModule,
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    ErrorComponent,
    LoadingIndicatorComponent,
    HomeComponent,
    MediaAppletComponent
  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    GlobalLoadingIndicatorService,
    NavigationService
  ],
})
export class AppModule { }
