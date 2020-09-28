document.querySelector('.time');

function timer(){

 const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();

    time.textcontent = `${h} : ${m} : ${s}`;


}

const startFunc =() =>{
    timer();
    setInterval(timer, 1000);//milli second 타임이기 때문
    const alertBtn=document.querySelector('alert-btn');
    alertBtn.addEventListener('click', () => {
        alert('You clicked a button!');
    })
    const createBtn = document.getElementById('create-btn');
    //const buttonBox = document.querySelector('button-box');
    const inputText = document.getElementsByTagName('input')[0];
    





    createBtn.addEventListener('click', () => {
        const buttonBox = createBtn.parentElement;
        const newPTag =document.createElement('p');
        newPTag.textcontent = (inputText.value) ? inputText.value : `Hi! i'm a new <p> tag.`
        inputText.value='';
        buttonBox.appendChild(newPTag);
    })
    const pic =document.querySelector('.pic');
    pic.addEventListener('dbclick', () => {
        window.open('popup.html', '팝업창',
        'width=300,  height=300, fullscreen=no, location=no');
    
    });

}



window.onload = startFunc;
