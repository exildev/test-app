import { Component, Input} from '@angular/core';

@Component({
    selector: 'app-mdctoolbar',
    templateUrl: './mdc-toolbar.component.html',
    styleUrls: ['./mdc-toolbar.component.css']
})
export class MdcToolbarComponent {

    @Input() title: string;
    @Input() subtitle: string;
    @Input() menuIcon: string;

    constructor() {
        this.title = 'Grit App';
        this.subtitle = '';
     }

}
