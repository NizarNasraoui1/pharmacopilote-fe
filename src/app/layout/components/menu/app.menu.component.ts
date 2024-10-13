import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from '../../service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html',
})
export class AppMenuComponent implements OnInit {
    model: any[] = [];

    constructor(public layoutService: LayoutService) {}

    ngOnInit() {
        this.model = [
            {
                label: 'General',
                items: [
                    {
                        label: 'Tableau de bord',
                        icon: 'pi pi-fw pi-chart-bar',
                        routerLink: ['./'],
                    }
                ],
            },
            {
                label: 'Data Entry',
                items: [
                    {
                        label: 'Create Data Entry',
                        icon: 'pi pi-fw pi-file',
                        routerLink: ['./data-entry/create'],
                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-fw pi-search',
                        routerLink: ['./data-entry/search'],
                    }
                ],
            },
            {
                label: 'Medical Assessment',
                items: [
                    {
                        label: 'Models',
                        icon: 'pi pi-fw pi-book',
                        routerLink: ['./models'],
                    },
                    {
                        label: 'Create Medical Assessment',
                        icon: 'pi pi-fw pi-folder-plus',
                        routerLink: ['./medical-assessment/create'],
                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-fw pi-search',
                        routerLink: ['./medical-assessment/search'],
                    }
                ],
            },
            {
                label: 'Quality Control',
                items: [
                    {
                        label: 'Create Quality Control',
                        icon: 'pi pi-fw pi-folder-plus',
                        routerLink: ['./quality-control/create'],
                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-fw pi-search',
                        routerLink: ['./quality-control/search'],
                    }
                ],
            },



            {
                label: 'Administration',
                items: [
                    {
                        label: 'Mon Compte',
                        icon: 'pi pi-fw pi-user',
                        routerLink: ['./my-account'],
                    },
                    {
                        label: 'Gestion des utilisateurs',
                        icon: 'pi pi-fw pi-cog',
                        routerLink: ['./user-management'],
                    }
                ],
            }

            // {
            //     label: 'Hierarchy',
            //     items: [
            //         {
            //             label: 'Submenu 1', icon: 'pi pi-fw pi-bookmark',
            //             items: [
            //                 {
            //                     label: 'Submenu 1.1', icon: 'pi pi-fw pi-bookmark',
            //                     items: [
            //                         { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
            //                         { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
            //                         { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' },
            //                     ]
            //                 },
            //                 {
            //                     label: 'Submenu 1.2', icon: 'pi pi-fw pi-bookmark',
            //                     items: [
            //                         { label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }
            //                     ]
            //                 },
            //             ]
            //         },
            //         {
            //             label: 'Submenu 2', icon: 'pi pi-fw pi-bookmark',
            //             items: [
            //                 {
            //                     label: 'Submenu 2.1', icon: 'pi pi-fw pi-bookmark',
            //                     items: [
            //                         { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
            //                         { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' },
            //                     ]
            //                 },
            //                 {
            //                     label: 'Submenu 2.2', icon: 'pi pi-fw pi-bookmark',
            //                     items: [
            //                         { label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' },
            //                     ]
            //                 },
            //             ]
            //         }
            //     ]
            // },
        ];
    }
}
