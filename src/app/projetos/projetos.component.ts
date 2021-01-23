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
      descricao : 'Nesse projeto crio meu portfolio, usando Angular, Bootstrap, HTML, CSS , Typescript e Azure.',
      github : 'https://github.com/Diegobuenodesouza/portfolio',
      site: 'https://devportfolio.azurewebsites.net/'      
    },
    {
      titulo : 'Game traduzir frases',
      descricao : 'Nesse projeto crio game para traduzir frases, aonde tem 4 tentativas. A cada erro ou solicitação de dica, você perde um  ♥. Foi utilizado Angular, Bootstrap, HTML, CSS , Typescript e Azure.',
      github : 'https://github.com/Diegobuenodesouza/traduzirfases',
      site:'https://traduzir-frases.azurewebsites.net/'
      
    },
    {
      titulo : 'Emissor de faturas ',
      descricao : 'Nesse projeto desenvolvo uma ferramenta capaz de facilitar a emissão de fatura para clientes, é possível cadastrar novos clientes com cnpj e cada cliente pode ter uma lista de servico, com descrição e valor. No final é gerado um PDF com todas as informações e com data de competência e valor total, foi utilizado alem das demais ferramentas dos projetos anteriores o Firebase do google para autenticar e fazer CRUD. Para acessar por favor entre em contato atraves do Linkedin.',
      github : 'https://github.com/Diegobuenodesouza/faturaCliente',
      site: 'https://cliente-fatura.azurewebsites.net/'
    },

     {
      titulo : 'Tabuada',
      descricao : 'Nesse projeto desenvolvo uma tabuada usando Angular, Bootstrap e Azure',
      github : 'https://github.com/Diegobuenodesouza/Tabuada-do-0-ao-n',
      site: 'https://tabuada.azurewebsites.net/'
    },
   
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
