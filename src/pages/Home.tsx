import { useEffect, useState } from 'react';
import axios from 'axios';
import type { Product } from '../types/Product';
import { Link } from 'react-router-dom';
import { Skeleton } from '@/components/ui/skeleton';

function Home() {
	const [product, setProduct] = useState<Product[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	const getAllProduct = async () => {
		setLoading(true);
		try {
			const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
			setProduct(response.data);
		} catch (err) {
			if (err instanceof Error) setError(err.message);
			else setError('Terjadi kesalahan yang tidak diketahui');
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		getAllProduct();
	}, []);

	const generateSlug = (title: string) =>
		title
			.toLowerCase()
			.replace(/[^a-z0-9]+/g, '-')
			.replace(/(^-|-$)/g, '');

	return (
		<main className="p-6 min-h-screen mt-15">
			<section className="max-w-6xl mx-auto">
				<h1 className="text-3xl font-bold mb-6 text-gray-800">🛍️ Produk </h1>
				{error && <div className="mb-4 p-4 bg-red-100 text-red-700 rounded shadow">❌ Error: {error}</div>}
				{loading ? (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{Array.from({ length: 6 }).map((_, idx) => (
							<div key={idx} className="bg-white rounded-xl shadow p-4 space-y-4">
								<Skeleton className="h-48 w-full" />
								<Skeleton className="h-6 w-3/4" />
								<Skeleton className="h-4 w-full" />
								<Skeleton className="h-4 w-1/2" />
							</div>
						))}
					</div>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{product.map((item) => (
							<Link to={`/${generateSlug(item.title)}`} key={item.id} className="block bg-white rounded-xl shadow hover:shadow-lg transition duration-300 p-4">
								<img src={item.image} alt={item.title} className="h-48 w-full object-contain mb-4" />
								<h2 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h2>
								<p className="text-gray-600 text-sm mb-2 line-clamp-2">{item.description}</p>
								<p className="font-bold text-blue-600">
									{new Intl.NumberFormat('id-ID', {
										style: 'currency',
										currency: 'IDR',
										minimumFractionDigits: 0,
									}).format(item.price * 15000)}{' '}
								</p>
							</Link>
						))}
					</div>
				)}
			</section>
		</main>
	);
}

export default Home;