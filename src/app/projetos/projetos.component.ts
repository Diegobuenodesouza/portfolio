import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent implements OnInit {

  projetos = [
    {
      titulo : 'Meu Portfolio',
      descricao : 'Nesse projeto crio meu portfolio, usando Angular, Bootstrap, HTML, CSS , Typescript e Github.',
      github : 'https://github.com/Diegobuenodesouza/portfolio',
      site: 'https://diegobuenodesouza.github.io/meu-portfolio/'      
    },
    {
      titulo : 'Operadores Logicos',
      descricao : 'Os operadores lógicos entram quando precisamos realizar operações sobre um ou dois valores booleano (verdadeiro ou falso), usando Angular, Bootstrap, HTML, CSS , Typescript e Github.',
      github : 'https://github.com/Diegobuenodesouza/operadores-logicos',
      site:'https://diegobuenodesouza.github.io/operadoreslogicos/'
      
    },   

     {
      titulo : 'Tabuada',
      descricao : 'Nesse projeto desenvolvo uma tabuada usando Angular, Bootstrap e Github.',
      github : 'https://github.com/Diegobuenodesouza/Tabuada-do-0-ao-n',
      site: 'https://diegobuenodesouza.github.io/tabuadaangular/'
    },

      {
      titulo : 'Calculadora Combustivel',
      descricao : 'Nesse projeto desenvolvo calculadora compara preço do litro do álcool com o da gasolina e mostra qual deles é mais vantajoso. Cálculo leva em conta que álcool deve custar até 70% da gasolina para valer a pena. Acima desse percentual é melhor abastecer com gasolina.',
      github : 'https://github.com/Diegobuenodesouza/calculadora_combustivel',
      site: 'https://diegobuenodesouza.github.io/calculadoracombustivel/'
    },

    {
      titulo : 'Game traduzir frases',
      descricao : 'Nesse projeto crio game para traduzir frases, aonde tem 4 tentativas. A cada erro ou solicitação de dica, você perde um  ♥. Foi utilizado Angular, Bootstrap, HTML, CSS , Typescript e Github.',
      github : 'https://github.com/Diegobuenodesouza/tradutor-frases-games',
      site:'https://diegobuenodesouza.github.io/tradutor-frases/'
      
    },
   
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
