

import { NewProjectComponent } from '../app/components/new-project/new-project.component';
import { NewClientComponent } from '../app/components/new-client/new-client.component';
import { HomeComponent} from '../app/components/home/home.component';

import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {path: 'newProject', component: NewProjectComponent},
    {path: 'newClient', component: NewClientComponent},
    {path: 'home', component: HomeComponent}
];