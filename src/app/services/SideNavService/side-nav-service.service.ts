import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SideNavServiceService {

  private subject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private sideNavOpen$: Observable<boolean>;

  constructor() { 
    this.sideNavOpen$ = this.subject.asObservable();
  }

  closeSideNav(): void {
    this.subject.next(false);
  }

  openSideNav(): void {
    this.subject.next(true);
  }

  toggleSideNav(): void {
    let current = this.sideNavOpen$
      .pipe(
        take(1)
      )
      .subscribe((current: boolean) => {
        this.subject.next(!current);
      });
  }

  isOpen(): Observable<boolean> {
    return this.sideNavOpen$;
  }

}
