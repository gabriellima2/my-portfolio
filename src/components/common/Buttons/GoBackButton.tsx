import { useRouter } from "next/navigation";
import { ArrowLeft } from "phosphor-react";

export const GoBackButton = () => {
	const { back } = useRouter();
	return (
		<button
			type="button"
			title="Voltar"
			onClick={back}
			className="center--row gap-4 text-default font-medium text-heading transition-opacity hover:opacity-75 focus:opacity-75 dark:text-heading-dark"
		>
			<i>
				<ArrowLeft size={20} />
			</i>
			Voltar
		</button>
	);
};
