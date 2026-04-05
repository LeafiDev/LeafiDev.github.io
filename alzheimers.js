say = ["Uh.", "What does that mean?", "What do I do?", "I don't understand.", "Can you explain that?", "I don't remember what I do."]

class Alzhiemers {
  getInfo() {
    return {
      id: 'Alzhiemers',
      name: 'Alzhiemers',
      color1: '#ffbd72', // pure red
      color2: '#ff9500', // pure green
      color3: '#ff7300', // pure blue

      blocks: [
        {
          opcode: 'uh',
          blockType: Scratch.BlockType.REPORTER,
          text: 'Reporter'
        },
      ]
    };
  }

  uh() {
    return say[Math.floor(Math.random() * say.length)];
  }
}

Scratch.extensions.register(new Alzhiemers());