//fonte usada: https://www.w3schools.com/Jsref/prop_node_innertext.asp
var nome = document.getElementById('nome');
nome.innerHTML = "Nome: " + localStorage.getItem('name');

var data = document.getElementById('datanasc');
var datanasc = new Date(localStorage.getItem('data'));
var dia = parseInt(datanasc.getDate());
var mes = parseInt(datanasc.getMonth());
var ano = parseInt(datanasc.getFullYear());
data.innerHTML = "Data de Nascimento: " + dia + "/" + mes + "/" + ano;

var matricula = document.getElementById('matricula');
matricula.innerHTML = "Matricula: " + localStorage.getItem('matri');

var hoje = new Date();
var anoatual = parseInt(hoje.getFullYear());
var serie = document.getElementById('ano');
var anomatric = parseInt(localStorage.getItem('matri').substring(0, 4));
serie.innerHTML = "Ano: " + (anoatual - anomatric + 1) + "º";

var casa = parseInt(localStorage.getItem('casa'));
var logocasa = document.getElementById('logocasa');
var escritacasa = document.getElementById('casa');

var boasvindas = document.getElementById("fraseboasvindas");
var horario = localStorage.getItem('horario');
var horas = parseInt(horario.substring(0, 2));
var mins = parseInt(horario.substring(3, 5))
horario = (horas*60) + mins;
var mensagem;
if((horario>=0) && (horario<720)){
    mensagem = "Bom dia";
} else {
    if((horario>=720) && (horario<1080)){
        mensagem = "Boa tarde";
    } else {
        mensagem = "Boa noite";
    }
}

if(casa == 1){
    escritacasa.innerHTML = "Casa: Grifinória";
    logocasa.setAttribute('src', 'imgs/grifinoria.png');
    document.body.style.backgroundImage = "url('imgs/grifinoria.jpg')"
    boasvindas.innerHTML = mensagem + ", bruxo(a)! Vejo que é da casa Grifinória. Bem-vindo(a) à casa dos corajosos, dos destemidos e dos leais. Os grifinórios valorizam a bravura e a ousadia, e estão prontos para enfrentar qualquer desafio que o mundo mágico possa oferecer. Estamos ansiosos para ver suas conquistas e vitórias durante sua jornada em Hogwarts. Que seu tempo aqui seja cheio de aventuras emocionantes e amizades duradouras!";
} else {
    if(casa == 2){
        escritacasa.innerHTML = "Casa: Lufa-lufa";
        logocasa.setAttribute('src', 'imgs/lufalufa.png');
        document.body.style.backgroundImage = "url('imgs/lufalufa.jpg')"
        boasvindas.innerHTML = mensagem + ", bruxo(a)! Vejo que é da casa Lufa-Lufa. Bem-vindo(a) à casa da bondade, da lealdade e da paciência. Os lufa-lufanos são conhecidos por seu espírito solidário e pelo desejo de ajudar os outros. Nossa casa valoriza a amizade e a compaixão, e acreditamos que o mundo mágico é um lugar melhor quando nos apoiamos mutuamente. Que sua jornada em Hogwarts seja repleta de momentos acolhedores e amizades que durarão toda a vida!";
    } else {
        if(casa == 3){
            escritacasa.innerHTML = "Casa: Sonserina";
            logocasa.setAttribute('src', 'imgs/sonserina.png');
            document.body.style.backgroundImage = "url('imgs/sonserina.jpg')"
            boasvindas.innerHTML = mensagem + ", bruxo(a)! Vejo que é da casa Sonserina. Bem-vindo(a) à casa da ambição, astúcia e determinação. Os sonserinos sabem o que querem e farão o necessário para alcançar seus objetivos. Nossa casa valoriza a inteligência e a perspicácia, e acreditamos que o mundo mágico é cheio de oportunidades para aqueles que estão dispostos a agarrá-las. Que sua jornada em Hogwarts seja repleta de desafios intelectuais e realizações notáveis!";
        } else {
            escritacasa.innerHTML = "Casa: Corvinal";
            logocasa.setAttribute('src', 'imgs/corvinal.png');
            document.body.style.backgroundImage = "url('imgs/corvinal.jpg')"
            boasvindas.innerHTML = mensagem + ", bruxo(a)! Vejo que é da casa Corvinal. Bem-vindo(a) à casa dos sábios, dos curiosos e dos criativos. Os corvinais valorizam o conhecimento e a busca pela verdade, buscando constantemente aprender e explorar o desconhecido. Nossa casa preza pela inteligência e pela originalidade, e acreditamos que o mundo mágico oferece infinitas oportunidades para expandir nossos horizontes. Que sua jornada em Hogwarts seja repleta de descobertas fascinantes e momentos de profunda reflexão!";
        }
    }
}

var bio = document.getElementById('biografia');
bio.innerHTML = localStorage.getItem('bio');

var m1 = document.getElementById('feit');
var m2 = document.getElementById('tdcm');
var m3 = document.getElementById('poc');
var m4 = document.getElementById('dcadt');
var m5 = document.getElementById('herb');
var m6 = document.getElementById('transf');

var arraym = new Array();
arraym = [m1, m2, m3, m4, m5, m6];

var e1 = document.getElementById('f');
var e2 = document.getElementById('c');
var e3 = document.getElementById('p');
var e4 = document.getElementById('d');
var e5 = document.getElementById('h');
var e6 = document.getElementById('t');

var arraye = new Array();
arraye = [e1, e2, e3, e4, e5, e6];

var n1 = parseFloat(localStorage.getItem("1"));
var n2 = parseFloat(localStorage.getItem("2"));
var n3 = parseFloat(localStorage.getItem("3"));
var n4 = parseFloat(localStorage.getItem("4"));
var n5 = parseFloat(localStorage.getItem("5"));
var n6 = parseFloat(localStorage.getItem("6"));

var notas = new Array();
notas = [n1, n2, n3, n4, n5, n6];

for(var i = 0; i < 6; i++){
    arraym[i].innerHTML = arraym[i].innerText + " " + notas[i];
    if(notas[i]>=8){
        arraye[i].innerHTML = arraye[i].innerText + " Ótimo";
    } else {
        if(notas[i]>=7){
            arraye[i].innerHTML = arraye[i].innerText + " Excede Expectativas";
        } else {
            if(notas[i]>=5){
                arraye[i].innerHTML = arraye[i].innerText + " Aceitável";
            } else {
                if(notas[i]>=4){
                    arraye[i].innerHTML = arraye[i].innerText + " Passável";
                } else {
                    if(notas[i]>=2.5){
                        arraye[i].innerHTML = arraye[i].innerText + " Deplorável";
                    } else {
                        arraye[i].innerHTML = arraye[i].innerText + " Trasgo";
                    }
                }
            }
        }
    }
}

//aqui em diante
var l1img = document.getElementById('1lugar');
var l2img = document.getElementById('2lugar');
var l3img = document.getElementById('3lugar');
var l4img = document.getElementById('4lugar');

var p1 = document.getElementById('pontos1');
var p2 = document.getElementById('pontos2');
var p3 = document.getElementById('pontos3');
var p4 = document.getElementById('pontos4');

var pontocasa = parseInt(localStorage.getItem('pontos'))

//Utilizei esse site como ajuda para gerar os números dentro das condições: https://www.delftstack.com/pt/howto/javascript/javascript-random-integer/#google_vignette
var grif, luf, son, corv;
if(casa==1){
    grif = pontocasa;
    luf = parseInt(Math.random()*(600-300+1) + 300);
    son = parseInt(Math.random()*(600-300+1) + 300);
    corv = parseInt(Math.random()*(600-300+1) + 300);
} else {
    if(casa==2){
        grif = parseInt(Math.random()*(600-300+1) + 300);
        luf = pontocasa;
        son = parseInt(Math.random()*(600-300+1) + 300);
        corv = parseInt(Math.random()*(600-300+1) + 300);
    } else {
        if(casa==3){
            grif = parseInt(Math.random()*(600-300+1) + 300);
            luf = parseInt(Math.random()*(600-300+1) + 300);
            son = pontocasa;
            corv = parseInt(Math.random()*(600-300+1) + 300);
        } else {
            grif = parseInt(Math.random()*(600-300+1) + 300);
            luf = parseInt(Math.random()*(600-300+1) + 300);
            son = parseInt(Math.random()*(600-300+1) + 300);
            corv = pontocasa;
        }
    }
}

var placar = new Array();
placar = [grif, luf, son, corv];
var valor1 = 0;
var valor2 = 0;
var valor3 = 0;
var valor4 = 0;
var casa1 = 0;
var casa2 = 0;
var casa3 = 0;
var casa4 = 0;

for(var i = 0; i < 4; i++){
    if(placar[i] > valor1){
        valor1 = placar[i];
        casa1 = i;
    }
}
placar[casa1] = 0;

for(var i = 0; i < 4; i++){
    if(placar[i] > valor2){
        valor2 = placar[i];
        casa2 = i;
    }
}
placar[casa2] = 0;

for(var i = 0; i < 4; i++){
    if(placar[i] > valor3){
        valor3 = placar[i];
        casa3 = i;
    }
}
placar[casa3] = 0;

for(var i = 0; i < 4; i++){
    if(placar[i] > valor4){
        valor4 = placar[i];
        casa4 = i;
    }
}

p1.innerHTML = "pontos: " + valor1;
p2.innerHTML = "pontos: " + valor2;
p3.innerHTML = "pontos: " + valor3;
p4.innerHTML = "pontos: " + valor4;

if(casa1 == 0){
    l1img.setAttribute('src', "imgs/grifinoria.png");
} else {
    if(casa1 == 1){
        l1img.setAttribute('src', "imgs/lufalufa.png");
    } else {
        if(casa1 == 2){
            l1img.setAttribute('src', "imgs/sonserina.png");
        } else {
            l1img.setAttribute('src', "imgs/corvinal.png");
        }
    }
}

if(casa2 == 0){
    l2img.setAttribute('src', "imgs/grifinoria.png");
} else {
    if(casa2 == 1){
        l2img.setAttribute('src', "imgs/lufalufa.png");
    } else {
        if(casa2 == 2){
            l2img.setAttribute('src', "imgs/sonserina.png");
        } else {
            l2img.setAttribute('src', "imgs/corvinal.png");
        }
    }
}

if(casa3 == 0){
    l3img.setAttribute('src', "imgs/grifinoria.png");
} else {
    if(casa3 == 1){
        l3img.setAttribute('src', "imgs/lufalufa.png");
    } else {
        if(casa3 == 2){
            l3img.setAttribute('src', "imgs/sonserina.png");
        } else {
            l3img.setAttribute('src', "imgs/corvinal.png");
        }
    }
}

if(casa4 == 0){
    l4img.setAttribute('src', "imgs/grifinoria.png");
} else {
    if(casa4 == 1){
        l4img.setAttribute('src', "imgs/lufalufa.png");
    } else {
        if(casa4 == 2){
            l4img.setAttribute('src', "imgs/sonserina.png");
        } else {
            l4img.setAttribute('src', "imgs/corvinal.png");
        }
    }
}

