import React from "react";

import { Full } from "./Full";
import { Quick } from "./Quick";

export interface MyContactsProps
	extends React.HTMLAttributes<HTMLUListElement> {}

export const MyContacts = { Full, Quick };
