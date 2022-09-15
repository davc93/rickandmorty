import './index.css'

function c(element:string){

    return document.createElement(element);
}
function removeElement(element:string){
    const elementSelected = document.querySelector(element);
    elementSelected?.classList.add('hidden');
    setTimeout(()=>{
        elementSelected?.remove()
    },3000);

}


export function Modal(){

    const modal = c('div');
    modal.id = 'modal';
    modal.classList.add('modal')
    const cross = `<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.41406 6.58594L6.58594 9.41406L21.1719 24L6.58594 38.5859L9.41406 41.4141L24 26.8281L38.5859 41.4141L41.4141 38.5859L26.8281 24L41.4141 9.41406L38.5859 6.58594L24 21.1719L9.41406 6.58594Z" fill="black"/>
    </svg>`
    const crossContainer = c('div');
    crossContainer.classList.add('modal__close')
    crossContainer.id = 'cross'
    crossContainer.addEventListener('click',()=>{
        removeElement('#modal')
    })
    crossContainer.innerHTML = cross
    const modal__dialog = c('div');
    modal__dialog.classList.add('modal__dialog')
    modal__dialog.append(crossContainer);
    modal.append(modal__dialog);
     return modal;
    
}