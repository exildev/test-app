import { Component, OnInit } from '@angular/core';

declare var jQuery: any;
declare var $: any;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    title = 'app works!';

    public ngOnInit() {
        $('.button-collapse').sideNav();
    }

    public mostrarTitulo() {
        console.log( 'click' );
        $( '.title' ).slideToggle();
    }
}
