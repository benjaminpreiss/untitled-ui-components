import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { TailwindElement } from '../shared/tailwind.element.js';
import style from '/src/app.css?inline';

@customElement('test-component')
export class TestComponent extends TailwindElement(style) {
	@property({ type: String }) name = 'test';
	@property({ type: Boolean }) showMessage = false; // track whether to show the message

	// click handler
	handleClick() {
		this.showMessage = true;
		setTimeout(() => {
			this.showMessage = false;
		}, 1000); // hide the message after 1 second
	}

	render() {
		return html`
			${this.showMessage
				? html`<div
						class="bg-untld-teal-700 rounded-full p-4 right-1/2 translate-x-1/2 absolute top-0 text-untld-white untld-text-lg"
				  >
						Hi, you clicked the button!
				  </div>`
				: ''}

			<div class="w-full h-full flex items-center justify-center min-h-[100vh]">
				<button
					@click=${this.handleClick}
					class="p-12 flex flex-col justify-center items-center rounded-full border-[1px] bg-untld-yellow-400 text-untld-white untld-display-2xl"
				>
					<div class="m-0">Hello ${this.name}!</div>
					<div class="untld-text-sm lead-none">Click me</div>
				</button>
			</div>
		`;
	}
}
