class TEMPLATE {
  getInfo() {
    return {
      id: 'Template',
      name: 'Template Extension',
      color1: '#91b8ff', // pure red
      color2: '#576c91', // pure green
      color3: '#2e394d', // pure blue

      blocks: [
      ]
    };
  }
}

Scratch.extensions.register(new TEMPLATE());