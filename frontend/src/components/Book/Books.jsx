import React, { useEffect, useState } from "react";
import axios from "axios";

const URL = "http://localhost:5000/books";

const fetchHandler = async () => {
	return await axios.get(URL).then((res) => res.data);
};

const Books = () => {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		fetchHandler().then((data) => setBooks(data.books));
	}, []);

	console.log(books);

	return (
		<div className="flex flex-wrap justify-center">
			{books.map((book) => (
				<div key={book._id} className="m-4 p-4 bg-white shadow-md bg-clip-border rounded-xl w-96">
					<div className="relative mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
						<img src={book.image} alt={book.name} className="w-full h-full object-cover" />
					</div>
					<div className="p-6">
						<h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
							{book.name}
						</h5>
						<p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">Author: {book.author}</p>
						<p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit ">
							Description: {book.description}
						</p>
						<p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">Price: ${book.price}</p>
						<p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
							Available: {book.available ? "Yes" : "No"}
						</p>
					</div>
					<div className="p-6 pt-0 flex justify-between">
						<button
							className="select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
							type="button"
						>
							Update
						</button>
						<button
							className="select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
							type="button"
						>
							Delete
						</button>
					</div>
				</div>
			))}
		</div>
	);
};

export default Books;
