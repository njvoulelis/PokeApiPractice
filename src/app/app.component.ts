import { Component } from '@angular/core';
import { PokeService } from './poke.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'public';
  constructor(private pokeService: PokeService) {}
  // getPokemon() {
  //   this.pokeService.getPokemon().subscribe(console.log);
  // }
}
