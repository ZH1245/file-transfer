"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import axios from "axios";
import React, { FormEvent } from "react";
import { toast } from "sonner";

function Form() {
	const [status, setStatus] = React.useState<"stale" | "sending" | "sent">(
		"stale"
	);
	async function sendFiles(e: FormEvent) {
		e.preventDefault();
		setStatus("sending");
		const ip = (e as any).target.ip.value;
		await axios.post(`http://${ip}/upload`).then((res) => {
			console.log(res);
			toast("RES");
		});
	}
	return (
		<form
			className="flex flex-col gap-5 max-w-md mx-auto"
			onSubmit={sendFiles}
		>
			<Label className="space-y-3">
				<div className="flex items-center gap-2 mt-2">
					<span>IP Address of receiving machine</span>
					<TooltipProvider>
						<Tooltip>
							<TooltipTrigger>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="1.5em"
									height="1.5em"
									viewBox="0 0 24 24"
								>
									<path
										className="fill-blue-700"
										d="M11 9h2V7h-2m1 13c-4.41 0-8-3.59-8-8s3.59-8 8-8s8 3.59 8 8s-3.59 8-8 8m0-18A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m-1 15h2v-6h-2z"
									></path>
								</svg>
							</TooltipTrigger>
							<TooltipContent>
								Ask the Receiving machine to navigate to{" "}
								<b>Receive</b> and tell the IP address of
								his/her machine
							</TooltipContent>
						</Tooltip>
					</TooltipProvider>
				</div>
				<Input
					type="text"
					required
					name="ip"
				/>
			</Label>
			<Label className="space-y-3">
				<p className="text-left">Files</p>
				<Input
					type="file"
					multiple
					name="file"
					required
				/>
			</Label>
			<Button
				disabled={status === "sending"}
				type="submit"
				className="uppercase tracking-wide"
			>
				{status === "sending" ? (
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="1em"
						height="1em"
						viewBox="0 0 24 24"
					>
						<g
							fill="none"
							fillRule="evenodd"
						>
							<path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
							<path
								fill="#888888"
								d="M12 4.5a7.5 7.5 0 1 0 0 15a7.5 7.5 0 0 0 0-15M1.5 12C1.5 6.201 6.201 1.5 12 1.5S22.5 6.201 22.5 12S17.799 22.5 12 22.5S1.5 17.799 1.5 12"
								opacity=".1"
							></path>
							<path
								fill="#888888"
								d="M12 4.5a7.458 7.458 0 0 0-5.187 2.083a1.5 1.5 0 0 1-2.075-2.166A10.458 10.458 0 0 1 12 1.5a1.5 1.5 0 0 1 0 3"
							></path>
						</g>
					</svg>
				) : (
					"Send"
				)}
			</Button>
		</form>
	);
}

export default Form;
