export function getFirstThreeWords(text) {
	const words = text?.split(" ");
	const firstThreeWords = words?.slice(0, 3);
	return firstThreeWords?.join(" ");
}
