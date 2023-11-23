import { Component } from '@angular/core';
import { LISTDEPOKEMON } from '../db/list.pokemons';
import { Pokemon } from '../models/pokemon';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  allPokemons = LISTDEPOKEMON;
  pokemonSelected: Pokemon = new Pokemon();

  viewPokemon(arg: Pokemon) {
    this.pokemonSelected = arg;
  }

  searchFilter(value: string) {
    this.allPokemons = LISTDEPOKEMON;
    this.allPokemons = this.allPokemons.filter(pokemon => {
      return pokemon.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
      // Récupere les pokemons dont le nom contient la valeur de l'input en minuscule
    })
    if(this.allPokemons.length === 0) {
      this.info('Aucun résultat','Aucun pokemon ne correspond à votre recherche')
    }
  }

  info(title: string, mess: string) {
    Swal.fire({
      title: title,
      text: mess,
      icon: 'info',
      width: 600,
      timer: 2000,
      padding: '3rem',
      backdrop: false,
      showConfirmButton: false,
    })
  }

  removePokemon() {
    const index = this.allPokemons.indexOf(this.pokemonSelected, 0);
    if(index > -1) {
      this.allPokemons.splice(index, 1);
    }
  }
}
