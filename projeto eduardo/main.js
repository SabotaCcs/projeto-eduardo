function tocasomPom (idElelementoAudio){
    document.querySelector(idElelementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla'); 


for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contadoe];
    const instrumento = tacla.classList[1];
    const idAudio = '#som_${instrumento}';

    tecla.onclick = function (evento) {
        tocasomPom(idAudio);
    }

    tecla.onkeydown = function (evento){

        console.log(evento.code === 'Space')

        if (evento.code === 'Space') {
            tecla.classList.add('ativa');
        }

        }

        tecla.onkeyuo = function () {
            tecla.classList.remove('ativa');
        }
}