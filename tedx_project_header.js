    class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {

        this.innerHTML = `
        <style>
            .header {
                background-color: #000000;
                position: fixed;
                width: 100%;
                z-index: 3;
                font-family: "inter";
                text-transform: uppercase;
            }
            .header ul{
                margin: 0;
                padding: 0;
                list-style: none;
                overflow: hidden;
            }
            .header li a{
                display: block;
                padding: 20px 20px;
                text-decoration: none;

            }
            .header li a:hover,
            .header.menu-btn :hover{
                color: #ff2b06;
            }
            .header .logo{
                display: block;
                float: left;
                font-size: 1rem;
                padding: 1rem;
                text-decoration: none;
            }
            .header .menu{
                clear: both; 
                // document flow, floating elements
                font-size: 0.9rem;
                max-height: 0;
                transition: max-height 0.2s ease-out;
                text-align: center;
            }
            .header .menu-icon{
                cursor: pointer;
                float:right;
                padding: 2.5vh 3vw;
                position: relative;
                user-select: none;

            }
            .header .menu-icon .navicon{
                background-color: #ffffff;
                display: block;
                height: 3px;
                position: relative;
                transition: background-color 0.2 ease-out;
                width: 30px;
            }
            .header .menu-icon .navicon:before,
            .header .menu-icon .navicon:after{
                background-color: #ffffff;
                content: "";
                display: block;
                height: 100%;
                position: absolute;
                transition: all 0.2s ease-out;
                width: 100%;
            }
            .header .menu-icon .navicon:before{
                top: 1vh;

            }
            .header .menu-icon .navicon:after{
                top:-1vh;
            }
            .header .menu-btn{
                display:none;
            }
            .header .menu-btn:checked~.menu{
                max-height: 100vh;
            }
            .header .menu-btn:checked~ .menu-icon .navicon{
                background: transparent;
            }
            .header .menu-btn:checked~ .menu-icon .navicon:before{
                transform: rotate(-45deg);
            }
            .header .menu-btn:checked~ .menu-icon .navicon:after{
                transform: rotate(45deg);
            }
            .header .menu-btn:checked~ .menu-icon .navicon:before,
            .header .menu-btn:checked~ .menu-icon .navicon:after{
                top:0vh;
            }
            @media(min-width:48em){
                .header li{
                    float:left;
                }
                .header li a{
                    padding: 20px 30px;
                }
                .header .menu{
                    clear:none;
                    float:right;
                    max-height:none;    
                }
                .header .menu-icon{
                    display:none;
                }

            }
            @media screen and (max-width: 768px){
                // .nav-links{
                //     display:block;
                // }
                .menu{
                    background-color: #000000;
                }
                .menu-icon{
                    display:block;
                }

            }
        </style>
        <Header class="header">
        <a href="tedx_project.html" class="logo"><img style="height: 1.3rem; width: auto; object-fit:cover;" src="logo.png" /></a>
        <input class="menu-btn" type="checkbox" id="menu-btn" />
        <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
        <ul class="menu">
        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSeAxQzyop6TeDiEvo3BiwAVWK9kJLmNSIgTzqEQHP2YH6fhzQ/viewform" target="_blank" style="color: #ff2b06; font-weight:bold;">REGISTER</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#speakers">speakers</a></li>
        <li><a href="team.html">team</a></li>
        <li><a href="#contact">contact us</a></li>
        </ul>
        </Header>
        `;

        const a = document.querySelector(".menu");
        a.addEventListener("click", () => document.querySelector(".menu-btn").checked = false)
    }
}
customElements.define("ted-header", Header);
// till here