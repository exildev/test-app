import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../services/proyecto.service';
import { Proyecto, Orden, Actividad, Material } from '../models';
@Component({
    selector: 'app-gr-proyect-list',
    templateUrl: './gr-proyect-list.component.html',
    styleUrls: ['./gr-proyect-list.component.css']
})
export class GrProyectListComponent implements OnInit {

    proyectos: Proyecto[];
    errorMgs: String;

    constructor(private _proyectoService: ProyectoService) { }

    ngOnInit() {
        this._proyectoService.getProyectos()
            .subscribe(proyectos => {
                this.proyectos = proyectos;
                console.log(this.proyectos);
                this.orden(this.proyectos[0].ordenes[0].actividades[0]);
            }, error => {
                this.errorMgs = <any>error;
            });
    }
    orden(orden: Actividad) {
        console.log(orden);
    }
}
