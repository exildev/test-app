import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, Response, Headers } from '@angular/http';
import { Proyecto, Orden, Actividad, Material } from '../models';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ProyectoService {

    private _proyectoUrl = 'http://104.236.33.228:8777/ws/proyecto/list/';

    constructor(private _jsonp: Http) { }

    getProyectos(): Observable<Proyecto[]> {
        return this._jsonp.get(this._proyectoUrl)
            .map(this.onResponse)
            .catch(this.onError);
    }

    private onResponse(res: Response) {
        let body: any;
        body = res.json();
        console.log(body);
        return body.data || {};
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
