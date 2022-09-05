import React, { useEffect, useState } from "react";

type ComponentType<P = object> = React.ComponentType<P>;

// Renderizar componente somente no Client
export function ClientOnly<P extends object>(Component: ComponentType) {
	return function HighOrder(props: P) {
		const [hasMounted, setHasMounted] = useState(false);

		useEffect(() => setHasMounted(true), []);

		if (!hasMounted) return null;

		return <Component {...props} />;
	};
}
