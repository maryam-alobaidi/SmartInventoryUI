import { Routes } from '@angular/router';
import { Admin } from './admin'; 
import { Products } from './products/products'; 
import { Users } from './users/users';
import { Reports } from './reports/reports';
import { Transaction } from './transaction/transaction';
import { Categories } from './categories/categories';

export const ADMIN_ROUTES: Routes = [
    { 
        path: '', 
        component: Admin,//father of all
        children:[
            
             { path: 'products', component: Products },
            { path: 'users', component: Users },
            { path: 'categories', component: Categories },
            { path: 'transaction', component: Transaction }, 
            { path: 'reports', component: Reports },   
            
            {//لكي تفتح صفحة المنتجات تلقائياً عند الدخول للأدمن
                path:'',redirectTo:'products',pathMatch:'full'
            }
        ]

    },
    
];