import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../services/proyecto.service';
import { Proyecto } from '../models';
@Component({
    selector: 'app-gr-proyect-list',
    templateUrl: './gr-proyect-list.component.html',
    styleUrls: ['./gr-proyect-list.component.css']
})
export class GrProyectListComponent implements OnInit {

    proyectos: Proyecto[];
    errorMgs: String;

    constructor(private _proyectoService: ProyectoService) {}

    ngOnInit() {
        this._proyectoService.getProyectos()
            .subscribe(proyectos => this.proyectos = proyectos, error => this.errorMgs = <any>error);
    }

}
