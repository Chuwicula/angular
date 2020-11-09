import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DestinoViaje} from './../model/destino-viaje.model'
import { DestinosApiClient } from '../model/destinos-api-client.model';
@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css']
})
export class ListaDestinosComponent implements OnInit {
  
  @Output() onItemAdded: EventEmitter<DestinoViaje>;

  constructor(public destinosApiClient:DestinosApiClient) { 
  	this.onItemAdded = new EventEmitter();
  }

  ngOnInit(): void {
  }

  agregado(d: DestinoViaje){
  	this.destinosApiClient.add(d);
  	this.onItemAdded.emit(d);
  }

  elegido(d : DestinoViaje){
    this.destinosApiClient.getAll().forEach(
      function (x) {x.setSelect(false);})
    d.setSelect(true);
  }

}
