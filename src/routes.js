

import Home from "@views/Home";
import Sobre from "@views/Sobre";

/**
 * Hoooks
 * -----------------------------------
 */
import ListRepositories from "@views/hooks/ListRepositories";


/**
 * Redux
 * -----------------------------------
 */
import ListVideos from "@views/redux/ListVideos";


const routes = [
    { path: "/", component: Home, title: "Home", parent: '/' },
    { path: "/sobre", component: Sobre, title: "Sobre", parent: '/' },

    { path: "/hooks/list-repositories", component: ListRepositories, title: "Listando Repositorios", parent: '/hooks' },

    { path: "/redux/list-videos", component: ListVideos, title: "Listando videos", parent: '/redux' },
    // { path: "*", component: Error404 },
];

export default routes;



