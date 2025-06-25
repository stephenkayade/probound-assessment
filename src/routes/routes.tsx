import navbar from './navbar.route'
import footer from './footer.route'
import { IRoute } from '../utils/interfaces.util'
import appRoutes from './app.route';

const routes: Array<IRoute> = [
    ...appRoutes,
    ...navbar,
    ...footer,
];

export default routes;
