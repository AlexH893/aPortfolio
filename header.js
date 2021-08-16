class Header extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {

        this.innerHTML = `
        <div class="navbar-left">
           <ul class="navList">
               <li><a class="link link-ltr" href="index.html" >Home</a></li>
               <li><a class="link link-ltr" href="index.html">Work</a></li>
               <li><a class="link link-ltr" href="index.html">Contact</a></li>
               <li><a class="link link-ltr" href="index.html"><img src="img/ico/instagram.png"/></a></li>
               <li><a class="link link-ltr" href="index.html"><img src="img/ico/tiktok.png"/></a></li>
               <li><a class="link link-ltr" href="index.html">Share</a></li>




                <!-- <li><a class="link link-ltr" href="projects.html">Projects</a></li> -->

           </ul>
        </div>
     </div>`;

    }
}

customElements.define("header-component", Header);