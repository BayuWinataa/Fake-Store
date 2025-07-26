function About() {
	return (
		<main className="min-h-screen bg-gray-50 px-6 py-12">
			<section className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow-md">
				<h1 className="text-3xl font-bold text-gray-800 mb-6">Tentang Kami 🛒</h1>

				<p className="text-gray-700 mb-4 leading-relaxed">
					Selamat datang di <strong>Fake Store App</strong> — toko online simulasi yang dibuat untuk belajar menggunakan <code className="bg-gray-100 px-1 rounded text-sm">React</code>,{' '}
					<code className="bg-gray-100 px-1 rounded text-sm">TypeScript</code>, dan <code className="bg-gray-100 px-1 rounded text-sm">Fake Store API</code>.
				</p>

				<p className="text-gray-700 mb-4">Proyek ini bertujuan untuk membantu pemula memahami alur pembuatan aplikasi web modern, mulai dari fetching data, pengelolaan state, navigasi, hingga struktur proyek.</p>

				<ul className="list-disc list-inside text-gray-700 mb-6">
					<li>🚀 Dibuat dengan React + TypeScript</li>
					<li>🎨 Desain dengan Tailwind CSS & ShadCN</li>
					<li>📦 Konsumsi API dari fakestoreapi.com</li>
				</ul>

				<p className="text-gray-600 text-sm">💡 Halaman ini dibuat sebagai bagian dari latihan membangun aplikasi e-commerce dari dasar. Jangan ragu untuk mengeksplorasi dan belajar dari kode sumbernya.</p>
			</section>
		</main>
	);
}

export default About;
	