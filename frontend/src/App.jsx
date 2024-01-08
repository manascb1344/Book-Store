import Header from "./components/Header";
import Home from "./components/Home";
import AddBook from "./components/AddBook";
import Books from "./components/Book/Books";
import About from "./components/About";
import BookDetail from "./components/Book/BookDetail";
import { Route, Routes } from "react-router-dom";

function App() {
	return (
		<>
			<header>
				<Header />
			</header>
			<main>
				<Routes>
					<Route path="/" element={<Home />}></Route>
					<Route path="/add" element={<AddBook />}></Route>
					<Route path="/books" element={<Books />}></Route>
					<Route path="/about" element={<About />}></Route>
					<Route path="/books/:id" element={<BookDetail />}></Route>
				</Routes>
			</main>
		</>
	);
}

export default App;
