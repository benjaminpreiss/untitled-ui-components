export default function animationObserver(
	node: Element,
	params: { animation: string; threshold?: number }
) {
	// How to use within a component?
	// use:animationObserver={{
	// 	animation: 'animate-fadeInFromTop',
	// threshold: 0.01 (this is a optional prop)
	// }}
	// give the div with the animation opacity-0 (depending on your animation)

	const animation = params.animation || 'animate-fadeIn';
	const threshold = params.threshold || 0.1;
	const update = (entries: IntersectionObserverEntry[]) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add(animation); // Adds the animation class when in view
				observer.unobserve(entry.target);
			}
		});
	};

	const observer = new IntersectionObserver(update, { threshold: threshold });

	observer.observe(node);

	return {
		destroy() {
			observer.unobserve(node);
		}
	};
}
