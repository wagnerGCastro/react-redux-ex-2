import { lazy } from 'react';

const Home = lazy(() => import('@views/Home'));
const Sobre = lazy(() => import('@views/Sobre'));


/**
 * Hoooks
 * -----------------------------------
 */
const ListRepositories = lazy(() => import('@views/hooks/ListRepositories'));

/**
 * Redux
 * -----------------------------------
 */
const ListVideos = lazy(() => import('@views/redux/ListVideos'));


const routes = [
    { path: "/", component: Home, title: "Home", parent: '/' },
    { path: "/sobre", component: Sobre, title: "Sobre", parent: '/' },

    { path: "/hooks/list-repositories", component: ListRepositories, title: "Listando Repositorios", parent: '/hooks' },

    { path: "/redux/list-videos", component: ListVideos, title: "Listando videos", parent: '/redux' },
    
    // { path: "*", component: Error404 },
];

export default routes;



