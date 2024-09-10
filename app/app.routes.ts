import { Routes } from '@angular/router';
import { UsercodeComponent } from './usercode/usercode.component';
import { OptimizecodeComponent } from './optimizecode/optimizecode.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [{path:'migrate',component:UsercodeComponent},
    {path:'optimize',component:OptimizecodeComponent},
    {path:'',component:AboutComponent}
];
