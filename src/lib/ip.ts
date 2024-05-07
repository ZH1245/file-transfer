"use server";
import { networkInterfaces } from "os";

export async function getMyIP() {
	const ip = await networkInterfaces()["en0"]?.find((network) => {
		return network.family === "IPv4";
	});
	return ip?.address;
}
