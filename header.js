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
               <li><a class="link link-ltr" href="https://www.instagram.com/honeybunnyink/" target="blank"><img src="img/ico/instagram.png"/></a></li>
               <li><a class="link link-ltr" href="index.html"><img src="img/ico/tiktok.png"/></a></li>
               <li><a class="link link-ltr" id="share" href="javascript:void(0)" onClick="shareFunction();">Share</a></li>
           </ul>
           		<li>
                <div class="dropdown">
			        <div id="myDropdown" class="dropdown-content">
			        <a href="#home"><img src="img/ico/facebook.png"/>Share to Facebook</a>
			        <a href="#about"><img src="img/ico/twitter.png"/>Share to Twitter</a>
			        <a href="#contact"><img src="img/ico/pinterest.png"/>Post to Pinterest</a>
			    </div>  
                </div>  
                </li>  
        </div>
     </div>`;

    }
}

customElements.define("header-component", Header);