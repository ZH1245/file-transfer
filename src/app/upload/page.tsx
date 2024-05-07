import React, { FormEvent } from "react";
import Form from "./Form";

function UploadPage() {
	return (
		<div className="text-center pt-5 space-y-5">
			<h2 className="text-2xl tracking-widest uppercase font-semibold">
				Upload
			</h2>
			<Form />
		</div>
	);
}

export default UploadPage;
