import { Component } from '@angular/core';
import { Heroes } from '../../Interfaces/heroes';
import { HEROES } from '../../Mock-data/mock-heroes'; 

@Component({
  selector: 'app-hero-lists',
  templateUrl: './hero-lists.component.html',
  styleUrls: ['./hero-lists.component.css']
  
})
export class HeroListsComponent {
 hero: Heroes = { id: 1, name: 'Iron Man' };

 heroes: Heroes[] = HEROES;
 selectedHero?: Heroes;

 onSelect(hero: Heroes): void {
   this.selectedHero = hero;
 }
}
