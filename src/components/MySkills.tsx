import type { Skills } from "../types";

export const MySkills = (props: Skills) => (
	<ul>
		{props.skills.map((skill, index) => (
			<li key={index}>- {skill}</li>
		))}
	</ul>
);
