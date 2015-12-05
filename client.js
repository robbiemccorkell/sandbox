import {render} from 'react-dom';
import routes from './routes';
import {createHistory} from "history";

render(routes(createHistory()), document.getElementById('app'));
