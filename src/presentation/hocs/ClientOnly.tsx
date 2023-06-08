import React, { type ComponentType, useEffect, useState } from "react";

export function ClientOnly<P extends object>(
	Component: ComponentType<P>,
	Skeleton?: ComponentType
) {
	return function HighOrder(props: P) {
		const [hasMounted, setHasMounted] = useState(false);
		useEffect(() => setHasMounted(true), []);
		if (!hasMounted) return Skeleton ? <Skeleton /> : null;
		return <Component {...props} />;
	};
}
