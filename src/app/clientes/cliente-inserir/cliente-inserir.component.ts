import { Component, Output, EventEmitter} from '@angular/core';
import { Cliente } from '../cliente.model';
@Component({
  selector: 'app-cliente-inserir',
  templateUrl: "./cliente-inserir.component.html",
  styleUrls: ["./cliente-inserir.component.css"]
})
export class ClienteInserirComponent{
  @Output() clienteAdicionado = new EventEmitter();
  nome: string;
  telefone: string;
  email: string;

  onAdicionarCliente(){
    const cliente: Cliente = {
      nome: this.nome,
      telefone: this.telefone,
      email: this.email
    };
    this.clienteAdicionado.emit(cliente);
  }
}
