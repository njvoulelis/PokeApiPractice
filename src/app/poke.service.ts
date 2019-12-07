import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class PokeService {
  constructor(private http: HttpClient) {
    // this.getPokemon().toPromise() //one time thing
    //   .then(console.log)
    //   .catch(console.warn);
    this.getPokemon();
  }
  getPokemon() {
    this.http.get('https://pokeapi.co/api/v2/pokemon/1/').subscribe(bulb => {
      console.log(
        `Bulbasaur's abilities are: ${bulb.abilities
          .map(x => x.ability.name)
          .join(', ')}`
      );
      this.comparePoke(bulb);
    });
  }
  comparePoke(x) {
    this.http.get(x.abilities[0].ability.url).subscribe(data => {
      console.log(
        `number of pokemon: ${
          data.pokemon.length
        } pokemon that have ability: ${data.pokemon
          .map(x => x.pokemon.name)
          .join(', ')}`
      );
    });
  }
}
