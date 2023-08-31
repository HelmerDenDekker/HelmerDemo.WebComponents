const template = document.createElement('template');
template.innerHTML = `
<style>
    .user-card {
        font-family: 'Arial', sans-serif;
        background: #f4f4f4;
        width: 500px;
        display: grid;
        grid-template-columns: 1fr 2fr;
        grid-gap: 10px;
        margin-bottom: 15px;
        border-bottom: darkorchid 5px solid;
    }
    .user-card img {
        width: 100%;
    }
    .user-card button {
        cursor: pointer;
        background: darkorchid;
        color: #fff;
        border: 0;
        border-radius: 5px;
        padding: 5px 10px;
    }
    h3 {
        color: #000;
    }
</style>
<div class="user-card">
    <img />    
    <div>    
        <h3></h3>
        <div class="info">
            <p> <slot name="email"/> </p>
            <p> <slot name="phone"/> </p>
        </div>
        <button id="toggle-info">Hide info</button>
    </div>
</div>
`; 

class UserCard extends HTMLElement {
    constructor() {
        super(); // call the HTMLElement class we are extending

        this.showInfo = true;

        this.attachShadow({mode: 'open'}); // Add shadow DOM

        this.shadowRoot.appendChild(template.content.cloneNode(true)); // use the shadow root, and refer to the template.
        
        this.shadowRoot.querySelector('h3').innerText = this.getAttribute('name');
        this.shadowRoot.querySelector('img').src = this.getAttribute('avatar');   
    }

    toggleInfo(){
        this.showInfo = !this.showInfo;
        const info = this.shadowRoot.querySelector('.info');
        const toggleButton = this.shadowRoot.querySelector('#toggle-info');
        if(this.showInfo)
        {
            info.style.display = 'block';
            toggleButton.innerText = 'Hide details'
        }
        if(!this.showInfo)
        {
            info.style.display = 'none';
            toggleButton.innerText = 'Show details'
        }
    }

    connectedCallback(){
        this.shadowRoot.querySelector('#toggle-info').addEventListener('click', () => this.toggleInfo()); //Add the event to the shadow DOM with the connected callback.
    }

    disconnectedCallback(){
        this.shadowRoot.querySelector('#toggle-info').removeEventListener('click', () => this.toggleInfo()); //Remove the event from the shadow DOM with the connected callback.
    }
}

window.customElements.define('user-card', UserCard);