import { Component, OnInit, ViewChild, HostListener } from '@angular/core';

declare var mdc: any;

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
    @ViewChild('drawer')drawer: any;
    constructor() { }

    ngOnInit() {
        const drawerel = this.drawer.nativeElement;
        const drawer = new mdc.drawer.MDCPersistentDrawer(drawerel);

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
