import type { Skills } from "../types";

interface MySkillProps extends Skills {}

export const MySkills = (props: MySkillProps) => (
	<ul>
		{props.skills.map((skill, index) => (
			<li key={index}>- {skill}</li>
		))}
	</ul>
);
