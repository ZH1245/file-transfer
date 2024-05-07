"use client";
import React from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
function CopyToClipboard({ value }: { value?: string }) {
	async function copy() {
		try {
			await navigator.clipboard.writeText(value || "");
			toast.success("Copied To Clipboard");
		} catch (err) {
			console.error("Failed to copy: ", err);
		}
	}
	return (
		<Button
			type="button"
			variant={"secondary"}
			onClick={copy}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="1em"
				height="1em"
				viewBox="0 0 24 24"
			>
				<path
					fill="#888888"
					d="M9 18q-.825 0-1.412-.587T7 16V4q0-.825.588-1.412T9 2h9q.825 0 1.413.588T20 4v12q0 .825-.587 1.413T18 18zm0-2h9V4H9zm-4 6q-.825 0-1.412-.587T3 20V6h2v14h11v2zm4-6V4z"
				></path>
			</svg>
		</Button>
	);
}

export default CopyToClipboard;
