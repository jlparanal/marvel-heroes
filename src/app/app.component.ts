import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'marvel-heroes';
  items = ['Iron-Man', 'Spider-Man', 'Ant-Man', 'Dr. Strange'];

  addItem(newItem: string) {
    this.items.push(newItem);
  }
}
