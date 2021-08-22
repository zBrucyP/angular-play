import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SideNavServiceService } from '../../services/SideNavService/side-nav-service.service'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit, OnDestroy {

  options = [
    {
      text: "Website Title",
      path: "/"
    },
    {
      text: "Home",
      path: "/"
    },
    {
      text: "Store",
      path: "/store"
    },
    {
      text: "Other",
      path: "/other"
    }
  ]

  destroyed$: Subject<boolean> = new Subject<boolean>();

  constructor() { 
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
    this.destroyed$.unsubscribe();
  }



}
