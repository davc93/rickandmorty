
import './index.scss';
function c(element:string){
    return document.createElement(element);
}

export function DesktopMenu(){
    const desktopMenu = c('div');
    desktopMenu.classList.add('menu--desktop','primary-navigation');
    const logo = c('img');
    logo.classList.add('desktop-logo');
    const logoContainer = c('div');
    logoContainer.classList.add('desktop-logo--container')
    logo.setAttribute('src','');
    logo.setAttribute('alt','');
    logoContainer.append(logo);

    const ul = c('ul');
    
    const route = [

        {
            name: 'About me',
            url:'/',
            routes: [
            ]
        },
        {
            name: 'Projects',
            url:'https://ghost-5z2p.onrender.com/',
            routes: [
            ]
        },        {
            name: 'Contact',
            url:'/contact',
            routes: [
            ]
        }
    ]

    route.forEach((route)=>{
        if(route.routes.length >0){
            const liFatter = c('li');
            const aFatter = c('a');
            aFatter.setAttribute('href','#');
            aFatter.textContent = route.name;
            liFatter.append(aFatter);
            const dropdown = c('ul');
            dropdown.classList.add('dropdown');
        
            route.routes.forEach((children:any)=>{
                const li = c('li');
                const a = c('a');
                a.setAttribute('href',children.url);
                a.textContent = children.name;
                li.append(a);
                dropdown.append(li);
            })
            liFatter.append(dropdown);
            ul.append(liFatter);

        } else {
            const li = c('li');
            const a = c('a');
            a.setAttribute('href',route.url)
            a.textContent = route.name;
            li.append(a);
            ul.append(li);
        }
    })

    desktopMenu.append(logoContainer,ul);

    return(desktopMenu);

}