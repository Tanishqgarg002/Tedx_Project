
class Footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = `
        <style>
        #contact{
            width:inherit;
            background-color:#181717;
            display:flex;
            flex-direction:row;
            align-items:center;
            justify-content:center;
            flex-wrap:wrap;
        }
        .footer-content{
            max-width:45 vw;
            border-left: 1px solid #e5dbdb;
            margin: 3vh 0 3vh 5vw;
            padding: 2vh 0 2vh 5vw;
            box-sizing: border-box;
            font-size:0.9rem;
            display:flex;
            flex-direction:column;
        }
        .primary-contacts{
            line-height:2rem;
            margin-bottom:2vh;
        }
        .primary-contacts>a{
            text-decoration:none;
            color:#eeeeee;
        }
        .primary-contacts>a:hover{
            color:#ff2b06;
        }
        .primary-contacts>a>i{
            margin-right:0.5rem;
        }
        .sec-icons{
            margin-left:0.1rem;
            text-decoration:none;
            line-height:2rem;
        }
        .sec-icons:hover{
            color:#ff2b06;
        }
        @media screen and(max-width:768px)
        {
            #contact{
                padding-top: 2vh;

            }
            .footer-content{
                max-width:80vw;
                border-left:0;
                margin:0;
                padding:1rem;
                align-items:center;
            }
            .footer-content>p{
                text-align:center;
            }
            .sec-icons{
                font-size:1.6rem;
            }
        }
        </style>
        <footer id="contact">
        <a href="tedx_project.html" class="logo"><img style="height:3rem; width:auto; object-fit:cover; padding:0.3rem" src="logo.png"/></a>
        <div class="footer-content">
        <p>This independent TEDx event is operated under license from TED.</p></br>
        <div class="primary-contacts">
        
        <a href="tel:+919983771664"><i class="fa-solid fa-phone fa-xl"></i>+91 99837 71664</a><br>
        <a href="mailto:tedxnitkkr23@gmail.com"><i class="fa-solid fa-envelope fa-xl"></i>tedxnitkkr23@gmail.com</a><br>
        <a href="https://goo.gl/maps/PEBp1YK4WPFyA8b68"><i class="fa-solid fa-location-dot fa-xl"></i> NIT Kurukshetra</a>
        </div>
        <div class="secondary-contacts">
        Connect with us:
        <a href="https://www.instagram.com/tedx_nitkkr/"><span><i class="fa-brands fa-instagram fa-xl sec-icons"></i></span></a>
        <a href="https://www.linkedin.com/company/88053330/"><i class="fa-brands fa-linkedin fa-xl sec-icons"></i></a>
        <a href="https://twitter.com/tedxnitkkr"><i class="fa-brands fa-twitter fa-xl sec-icons"></i></a>
        </div>
        </div>
        </footer>
        `
    };



}
customElements.define('ted-footer', Footer);
// till here
