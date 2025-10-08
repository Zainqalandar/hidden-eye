// components/Navbar.jsx

'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="bg-[#f5f5f5] shadow-md fixed w-full z-50 top-0">
			<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
				{/* Logo Section */}
				<div className="flex items-center space-x-3">
					<Image
						src="/logo/hiddeneye-logo.png" // Apna logo file public folder me daalna
						alt="Hidden Eye Logo"
						width={55}
						height={55}
						className="rounded"
					/>
					<div>
						<h1 className="text-xl font-bold text-red-600 tracking-wide">
							HIDDEN EYE
						</h1>
						<p className="text-xs text-gray-600 uppercase tracking-widest">
							Surveillance Solution
						</p>
					</div>
				</div>

				{/* Desktop Menu */}
				<ul className="hidden md:flex space-x-8 font-medium text-gray-700">
					<li>
						<Link
							href="/"
							className="hover:text-red-600 transition"
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							href="/services"
							className="hover:text-red-600 transition"
						>
							Services
						</Link>
					</li>
					<li>
						<Link
							href="/projects"
							className="hover:text-red-600 transition"
						>
							Projects
						</Link>
					</li>
					<li>
						<Link
							href="/about"
							className="hover:text-red-600 transition"
						>
							About Us
						</Link>
					</li>
					<li>
						<Link
							href="/contact"
							className="hover:text-red-600 transition"
						>
							Contact
						</Link>
					</li>
				</ul>

				{/* Desktop Button */}
				<div className="hidden md:block">
					<Link
						href="/contact"
						className="bg-red-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-black transition"
					>
						Get Quote
					</Link>
				</div>

				{/* Mobile Menu Button */}
				<div
					onClick={() => setIsOpen(!isOpen)}
					className="md:hidden text-3xl text-red-600 cursor-pointer"
				>
					{isOpen ? '✖' : '☰'}
				</div>
			</div>

			{/* Mobile Menu */}
			<div
				className={`md:hidden bg-white shadow-inner transition-all duration-300 ease-in-out ${
					isOpen
						? 'max-h-96 opacity-100'
						: 'max-h-0 opacity-0 overflow-hidden'
				}`}
			>
				<ul className="flex flex-col items-center space-y-4 py-4 font-medium text-gray-700">
					<li>
						<Link
							href="/"
							className="hover:text-red-600 transition"
							onClick={() => setIsOpen(false)}
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							href="/services"
							className="hover:text-red-600 transition"
							onClick={() => setIsOpen(false)}
						>
							Services
						</Link>
					</li>
					<li>
						<Link
							href="/projects"
							className="hover:text-red-600 transition"
							onClick={() => setIsOpen(false)}
						>
							Projects
						</Link>
					</li>
					<li>
						<Link
							href="/about"
							className="hover:text-red-600 transition"
							onClick={() => setIsOpen(false)}
						>
							About Us
						</Link>
					</li>
					<li>
						<Link
							href="/contact"
							className="hover:text-red-600 transition"
							onClick={() => setIsOpen(false)}
						>
							Contact
						</Link>
					</li>
					<li>
						<Link
							href="/contact"
							className="bg-red-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-black transition"
							onClick={() => setIsOpen(false)}
						>
							Get Quote
						</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
}
