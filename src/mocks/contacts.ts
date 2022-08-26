import { BsGithub, BsLinkedin } from "react-icons/bs";

const socialNetworks = [
	{
		name: "github",
		value: "",
		icon: BsGithub,
	},
	{
		name: "linkedin",
		value: "",
		icon: BsLinkedin,
	},
];

const all = [...socialNetworks, {}];

export const contacts = { socialNetworks, all };
