(function(Scratch) {
    'use strict';
  
    class intersection {
      getInfo () {
        return {
          id: 'intersection',
          name: 'intersection',
          blocks: [
            {
              opcode: 'ix',
              blockType: Scratch.BlockType.REPORTER,
              text: 'intersection x [X1][Y1],[X2][Y2],[X3][Y3],[X4][Y4]',
              arguments: {
                X1: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: '0'
                },
                Y1: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: '0'
                },
                X2: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: '0'
                },
                Y2: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: '0'
                },
                X3: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: '0'
                },
                Y3: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: '0'
                },
                X4: {
                  type: Scratch.ArgumentType.NUMBER,
                  defaultValue: '0'
                },
                Y4: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: '0'
                }
              },
              
            },
            
            {
                opcode: 'iy',
                blockType: Scratch.BlockType.REPORTER,
                text: 'intersection y [X1][Y1],[X2][Y2],[X3][Y3],[X4][Y4]',
                arguments: {
                  X1: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: '0'
                  },
                  Y1: {
                      type: Scratch.ArgumentType.NUMBER,
                      defaultValue: '0'
                  },
                  X2: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: '0'
                  },
                  Y2: {
                      type: Scratch.ArgumentType.NUMBER,
                      defaultValue: '0'
                  },
                  X3: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: '0'
                  },
                  Y3: {
                      type: Scratch.ArgumentType.NUMBER,
                      defaultValue: '0'
                  },
                  X4: {
                    type: Scratch.ArgumentType.NUMBER,
                    defaultValue: '0'
                  },
                  Y4: {
                      type: Scratch.ArgumentType.NUMBER,
                      defaultValue: '0'
                  }
                },
                
              }
          ]
        };
      }
  
      ix (args) {
        
        var m = (args.Y2 - args.Y1) / (args.X2 - args.X1);
        var m1 = (args.Y4 - args.Y3) / (args.X4 -args.X3);
        var b = args.Y1 - m * args.X1;
        var b1 = args.Y3 - m1 * args.X3;
        var x = (b1 - b) / (m - m1);
        var y = m * x + b;
        return x;

      }
      ix (args) {
        
        var m = (args.Y2 - args.Y1) / (args.X2 - args.X1);
        var m1 = (args.Y4 - args.Y3) / (args.X4 -args.X3);
        var b = args.Y1 - m * args.X1;
        var b1 = args.Y3 - m1 * args.X3;
        var x = (b1 - b) / (m - m1);
        var y = m * x + b;
        return y;

      }
    }
  
    Scratch.extensions.register(new intersection());
  })(Scratch);