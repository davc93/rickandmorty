
import './index.css';
function c(element:string){
    return document.createElement(element);
}


const items = [
    {
        name:'About me',
        url:'/'
    },
    {
        name:'Projects',
        url:'https://ghost-5z2p.onrender.com/'
    },
    {
        name:'Contact',
        url:'/contact'
    },
]

export function MobileMenu(){

    const mobileMenu = c('div');
    mobileMenu.classList.add('menu--mobile');
    const navContainer = c('div');
    navContainer.classList.add('container','nav-container');
    const input = c('input');
    input.classList.add('checkbox');
    input.setAttribute('type','checkbox');
    const hamburgerLines = c('div');
    hamburgerLines.classList.add('hamburger-lines');
    const line1 = c('span');
    line1.classList.add('line','line1');
    const line2 = c('span');
    line2.classList.add('line','line2');
    const line3 = c('span');
    line3.classList.add('line','line3');


    const logo = c('div');
    logo.classList.add('logo');
    const logoImg = c('img');
    logoImg.setAttribute('src','');
    logoImg.setAttribute('alt','');
    logo.append(logoImg)

    const menuItems = c('div');
    menuItems.classList.add('menu-items');

    const itemsNodes: HTMLElement[] = []

    mobileMenu.append(navContainer);
    navContainer.append(input,hamburgerLines,logo,menuItems);
    hamburgerLines.append(line1,line2,line3);

    items.forEach((item)=>{
        const li = c('li');
        const a = c('a');
        a.setAttribute('href',item.url);
        a.textContent = item.name;
        li.append(a);
        itemsNodes.push(li);
    })
    menuItems.append(...itemsNodes)

    return mobileMenu


}