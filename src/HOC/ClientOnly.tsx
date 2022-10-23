import React, { useEffect, useState } from "react";

import type { Component } from "../types";

// Renderizar componente somente no Client
export function ClientOnly<P extends object>(Component: Component) {
	return function HighOrder(props: P) {
		const [hasMounted, setHasMounted] = useState(false);

		useEffect(() => setHasMounted(true), []);

		if (!hasMounted) return null;

		return <Component {...props} />;
	};
}
