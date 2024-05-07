import React, { SVGProps } from "react";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "../ui/tooltip";
import { TooltipArrow } from "@radix-ui/react-tooltip";
import { Button } from "../ui/button";
import Link from "next/link";

function Navbar() {
	return (
		<nav className="bg-gray-600 text-white px-5 p-3 rounded shadow flex items-center justify-between mb-1">
			<h1
				className="text-3xl font-bold"
				style={{ fontFamily: "cursive" }}
			>
				<Link href="/">FS</Link>
			</h1>
			<div className="flex items-center gap-3">
				<Button
					variant={"link"}
					className="text-white font-semibold"
				>
					<Link href="/upload">Send</Link>
				</Button>
				<Button
					variant={"link"}
					className="text-white font-semibold"
				>
					<Link href="/receive">Receive</Link>
				</Button>
				{/* <TooltipProvider>
					<Tooltip>
						<TooltipTrigger>
							<Link href={"/settings"}>
								<SettingIcon
									fill="white"
									width={30}
									height={30}
								/>
							</Link>
						</TooltipTrigger>
						<TooltipContent>Settings</TooltipContent>
					</Tooltip>
				</TooltipProvider> */}
			</div>
		</nav>
	);
}

export default Navbar;

export function SettingIcon(props: SVGProps<SVGSVGElement>) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			{...props}
			viewBox="0 0 24 24"
		>
			<path
				fill={props.fill}
				d="m10.135 21l-.362-2.892q-.479-.145-1.035-.454t-.948-.664l-2.667 1.135l-1.865-3.25l2.305-1.738q-.044-.272-.073-.56t-.028-.558q0-.252.028-.53t.073-.626L3.258 9.125l1.865-3.212L7.771 7.03q.448-.373.97-.673t1.013-.464L10.134 3h3.731l.362 2.912q.575.201 1.016.463t.909.654l2.725-1.116l1.865 3.212l-2.382 1.796q.082.31.092.568t.01.511q0 .233-.02.491q-.019.259-.088.626l2.344 1.758l-1.865 3.25l-2.681-1.154q-.467.392-.94.673q-.474.281-.985.444L13.865 21zM11 20h1.956l.369-2.708q.756-.2 1.36-.549t1.232-.956l2.495 1.063l.994-1.7l-2.189-1.644q.125-.427.166-.786t.04-.72q0-.38-.04-.72t-.166-.747l2.227-1.683l-.994-1.7l-2.552 1.07q-.454-.499-1.193-.934t-1.4-.578L13 4h-1.994l-.312 2.688q-.756.162-1.39.52t-1.26.986L5.55 7.15l-.994 1.7l2.169 1.62q-.125.336-.175.73t-.05.82q0 .38.05.755t.156.73l-2.15 1.645l.994 1.7l2.475-1.05q.588.594 1.222.953t1.428.559zm.973-5.5q1.046 0 1.773-.727T14.473 12t-.727-1.773t-1.773-.727q-1.052 0-1.776.727T9.473 12t.724 1.773t1.776.727M12 12"
			></path>
		</svg>
	);
}
