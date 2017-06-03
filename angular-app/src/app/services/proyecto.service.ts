import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers } from '@angular/http';
import { Proyecto, Orden, Actividad, Material } from '../models';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProyectoService {

    private _proyectoUrl = 'http://192.168.1.52:8000/ws/proyecto/list/';

    constructor(private _jsonp: Http) { }

    getProyectos(): Observable<Proyecto[]> {
        return this._jsonp.get(this._proyectoUrl)
            .map(this.onResponse)
            .catch(this.onError);
    }

    private onResponse(res: Response) {
        const body: any = res.json().object_list;
        for (const key in body) {
            if (body[key]) {
                body[key].ordenes = body[key].ordenes.object_list;
                for (const key2 in body[key].ordenes) {
                    if (body[key].ordenes[key2]) {
                        body[key].ordenes[key2].actividades = body[key].ordenes[key2].actividades.object_list;
                        body[key].ordenes[key2].materiales = body[key].ordenes[key2].materiales.object_list;
                    }
                };
            }
        }
        return body || {};
    }

    private onError(error: Response | any) {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        // console.error(errMsg);
        return Observable.throw(errMsg);
    }
}
