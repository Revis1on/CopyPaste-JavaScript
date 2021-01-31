const text = document.querySelector('.content h2');
const popup = document.querySelector('.popup');


text.addEventListener('click', () =>{
    popup.classList.add('active');
    copyToClipboard();
});

popup.addEventListener('animationend', ()=>{
    popup.classList.remove('active');
});

function copyToClipboard(){
    const textarea = document.createElement('textarea');
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'absolute';
    textarea.value = text.innerText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

