import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
public date = new Date().toLocaleDateString();
public time = new Date().toLocaleTimeString();
}
