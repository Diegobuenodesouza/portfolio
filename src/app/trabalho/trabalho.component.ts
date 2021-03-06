import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trabalho',
  templateUrl: './trabalho.component.html',
  styleUrls: ['./trabalho.component.css']
})
export class TrabalhoComponent implements OnInit {

  trabalhos = [
    {
      empresaPeriodo: "Jedal Redentor Indústria e Comercio (Jun. 2018 - Atualmente)",
      cargo: "Assistente Fiscal",
      atividades : "Conferência de notas fiscais, conferência de CFOP, NCM, CST, responsável pela parametrização do sistema para emissão das notas fiscais, calculo de ICMS-ST, ICMS, PIS, COFINS e IPI"
    },    
    {
    empresaPeriodo: "Demac Produtos Farmacêuticos (Fev. 2015 - Jun. 2018)",
    cargo: "Analista Fiscal I ",
    atividades : "Conferência de notas fiscais, conferência de CFOP, NCM, CST, Apurações de  Impostos Lucro Real – Não Cumulativo, Obrigações acessórias, SPED Fiscal ICMS/IPI, SPED Contribuição PIS/COFINS, GIA, DAPI, responsável pela parametrização do sistema para o cálculo dos impostos federais PIS e COFINS."
    },
    {
    empresaPeriodo: "Marreti Consultoria Ltda (Jul. 2013 - Out. 2014)",
    cargo: "Assistente Fiscal",
    atividades : "Apurações de Impostos, Simples Nacional, Lucro Presumido e Lucro Real - Comércios, Indústrias e Serviços. Obrigações acessórias, SPED Fiscal ICMS/IPI, SPED Contribuição    PIS/COFINS, GIA."
   }
]

  formacoes = [{
    instituicao: "Faculdade Impacta",
    curso: "Curso Superior de Tecnologia em Análise e Desenvolvimento de Sistemas",
    periodo : "2019-2021"
  },
  {
    instituicao: "Udemy",
    curso: "Java COMPLETO Programação Orientada a Objetos +Projetos",
    periodo: "Fev/2021 - Cursando "
  },
  {
    instituicao: "Udemy",
    curso: "Curso de Desenvolvimento WEB com ES6, TypeScript e Angular",
    periodo: "2020"
  }
]

contador = 0

  constructor() { }

  ngOnInit(): void {
  }

}
