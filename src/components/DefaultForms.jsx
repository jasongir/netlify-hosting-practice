import React from "react";

const DefaultForms = () => {
	const onSubmit = (e) => {
		e.preventDefault();
		// send info to database, process it somehow, etc.
	};

	return (
		// <form action="">
		<form action="" onSubmit={onSubmit}>
			<div>
				<label>
					some text
					<input type="text" />
				</label>
			</div>
			<div>
				a telephone
				<label htmlFor="">
					<input type="tel" />
				</label>
			</div>
			<div>
				<label>
					password
					<input type="password" />
				</label>
			</div>
			<button type="submit">Submit info</button>
		</form>
	);
};

export default DefaultForms;

// return (
// 	<div>
// 		<form>
// 			<div>
// 				<label>
// 					Telephone:
// 					<input type="tel" />
// 				</label>
// 			</div>
// 			<div>
// 				<label>
// 					Text:
// 					<input type="text" />
// 				</label>
// 			</div>
// 			<div>
// 				<label>
// 					Email:
// 					<input type="email" />
// 				</label>
// 			</div>
// 			<button type="submit">Submit</button>
// 		</form>
// 	</div>
// );
