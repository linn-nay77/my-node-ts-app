import { Router } from 'express';
import IndexController from '../controllers/index';

const router = Router();
const indexController = new IndexController();

export function setRoutes(app) {
    app.use('/', router);
    router.get('/', indexController.home);
    router.get('/about', indexController.about);
    // Add more routes as needed
}