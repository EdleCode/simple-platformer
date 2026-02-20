export default class Block {
    constructor(type) {
        this.type = type;
        this._def = null;
    }

    build(definitions) {
        if (this._def) return this;
        const def = definitions[this.type];
        if (!def) {
            console.warn(`Block: unknown type "${this.type}"`);
            return this;
        }
        this._def = def;
        this.color = def.color;
        
        // todo: other props
        
        return this;
    }

    get isBuilt() {
        return this._def !== null;
    }
    
    render(ctx, x, y, tileSize) {
      if (!this.color) return;
      ctx.fillStyle = this.color;
      ctx.fillRect(x, y, tileSize, tileSize);
    }
}
