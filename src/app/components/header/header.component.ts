import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

    items: MenuItem[];


    constructor(){
        this.items =[];
    }

    ngOnInit() {
        this.items = [
            {label: 'Inicio', icon: 'pi pi-fw pi-home'},
            {label: 'Quien soy', icon: ''},
            {label: 'UTNG', icon: ''},
            {label: 'Documentos', icon: 'pi pi-fw pi-file'},
            {label: 'Comentarios', icon: 'pi pi-fw pi-cog'}
        ];
    }


}
