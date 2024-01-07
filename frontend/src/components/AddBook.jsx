import { React, useState } from "react";
import { FormLabel, TextField, Box, Button, FormControlLabel, Checkbox } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AddBook = () => {
	const history = useNavigate();
	const [inputs, setInputs] = useState({
		name: "",
		description: "",
		price: "",
		author: "",
		image: "",
	});

	const [checked, setChecked] = useState(false);

	const handleChange = (e) => {
		setInputs((prev) => ({
			...prev,
			[e.target.name]: e.target.value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		sendRequest().then(() => history("/books"));
	};

	const sendRequest = async () => {
		await axios
			.post("http://localhost:5000/books", {
				name: String(inputs.name),
				author: String(inputs.author),
				description: String(inputs.description),
				price: Number(inputs.price),
				image: String(inputs.image),
				available: Boolean(checked),
			})
			.then((res) => res.data);
	};

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<Box
					display="flex"
					flexDirection="column"
					justifyContent={"center"}
					maxWidth={700}
					alignContent={"center"}
					alignSelf={"center"}
					marginRight={"auto"}
					marginLeft={"auto"}
					marginTop={10}
				>
					<FormLabel>Name</FormLabel>
					<TextField value={inputs.name} onChange={handleChange} margin="normal" fullWidth="outlined" name="name" />
					<FormLabel>Author</FormLabel>
					<TextField value={inputs.author} onChange={handleChange} margin="normal" fullWidth="outlined" name="author" />
					<FormLabel>Description</FormLabel>
					<TextField value={inputs.description} onChange={handleChange} margin="normal" fullWidth="outlined" name="description" />
					<FormLabel>Image</FormLabel>
					<TextField value={inputs.image} onChange={handleChange} margin="normal" fullWidth="outlined" name="image" />
					<FormLabel>Price</FormLabel>
					<TextField
						value={inputs.price}
						onChange={handleChange}
						type="number"
						margin="normal"
						fullWidth="outlined"
						name="price"
					/>
					<FormControlLabel
						control={
							<Checkbox
								checked={checked}
								onChange={() => {
									setChecked(!checked);
								}}
							/>
						}
						label="Available"
					/>

					<Button type="submit" variant="contained">
						Add Book
					</Button>
				</Box>
			</form>
		</div>
	);
};

export default AddBook;
