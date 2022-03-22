class customElement extends HTMLElement
{
    constructor()
    {
        super();
        this.innerHTML="Custom tag created and content is displayed";
    }
}
customElements.define('my-tag',customElement);