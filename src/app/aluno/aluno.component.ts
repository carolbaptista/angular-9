import { Component, OnInit } from '@angular/core';
import { Aluno } from '../domain/aluno';
import { AlunoService } from '../services/aluno.service';

@Component({
  selector: 'app-aluno',
  templateUrl: './aluno.component.html',
  styleUrls: ['./aluno.component.css']
})
export class AlunoComponent implements OnInit {

 alunos: Aluno[]; // Armazena os contratos do servidor remoto
  constructor(private alunoService : AlunoService) { 
    this.getAlunos();
 }
  ngOnInit() {
  }

  getAlunos(){
    this.alunoService.getAlunos()
  .subscribe(response => {// Recebe JSON
    this.alunos = response["data"];
    console.log(response);
  })

}
}
