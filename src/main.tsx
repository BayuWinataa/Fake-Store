import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter } from 'react-router';
import App from './App.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter basename="/Fake-Store">
			<App />
		</BrowserRouter>
	</StrictMode>
);
