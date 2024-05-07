import Link from "next/link";
import React from "react";

function HomePage() {
	return (
		<div className="font-semibold space-y-3">
			<h2 className="text-2xl">Notes:</h2>
			<p>
				To start Sending, please navigate to{" "}
				<Link
					href="/upload"
					className="underline"
				>
					Upload
				</Link>
			</p>
			<p>
				To Receive, please navigate to{" "}
				<Link
					href="/receive"
					className="underline"
				>
					Receive
				</Link>{" "}
				and follow the steps
			</p>
		</div>
	);
}

export default HomePage;
