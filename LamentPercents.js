class LamentPercents {
  getInfo() {
    return {
      id: 'lamentpercents',
      name: 'Lament Percents',
      color1: '#FF6B6B',
      color2: '#FF5252',
      color3: '#C92A2A',
      blocks: [
        {
          opcode: 'addPercent',
          blockType: Scratch.BlockType.REPORTER,
          text: '[VALUE] + [PERCENT]%',
          arguments: {
            VALUE: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 100
            },
            PERCENT: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 10
            }
          }
        },
        {
          opcode: 'subtractPercent',
          blockType: Scratch.BlockType.REPORTER,
          text: '[VALUE] - [PERCENT]%',
          arguments: {
            VALUE: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 100
            },
            PERCENT: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 10
            }
          }
        },
        {
          opcode: 'percentOf',
          blockType: Scratch.BlockType.REPORTER,
          text: '[PERCENT]% of [VALUE]',
          arguments: {
            PERCENT: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 10
            },
            VALUE: {
              type: Scratch.ArgumentType.NUMBER,
              defaultValue: 100
            }
          }
        }
      ]
    };
  }

  addPercent(args) {
    const value = parseFloat(args.VALUE);
    const percent = parseFloat(args.PERCENT);
    return value + (value * percent / 100);
  }

  subtractPercent(args) {
    const value = parseFloat(args.VALUE);
    const percent = parseFloat(args.PERCENT);
    return value - (value * percent / 100);
  }

  percentOf(args) {
    const percent = parseFloat(args.PERCENT);
    const value = parseFloat(args.VALUE);
    return value * percent / 100;
  }
}

Scratch.extensions.register(new LamentPercents());