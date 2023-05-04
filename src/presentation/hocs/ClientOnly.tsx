import React, { type ComponentType, useEffect, useState } from "react";

export function ClientOnly<P extends object>(Component: ComponentType<P>) {
	return function HighOrder(props: P) {
		const [hasMounted, setHasMounted] = useState(false);
		useEffect(() => setHasMounted(true), []);
		if (!hasMounted) return null;
		return <Component {...props} />;
	};
}
