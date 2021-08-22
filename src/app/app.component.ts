import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil, tap } from 'rxjs/operators';
import { SideNavServiceService } from './services/SideNavService/side-nav-service.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  destroyed$: Subject<boolean> = new Subject<boolean>();

  public sideNavOpened$: Observable<boolean>;

  constructor(private SideNavService: SideNavServiceService) { 
    this.sideNavOpened$ = SideNavService.isOpen()
      .pipe(
        takeUntil(this.destroyed$)
      ); 
  }

  sideNavClosed(): void {
    this.SideNavService.closeSideNav();
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.unsubscribe();
  }
  
}
