import { Component, OnInit } from '@angular/core';
import { ProyectoService } from './services/proyecto.service';

declare var jQuery: any;
declare var $: any;
declare var mdc: any;

@Component({
    selector: 'app-grit',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [ ProyectoService ]
})
export class AppComponent implements OnInit {

    title = 'Grit';

    public ngOnInit() {
        $.getScript('../assets/js/material-components-web.min.js');

        mdc.autoInit();
        this.drawerInit();
    }

    public mostrarTitulo() {
        console.log( 'click' );
    }

    private drawerInit() {
        const drawerel = document.querySelector('.mdc-persistent-drawer');
        const MDCPersistentDrawer = mdc.drawer.MDCPersistentDrawer;
        const drawer = new MDCPersistentDrawer(drawerel);

        document.querySelector('.demo-menu').addEventListener('click', function() {
            drawer.open = !drawer.open;
        });

        drawerel.addEventListener('MDCPersistentDrawer:open', function() {
            console.log('Received MDCPersistentDrawer:open');
        });

        drawerel.addEventListener('MDCPersistentDrawer:close', function() {
            console.log('Received MDCPersistentDrawer:close');
        });
    }
}
