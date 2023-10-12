import { SessionStorageAdapter } from "@/core/infrastructure/adapters";

export const makeSessionStorage = () => new SessionStorageAdapter();
