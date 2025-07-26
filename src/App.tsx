import Home from './pages/Home';
import { Routes, Route } from 'react-router';
import About from './pages/About';
import Navbar from './components/navbar';
import ProductDetail from './pages/ProductDetail';

function App() {
	return (
		<>
			<Navbar />
			<div className="p-6">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/:slug" element={<ProductDetail />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
