import ReactDOM from "react-dom";
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.css';
import routes from "./routes";
import './assets/css/font-awesome.min.css';

const App = routes;

ReactDOM.render(App, document.getElementById("root"));
