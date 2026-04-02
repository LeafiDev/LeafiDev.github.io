class RawMouse {
	constructor(runtime) {
		this.runtime = runtime;
		this._mouseX = 0;
		this._mouseY = 0;
		this._initMouseListener();
	}

	_initMouseListener() {
		if (typeof window !== 'undefined') {
			window.addEventListener('mousemove', (event) => {
				this._mouseX = event.clientX;
				this._mouseY = event.clientY;
			});
		}
	}

	getInfo() {
		return {
			id: 'rawMouse',
			name: 'Raw Mouse',
			color1: '#00cc00',
			color2: '#00aa00',
			color3: '#008800',
			blocks: [
				{
					opcode: 'mouseX',
					blockType: Scratch.BlockType.REPORTER,
					text: 'viewport mouse x'
				},
				{
					opcode: 'mouseY',
					blockType: Scratch.BlockType.REPORTER,
					text: 'viewport mouse y'
				}
			]
		};
	}

	mouseX() {
		return this._mouseX;
	}

	mouseY() {
		return this._mouseY;
	}
}

Scratch.extensions.register(new RawMouse());
