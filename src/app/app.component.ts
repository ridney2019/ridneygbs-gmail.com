import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome = null;
  pessoas = [];

  salvar(){
    this.pessoas.push(this.nome);
    this.nome = null;

  }
}
