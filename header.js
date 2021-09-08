class Header extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {

        this.innerHTML = `
        <div class="navbar-left" id="myNav">
               <a href="index.html" >Home</a>
               <a href="work.html">Work</a>
               <a href="contact.html">Contact</a>
               <a href="https://www.instagram.com/honeybunnyink/" target="blank"><img src="img/ico/instagram.png"/></a>
               <a href="https://www.tiktok.com/@honeybunnyink" target="blank"><img src="img/ico/tiktok.png"/></a>
               <a id="share" href="javascript:void(0)" onClick="shareFunction();">Share</a>
               <a href="javascript:void(0);" class="icon" onclick="theFunction()">
                <i class="fa fa-bars"></i></li>
           	
                <div class="dropdown">
			        <div id="myDropdown" class="dropdown-content">
                    <a href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Falexh893.github.io%2FaPortfolio%2F&quote=Ash%20Huppert's%20Portfolio" target="_blank" title="Post to Facebook"><img src="img/ico/facebook.png" onclick/>Share to Facebook</a>
			        <a href="https://twitter.com/intent/tweet?source=https%3A%2F%2Falexh893.github.io%2FaPortfolio%2Findex.html&text=:%20https%3A%2F%2Falexh893.github.io%2FaPortfolio%2Findex.html" target="_blank" title="Tweet"><img src="img/ico/twitter.png"/>Share to Twitter</a>
			        <a href="http://pinterest.com/pin/create/button/?url=https%3A%2F%2Falexh893.github.io%2FaPortfolio%2Findex.html&description=" target="_blank" title="Pin it"><img src="img/ico/pinterest.png"/>Post to Pinterest</a>
			    </div>  
                </div>  
            </div>`;

    }
}

customElements.define("header-component", Header);