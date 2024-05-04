import ReactDOM from 'react-dom/client';
import Blog from './blog.jsx';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store.js';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<Provider store={store}>
			<Blog />
		</Provider>
	</BrowserRouter>,
);
