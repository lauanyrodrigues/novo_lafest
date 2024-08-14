// custom-image.js

class CustomImage extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({ mode: 'open' });

        const img = document.createElement('img');
        img.src = this.getAttribute('src') || '';
        img.alt = this.getAttribute('alt') || '';
        img.style.width = this.getAttribute('width') || '100%';
        img.style.height = this.getAttribute('height') || 'auto';
        img.style.border = this.getAttribute('border') || 'none';

        shadow.appendChild(img);
    }

    static get observedAttributes() {
        return ['src', 'alt', 'width', 'height', 'border'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this.shadowRoot.querySelector('img').setAttribute(name, newValue);
        }
    }
}

customElements.define('custom-image', CustomImage);
