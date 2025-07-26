// components/Navbar.tsx
import { NavLink } from 'react-router-dom';

export default function Navbar() {
	const linkStyle = ({ isActive }: { isActive: boolean }) => (isActive ? 'text-blue-600 font-semibold ' : 'text-gray-600 hover:text-blue-500 transition');

	return (
		<header className="w-full px-6 py-4 shadow-md bg-white fixed z-50">
			<div className="max-w-6xl mx-auto flex items-center justify-between">
				<h1 className="text-xl font-bold text-gray-800">🛒 FakeStore</h1>

				<nav className="flex items-center space-x-6">
					<NavLink to="/" className={linkStyle}>
						Home
					</NavLink>
					<NavLink to="/about" className={linkStyle}>
						About
					</NavLink>
				</nav>

			</div>
		</header>
	);
}
