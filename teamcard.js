class TeamCard extends HTMLElement{
    constructor(){
        super();
    
    const shadow=this.attachShadow({mode:'open'});
    let style=document.createElement('style');

    style.textContent=`
    .member-wrapper{
        margin:2rem;
        text-align:center;
        box-sizing:border-box;
    }
    .member-img{
        margin:1rem;
        height:11rem;
        width:11rem;
        border-radius:11rem;
        object-fit:cover;
    }
    .member-name{
        font-size:1rem;
    }
    `;
    shadow.appendChild(style);
    const wrapper=document.createElement('div');
    wrapper.setAttribute('class','member-wrapper');

    const icon=document.createElement('img');
    icon.setAttribute('class','member-img');
    icon.src=this.getAttribute('memimg');

    const memName=document.createElement('div');
    memName.setAttribute('class','member-name');
    memName.textContent=this.getAttribute('memname');

    console.log(style.isConnected)
    shadow.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(memName);
}
}
customElements.define('team-card',TeamCard);
// till here