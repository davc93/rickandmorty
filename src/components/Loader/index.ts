

import './index.css';
function c(element:string){
    return document.createElement(element);
}
export const Loader = () => {
    const loader = c('div');
    loader.classList.add('loader');
    const div1 = c('div');
    const div2 = c('div');
    const div3 = c('div');
    loader.append(div1,div2,div3);
    return loader
}
