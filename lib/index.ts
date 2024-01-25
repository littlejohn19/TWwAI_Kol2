import App from './app';
import IndexController from "./controllers/index.controller";

const app: App = new App([
    new IndexController()
]);

app.listen();
