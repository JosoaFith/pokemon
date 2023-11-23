import { Component } from '@angular/core';
import { Pokemon } from '../models/pokemon';
import { LISTDEPOKEMON } from '../db/list.pokemons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  allPokemons = LISTDEPOKEMON;
  newPokemon: Pokemon = new Pokemon();
  constructor(private router: Router) {}
  pictureFile: string = '';

  addPokemon() { 
    this.newPokemon.id = this.allPokemons.length + 1;
    this.allPokemons.unshift(this.newPokemon);
    this.router.navigate(['']);
  }
}
