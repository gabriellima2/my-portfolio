export function changeDistanceToTopOfPage(distance: number) {
	document.body.scrollTop = distance;
	document.documentElement.scrollTop = distance;
}
