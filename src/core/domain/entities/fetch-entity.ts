export interface FetchEntity<D> {
	data: D | null;
	error?: string | null;
}
