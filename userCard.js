class UserCard extends HTMLElement {
    constructor() {
        super(); // call the HTMLElement class we are extending
        this.innerHTML = 'User Name'; 
    }
}

window.customElements.define('user-card', UserCard);