import { Routes } from '@angular/router';
import { Login } from './components/login/login';



export const routes: Routes = [
 {
        path:'login',
        component: Login
        }
        ,
        {
            path:'',
            redirectTo:'login',
            pathMatch:'full'
        }
,
    {
        path:'user',
        loadChildren: () => import('./features/user/user.routes').then(m => m.USER_ROUTES)
    },
      {
        path:'admin',
        loadChildren: () => import('./features/admin/admin.routes').then(m => m.ADMIN_ROUTES)
    }
];
