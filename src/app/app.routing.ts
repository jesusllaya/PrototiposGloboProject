import { JuanComponent } from '../app/components/juan/juan.component';

import { NewProjectComponent } from '../app/components/new-project/new-project.component';

import { Routes } from '@angular/router';

export const appRoutes: Routes = [
    {path: 'miJuan', component: JuanComponent},
    {path: 'newProject', component: NewProjectComponent}
];