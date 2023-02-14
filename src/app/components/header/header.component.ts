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
            {label: 'UTNG', icon: 'pi pi-fw pi-th-large'},
            {label: 'Documentos', icon: 'pi pi-fw pi-file'},
            {
                label: 'Usuarios',
                icon: 'pi pi-fw pi-user',
                items: [
                    {label: 'Email', icon: 'pi pi-fw pi-user'},
                    {label: 'Contraseña', icon: 'pi pi-fw pi-key'},
                    {label: 'Iniciar Sesion', icon: 'pi pi-fw pi-sign-in'},
                    {label: 'Registrate', icon: 'pi pi-fw pi-user-plus'}
                ]
            }
        ];
    }


}
