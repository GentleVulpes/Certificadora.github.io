// Referência ao botão
const backToTopButton = document.getElementById('back-to-top');

// Mostrar/ocultar botão com base na rolagem
window.onscroll = function () {
    if (document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Scroll para o topo ao clicar no botão
backToTopButton.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

const answerButton = document.getElementsByClassName('answer-button');
console.log(answerButton);

for(let i = 0; i < answerButton.length; i++) {
    answerButton[i].addEventListener('click', () => {
        console.log('innerhtml: ', answerButton[i].innerHTML);
       
        const code = answerButton[i].nextElementSibling.querySelector('code');
        console.log('code:', code);
        
        if(answerButton[i].innerHTML == '+ Mostrar Resposta') {
            console.log('code display: ', code.style.display)
            code.style.display = 'block';
            answerButton[i].innerHTML = '- Esconder Resposta';
        }
        else {
            code.style.display = 'none';
            answerButton[i].innerHTML = '+ Mostrar Resposta';
        }
    });
}

