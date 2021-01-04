import React from 'react';
import HomePage from './pages/HomePages/HomePage';
import NotPoundPage from './pages/NotPoundPages/NotPoundPage';
import ProductListPage from './pages/ProductsPages/ProductListPage';
import ProductActionPage from './pages/ActionProductsPages/productActionPage';
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <HomePage />
    },
    {
        path: '/product/add',
        exact: false,
        main: ({history}) => <ProductActionPage history={history} />
    },
    {
        path: '/products/:id/edit',
        exact: false,
        main: ({match, history}) => <ProductActionPage match={match} history={history}/>
    },
    {
        path: '/products',
        exact: false,
        main: () => <ProductListPage />
    },
    {
        path: '',
        exact: false,
        main: () => <NotPoundPage />
    }//phai dat duoi cung vi no se lam cho page kha ko chay dc
]
export default routes;