import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { CargasHisComponent } from '../componentes/cargas-his/cargas-his.component';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.component.html',
  styleUrls: ['./menu-principal.component.css']
})
export class MenuPrincipalComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {

    this.items = [
      {
          label: 'Maestros', icon: 'fa fa-fw fa-check',
          items: [
              [
                  {
                      label: 'Personal',
                      items: [{label: 'TV 1.1'},{label: 'TV 1.2'}]
                  },
                  {
                      label: 'TV 2',
                      items: [{label: 'TV 2.1'},{label: 'TV 2.2'}]
                  }
              ],
              [
                  {
                      label: 'Puntos de digitacion',
                      items: [{label: 'Establecimientos por Puntos',routerLink:"adminpue"},{label: 'TV 3.2'}]
                  },
                  {
                      label: 'TV 4',
                      items: [{label: 'TV 4.1'},{label: 'TV 4.2'}]
                  }    
              ]
          ]
      },
      {
          label: 'Reportes', icon: 'fa fa-fw fa-soccer-ball-o',
          items: [
              [
                  {
                      label: 'Estrategias',
                      items: [{label: 'Sports 1.1'},{label: 'Sports 1.2'}]
                  },
                  {
                      label: 'Sports 2',
                      items: [{label: 'Sports 2.1'},{label: 'Sports 2.2'}]
                  },

              ],
              [
                  {
                      label: 'Sports 3',
                      items: [{label: 'Sports 3.1'},{label: 'Sports 3.2'}]
                  },
                  {
                      label: 'Sports 4',
                      items: [{label: 'Sports 4.1'},{label: 'Sports 4.2'}]
                  }
              ],
              [
                  {
                      label: 'Sports 5',
                      items: [{label: 'Sports 5.1'},{label: 'Sports 5.2'}]
                  },
                  {
                      label: 'Sports 6',
                      items: [{label: 'Sports 6.1'},{label: 'Sports 6.2'}]
                  }
              ]
          ]
      },
      {
        label: 'Cargas', icon: 'fa fa-fw fa-soccer-ball-o',
        items: [
            [
                {
                    label: 'HIS',
                    items: [{label: 'Reportes Planos',routerLink:"cargasHis"},{label: 'Sports 1.2'}]
                }
            ],
            [
                {
                    label: 'SIS',
                    items: [{label: 'Sports 3.1'},{label: 'Sports 3.2'}]
                }
            ]
        ]
    }
  ];
  }

}
