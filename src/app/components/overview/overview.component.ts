import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Data } from '../../models/data';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {
  public data: Data[] = [];

  constructor(private myService: DataService) { }

  ngOnInit() {
    this.data = this.myService.getdata();
  }

  public getStateClass(state: string): string {
    return this.myService.getStateClass(state);
  }

  public getOverviewIconClass(section: string): string {
    switch (section) {
      case 'Scale':
        return 'system_update_alt';
      case 'Attacher':
        return 'menu_book';
      case 'Packer':
        return 'mail';
      case 'Closer':
        return 'grid_on';
      default:
        return '';
    }
  }
}
