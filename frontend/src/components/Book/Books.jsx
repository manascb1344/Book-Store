import React, { useEffect, useState } from "react";
import axios from "axios";
import Book from "./Book";

const URL = "https://book-store-api-backend-1344.onrender.com:5000/books";

const fetchHandler = async () => {
	return await axios.get(URL).then((res) => res.data);
};

const Books = () => {
	const [books, setBooks] = useState();

	const deleteBook = (_id) => {
		setBooks(books.filter((book) => book._id !== _id));
	};

	useEffect(() => {
		fetchHandler().then((data) => setBooks(data.books));
	}, []);
	console.log(books);
	return (
		<div>
			<ul>
				{books &&
					books.map((book) => (
						<li key={book._id}>
							<Book book={book} onDelete={deleteBook} />
						</li>
					))}
			</ul>
		</div>
	);
};

export default Books;
