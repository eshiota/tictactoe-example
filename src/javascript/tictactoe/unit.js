class Unit {
    constructor(options) {
        this.options = options;

        let node = document.createElement('button');

        node.classList.add('board-unit');
        node.setAttribute('type', 'button');
        node.setAttribute('data-x', this.options.x);
        node.setAttribute('data-y', this.options.y);

        this._node = node;
    }

    getNode() {
        return this._node;
    }

    setValue(value) {
        if (this._value) {
            return;
        }

        this._node.innerText = value === 1 ? 'x' : 'o';
        this._node.disabled = true;

        this._value = value;
    }
}

export default Unit;
