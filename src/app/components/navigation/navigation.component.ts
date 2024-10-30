import { Component } from '@angular/core';
import { Data } from '../../models/data';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss'
})
export class NavigationComponent {
  public data: Data[] = [];

  constructor(private myService: DataService) { }

  ngOnInit() {
    this.data = this.myService.getdata();
  }

  public getStateClass(state: string): string {
    return this.myService.getStateClass(state);
  }
}
