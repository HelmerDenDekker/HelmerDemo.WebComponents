const template = document.createElement('template');
template.innerHTML = `
<style>
    h3 {
        color: coral;
    }
</style>
<div class="user-card">
    <h3></h3>
</div>
`; 

class UserCard extends HTMLElement {
    constructor() {
        super(); // call the HTMLElement class we are extending

        this.attachShadow({mode: 'open'}); // Add shadow DOM

        this.shadowRoot.appendChild(template.content.cloneNode(true)); // use the shadow root, and refer to the template.
        
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
    }
}

window.customElements.define('user-card', UserCard);