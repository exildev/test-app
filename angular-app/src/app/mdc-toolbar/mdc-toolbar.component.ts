import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'app-mdctoolbar',
    templateUrl: './mdc-toolbar.component.html',
    styleUrls: ['./mdc-toolbar.component.css']
})
export class MdcToolbarComponent {

    @Input() title: string;
    @Input() subtitle: string;
    @Input() menuIcon: string;
    @Output() toggleMenu: EventEmitter<any> = new EventEmitter();

    constructor() {
        this.title = 'Grit App';
        this.subtitle = '';
    }

    onMeneClick(ev) {
        this.toggleMenu.emit(ev);
    }

}
