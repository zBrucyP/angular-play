import { Component, OnInit } from '@angular/core';
import { SideNavServiceService } from '../../services/SideNavService/side-nav-service.service'

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private SideNavServiceService: SideNavServiceService) { }

  ngOnInit(): void {
  }

  clickWaffle(): void {
    this.SideNavServiceService.toggleSideNav();
  }

}
