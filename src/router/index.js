// import Demo from '../demo/Demo'
import Home_two from '../pages/Home_two'

import NotFound from '../pages/404'

export const routes = [
    {
        path:'*',
        name: 'NotFound',
        component: NotFound
    },
    {
        path:'/',
        name: 'Home_two',
        component: Home_two
    }
];
