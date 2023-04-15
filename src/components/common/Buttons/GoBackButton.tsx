import { useRouter } from "next/navigation";
import { ArrowLeft } from "phosphor-react";

export const GoBackButton = () => {
	const { back } = useRouter();
	return (
		<button type="button" title="Voltar" onClick={back}>
			<i>
				<ArrowLeft />
			</i>
			Voltar
		</button>
	);
};
