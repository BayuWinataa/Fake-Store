import { useParams } from 'react-router-dom';
import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import type { Product } from '../types/Product';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

const generateSlug = (title: string) =>
	title
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/(^-|-$)/g, '');

function ProductDetail() {
	const { slug } = useParams<{ slug: string }>();
	const [product, setProduct] = useState<Product | null>(null);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	const getProduct = useCallback(async () => {
		setLoading(true);
		try {
			const response = await axios.get<Product[]>('https://fakestoreapi.com/products');
			const allProducts = response.data;
			const matchedProduct = allProducts.find((item) => generateSlug(item.title) === slug);
			if (!matchedProduct) {
				throw new Error('Produk tidak ditemukan');
			}
			setProduct(matchedProduct);
		} catch (err) {
			if (err instanceof Error) setError(err.message);
			else setError('Terjadi kesalahan yang tidak diketahui');
		} finally {
			setLoading(false);
		}
	}, [slug]);

	useEffect(() => {
		getProduct();
	}, [getProduct]);

	if (loading)
		return (
			<main className="p-6 min-h-screen bg-gray-50 mt-15">
				<div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-10">
					<div className="flex items-center justify-center">
						<Skeleton className="w-full h-72 rounded-xl bg-gray-200" />
					</div>
					<div className="space-y-4">
						<Skeleton className="h-6 w-28 rounded-full" />
						<Skeleton className="h-8 w-3/4" />
						<Skeleton className="h-4 w-full" />
						<Skeleton className="h-4 w-5/6" />
						<Skeleton className="h-4 w-2/3" />
						<div className="flex gap-3">
							<Skeleton className="h-4 w-24" />
							<Skeleton className="h-4 w-16" />
						</div>
						<Skeleton className="h-6 w-40" />
						<Skeleton className="h-10 w-48 rounded-lg" />
					</div>
				</div>
			</main>
		);

	if (error) {
		return <p className="text-center text-red-600">❌ {error}</p>;
	}
	if (!product) {
		return <p className="text-center text-gray-500">Produk tidak ditemukan</p>;
	}
	return (
		<main className="p-6 min-h-screen bg-gray-50 mt-15">
			<div className="max-w-5xl mx-auto bg-white p-8 rounded-2xl shadow-lg grid grid-cols-1 md:grid-cols-2 gap-10">
				<div className="flex items-center justify-center">
					<img src={product.image} alt={product.title} className="w-full h-72 object-contain border rounded-xl bg-gray-100 p-4" />
				</div>
				<div>
					<span className="inline-block text-sm bg-blue-100 text-blue-600 px-3 py-1 rounded-full mb-2 capitalize">{product.category}</span>
					<h1 className="text-3xl font-bold text-gray-800 mb-3">{product.title}</h1>
					<p className="text-gray-600 mb-4 leading-relaxed">{product.description}</p>
					<div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
						<span>⭐ {product.rating?.rate ?? 4.2} / 5</span>
						<span>|</span>
						<span>📦 Stok: {product.rating?.count ?? 24}</span>
					</div>
					<p className="text-2xl font-semibold text-blue-600 mb-4">
						{new Intl.NumberFormat('id-ID', {
							style: 'currency',
							currency: 'IDR',
							minimumFractionDigits: 0,
						}).format(product.price * 15000)}
					</p>
					<Button>Tambahkan ke Keranjang 🛒</Button>
				</div>
			</div>  
		</main>
	);
}

export default ProductDetail;
