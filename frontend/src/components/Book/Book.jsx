import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
const Book = (props) => {
	const history = useNavigate();
	const { _id, name, author, description, price, image, available } = props.book;
	const deleteHandler = async () => {
		try {
			await axios.delete(`https://book-store-api-backend-1344.onrender.com/books/${_id}`);
			props.onDelete(_id);
		} catch (error) {
			console.error("Error deleting book:", error);
		}
	};

	return (
		<div className="flex flex-wrap justify-center">
			<div key={_id} className="m-4 p-4 bg-white shadow-md bg-clip-border rounded-xl w-96">
				<div className="relative mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
					<img src={image} alt={name} className="w-full h-full object-cover" />
				</div>
				<div className="p-6">
					<h5 className="block mb-2 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
						{name}
					</h5>
					<p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">Author: {author}</p>
					<p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit ">
						Description: {description}
					</p>
					<p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">Price: ${price}</p>
					<p className="block font-sans text-base antialiased font-light leading-relaxed text-inherit">
						Available: {available ? "Yes" : "No"}
					</p>
				</div>
				<div className="p-6 pt-0 flex justify-between">
					<Button
						LinkComponent={Link}
						to={`/books/${_id}`}
						className="select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
						type="button"
					>
						Update
					</Button>
					<Button
						color="error"
						onClick={deleteHandler}
						className="select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
						type="button"
					>
						Delete
					</Button>
				</div>
			</div>
		</div>
	);
};

export default Book;
