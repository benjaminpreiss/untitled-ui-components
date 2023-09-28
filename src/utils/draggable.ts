export function draggable(node: HTMLElement) {
	let isDown: boolean = false;
	let startX: number;
	let scrollLeft: number;

	function hasNonDraggableClass(target: HTMLElement | null): boolean {
		if (!target) return false;
		if (target.classList.contains('non-draggable')) return true;
		return hasNonDraggableClass(target.parentElement);
	}
	// triggered when the user clicks with the mouse
	function handleMousedown(e: MouseEvent) {
		// Check if the event's target or its parents have the "non-draggable" class
		if (hasNonDraggableClass(e.target as HTMLElement)) return;

		isDown = true;
		startX = e.pageX - node.offsetLeft;
		scrollLeft = node.scrollLeft;
	}

	// triggered on mouseUp and mouseLeave
	function releaseMouse() {
		isDown = false;
	}
	// triggered when the user moves with the mouse
	function handleMousemove(e: MouseEvent) {
		if (!isDown) return;
		e.preventDefault();
		const x = e.pageX - node.offsetLeft;
		const walk = (x - startX) * 3; // Adjust this number value to modify the drag speed
		node.scrollLeft = scrollLeft - walk;
	}

	node.addEventListener('mousedown', handleMousedown);
	node.addEventListener('mouseleave', releaseMouse);
	node.addEventListener('mouseup', releaseMouse);
	node.addEventListener('mousemove', handleMousemove);

	return {
		destroy() {
			node.removeEventListener('mousedown', handleMousedown);
			node.removeEventListener('mouseleave', releaseMouse);
			node.removeEventListener('mouseup', releaseMouse);
			node.removeEventListener('mousemove', handleMousemove);
		}
	};
}
