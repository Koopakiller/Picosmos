import { Component, OnDestroy, OnInit, HostListener, ElementRef, ViewChild } from "@angular/core";
import { GlobalLoadingIndicatorService } from "../../Shared/Services/GlobalLoadingIndicatorService";
import { Subscription } from "rxjs/Subscription";
import { Observable } from "rxjs";
import { NavigationService } from "../../Shared/Services/NavigationService";
import {
    Event as RouterEvent,
    NavigationStart,
    NavigationEnd,
    NavigationCancel,
    NavigationError,
    Router
} from "@angular/router";
import { RoutingSectionService } from "../../Shared/Services/RoutingSectionService";
import { Size } from "../../Shared/Models/Size";
import { VerticalDirection } from "../../Shared/Models/VerticalDirection";

@Component({
    selector: "app",
    templateUrl: "App.html",
    styleUrls: [
        "App.less"
    ]
})
export class AppComponent implements OnInit {
    constructor(
        private _navigationService: NavigationService,
        private _router: Router,
        private _routingSectionService: RoutingSectionService
    ) {
        this._router.events.subscribe((event: RouterEvent) => {
            if (event instanceof NavigationStart) {
                this.isLoading = true;
            }
            if (event instanceof NavigationEnd ||
                event instanceof NavigationCancel ||
                event instanceof NavigationError) {
                this.isLoading = false;
            }
        });
    }

    public isLoading: boolean = true;

    public ngOnInit() {
        this.updatePaneSize();
    }

    @HostListener('window:resize')
    updatePaneSize() {
        let size = new Size(this.paneContainer.nativeElement.offsetWidth, this.paneContainer.nativeElement.offsetHeight);
        this._routingSectionService.setSize(size);
    }

    @ViewChild("paneContainer")
    private paneContainer: ElementRef;

    public scrollDownToNextRoutingSection(): void {
        let sPos = this._routingSectionService.getNextScrollPosition(this.paneContainer.nativeElement.scrollTop, VerticalDirection.Down);
        this.paneContainer.nativeElement.scrollTop = sPos;
    }

    public scrollUpToNextRoutingSection(): void {
        let sPos = this._routingSectionService.getNextScrollPosition(this.paneContainer.nativeElement.scrollTop, VerticalDirection.Up);
        this.paneContainer.nativeElement.scrollTop = sPos;
    }
    
    public readonly usesRoutingSections: boolean = true;
}
