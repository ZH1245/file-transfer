import CopyToClipboard from "@/components/CopyToClipboard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { getMyIP } from "@/lib/ip";
import { cn } from "@/lib/utils";
import React from "react";

async function ReceivePage() {
	const ipAddress = await getMyIP();
	return (
		<div className="text-center pt-5 space-y-5">
			<h2 className="text-2xl tracking-widest uppercase font-semibold">
				Receive
			</h2>
			<div className="flex flex-col gap-5 max-w-md mx-auto">
				<Label className="space-y-3">
					<div className="flex items-center gap-2 mt-2">
						<span>IP Address of your machine</span>
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
									Tell the Sending machine to use this IP
									address for sending files
								</TooltipContent>
							</Tooltip>
						</TooltipProvider>
					</div>
					<div
						className={cn(
							"flex items-center",
							"border rounded-md p-1"
						)}
					>
						<Input
							type="text"
							name="ip"
							disabled
							value={ipAddress}
							className="border-none"
						/>
						<CopyToClipboard value={ipAddress} />
					</div>
				</Label>
				{/* <Label className="space-y-3">
					<p className="text-left">Files</p>
					<Input
						type="file"
						multiple
					/>
				</Label>
				<Button>Send Files</Button> */}
			</div>
		</div>
	);
}

export default ReceivePage;
