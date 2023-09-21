import { LitElement, unsafeCSS } from 'lit';
import style from '/src/app.css?inline';

const tailwindElement = unsafeCSS(style);

export const TailwindElement = (style: unknown) =>
	class extends LitElement {
		static styles = [tailwindElement, unsafeCSS(style)];
	};
