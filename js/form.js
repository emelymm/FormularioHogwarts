var form = document.getElementById('form');
form.addEventListener('submit', validar);

var btenviar = document.getElementById('btenviar');
btenviar.addEventListener('click', validar);

function validar(a) { //variavel que recebe qual objeto que gerou o evento
    if ((valimatricula()==false) || (valinome()==false) || (valiemail()==false) || (valisenha()==false) || (validatanasc()==false) || (valihora()==false) || (valicasa()==false) || (valinotas()==false) || (valipontos()==false) || (valibio()==false)) {
        a.preventDefault(); //cancela a submissão do formulário
    }
}

function valimatricula() {
    var inmatricula = document.getElementById('matricula');
    var matricula = inmatricula.value;
    localStorage.setItem('matri', matricula);
    var avisomatricula = document.getElementById('avisomatricula');

    if (isNaN(matricula)) {
        inmatricula.classList.add('inval');
        inmatricula.classList.remove('vali');
        avisomatricula.innerHTML = "Matrícula inválida! A matrícula deve conter apenas números!"
        return false;
    } else {
        if (matricula.length !== 10) {
            inmatricula.classList.add('inval');
            inmatricula.classList.remove('vali');
            avisomatricula.innerHTML = "A matrícula deve conter 10 números!"
            return false;
        } else {
            //Hogwarts vai do primeiro ao sétimo ano, logo, os alunos tem que ter se matriculado de 2017 à 2023
            //OBS.: Cada ano que a pessoa for cursar ela faz a matrícula novamente e muda o ano, não como no IF que
            //continua o mesmo.
            var anoatual = new Date().getFullYear();
            var verifano = false;
            for (var i = 0; i < 7; i++) {
                if ((parseInt(matricula.substring(0, 4))) == (anoatual - i)) {
                    verifano = true;
                    break;
                }
            }

            if (verifano == false) {
                inmatricula.classList.add('inval');
                inmatricula.classList.remove('vali');
                avisomatricula.innerHTML = "Não tem como ser estudante de Hogwarts tendo se matriculado nesse ano!"
                return false;
            } else {
                inmatricula.classList.remove('inval');
                inmatricula.classList.add('vali');
                avisomatricula.innerHTML = " ";
                return true;
            }
        }
    }
}

function valinome() {
    var innome = document.getElementById('nome');
    var nome = innome.value;
    localStorage.setItem('name', nome);
    var avisonome = document.getElementById('avisonome');

    var alfabeto = "ABCEDFGHIJKLMNOPQRSTUVXWYZ abcdefghijklmnopqrstuvxwyzáàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ"; //String retirada da internet 
    if (nome == '') {
        innome.classList.add('inval');
        innome.classList.remove('vali');
        avisonome.innerHTML = 'Informe um nome válido!!';
        return false;
    } else {
        var checletras = true;
        for (var i = 0; i < nome.length; i++) {
            if (alfabeto.indexOf(nome.charAt(i)) == -1) {
                checletras = false;
            }
        }

        if (checletras == false) {
            innome.classList.add('inval');
            innome.classList.remove('vali');
            avisonome.innerHTML = "Um nome é composto apenas por letras, coloque seu nome corretamente!";
            return false;
        } else {
            innome.classList.remove('inval');
            innome.classList.add('vali');
            avisonome.innerHTML = " ";
            return true;
        }
    }
}

function valiemail() {
    var inemail = document.getElementById('email');
    var email = inemail.value;
    localStorage.setItem('email', email);
    var avisoemail = document.getElementById('avisoemail');
    if (email == "") {
        inemail.classList.add('inval');
        inemail.classList.remove('vali');
        avisoemail.innerHTML = "Informe um e-mail válido!";
        return false;
    } else {
        if (email.indexOf(" ") != -1) {
            inemail.classList.add('inval');
            inemail.classList.remove('vali');
            avisoemail.innerHTML = "Seu email não pode conter espaços em branco!";
            return false;
        } else {
            if (email.indexOf("@") == -1) {
                inemail.classList.add('inval');
                inemail.classList.remove('vali');
                avisoemail.innerHTML = "Seu email deve conter um @!";
                return false;
            } else {
                if ((email.indexOf("@") == 0) || (email.indexOf("@") == (email.length - 1))) {
                    inemail.classList.add('inval');
                    inemail.classList.remove('vali');
                    avisoemail.innerHTML = "Seu email deve contar um domínio após o @ e parte local antes!";
                    return false;
                } else {
                    inemail.classList.remove('inval');
                    inemail.classList.add('vali');
                    avisoemail.innerHTML = " ";
                    return true;
                }
            }
        }
    }
}

function valisenha() {
    var letrasmaiusc = "ABCEDFGHIJKLMNOPQRSTUVXWYZÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ"; //Strings retiradas da internet 
    var letrasminusc = "abcdefghijklmnopqrstuvxwyzáàâãéèêíïóôSõöúçñ";
    var caracteresespc = "!@#$%^&*()_+-=[]{}|\;:',./<>?`~";
    caracteresespc = caracteresespc + '"';

    var insenha = document.getElementById('senha');
    var senha = insenha.value;
    localStorage.setItem('senha', senha);
    var avisosenha = document.getElementById('avisosenha');

    if ((senha == "") || ((senha.length < 8) || (senha.length > 18))) {
        insenha.classList.add('inval');
        insenha.classList.remove('vali');
        avisosenha.innerHTML = "Senha inválida! Deve ter no mínimo 8 caracteres e no máximo 18";
        return false;
    } else {
        if (senha.indexOf(" ") != -1) {
            insenha.classList.add('inval');
            insenha.classList.remove('vali');
            avisosenha.innerHTML = "Sua senha não pode conter espaços!";
            return false;
        } else {
            var checmaius = false;
            var checminusc = false;
            for (var i = 0; i < senha.length; i++) {
                if (letrasmaiusc.indexOf(senha.charAt(i)) !== -1) {
                    checmaius = true;
                }
                if (letrasminusc.indexOf(senha.charAt(i)) !== -1) {
                    checminusc = true;
                }
            }
            if ((checmaius == false) || (checminusc == false)) {
                insenha.classList.add('inval');
                insenha.classList.remove('vali');
                avisosenha.innerHTML = "Sua senha deve conter caracteres maiúsculos e minúsculos!";
                return false;
            } else {
                var checnums = false;
                for (var i = 0; i < senha.length; i++) {
                    if ((isNaN(senha.charAt(i))) == false) {
                        checnums = true;
                    }
                }
                if (checnums == false) {
                    insenha.classList.add('inval');
                    insenha.classList.remove('vali');
                    avisosenha.innerHTML = "Sua senha deve conter números!";
                    return false;
                } else {
                    var checcaract = false;
                    for (var i = 0; i < senha.length; i++) {
                        if (caracteresespc.indexOf(senha.charAt(i)) !== -1) {
                            checcaract = true;
                        }
                    }
                    if (checcaract == false) {
                        insenha.classList.add('inval');
                        insenha.classList.remove('vali');
                        avisosenha.innerHTML = "Sua senha deve conter caracteres especiais!";
                        return false;
                    } else {
                        insenha.classList.remove('inval');
                        insenha.classList.add('vali');
                        avisosenha.innerHTML = " ";
                        return true;
                    }
                }
            }
        }
    }

}

function validatanasc() {
    var indata = document.getElementById('data');
    var data = indata.value;
    var avisodata = document.getElementById('avisodata');

    if ((data == "") || (data.length !== 10)) {
        indata.classList.add('inval');
        indata.classList.remove('vali');
        avisodata.innerHTML = "Coloque uma data válida!";
        return false;
    } else {
        if ((data.charAt(2) !== "/") || (data.charAt(5) !== "/")) {
            indata.classList.add('inval');
            indata.classList.remove('vali');
            avisodata.innerHTML = "Não esqueça das / na data e nos locais certos!";
            return false;
        } else {
            var datanums = data.substring(0, 2) + data.substring(3, 5) + data.substring(6, 10);
            if (isNaN(datanums) == true) {
                indata.classList.add('inval');
                indata.classList.remove('vali');
                avisodata.innerHTML = "Sua data deve conter apenas números nos locais certos!";
                return false;
            } else {
                var dia = parseInt(data.substring(0, 2));
                var mes = parseInt(data.substring(3, 5));
                var ano = parseInt(data.substring(6, 10));

                var anoatual = new Date().getFullYear();
                data = new Date(ano, mes - 1, dia);
                localStorage.setItem('data', data);

                if (((dia < 1) || (dia > 31)) || ((mes < 1) || (mes > 12))) {
                    indata.classList.add('inval');
                    indata.classList.remove('vali');
                    avisodata.innerHTML = "Um ano tem 12 meses e um mês pode chegar no máximo a ter 31 dias!";
                    return false;
                } else {
                    //Inventei uma lógica onde pode ocorrer de um aluno repetir de ano em Hogwarts, mas ele só pode estudar
                    //na escola até os 21 anos, ou seja, é possível que apenas pessoas de 11 a 21 anos estudem em Hogwarts
                    var dia = new Date();
                    var diferenca = anoatual - ano;
                    if ((diferenca < 11) || (diferenca > 21)) {
                        indata.classList.add('inval');
                        indata.classList.remove('vali');
                        avisodata.innerHTML = "Não é possível você ser estudante de Hogwarts com essa idade!";
                        return false;
                    } else {
                        indata.classList.remove('inval');
                        indata.classList.add('vali');
                        avisodata.innerHTML = " ";
                        return true;
                    }

                }
            }
        }
    }

}

function valihora() {
    var inhorario = document.getElementById('horario');
    var horario = inhorario.value;
    localStorage.setItem('horario', horario);
    var avisohora = document.getElementById('avisohorario');

    if ((horario.length != 5) || (horario.charAt(2) !== ":")) {
        inhorario.classList.add('inval');
        inhorario.classList.remove('vali');
        avisohora.innerHTML = "Insira a hora no formato correto!";
        return false;
    } else {
        if ((isNaN(horario.substring(0, 2)) == true) || (isNaN(horario.substring(3, 5)) == true)) {
            inhorario.classList.add('inval');
            inhorario.classList.remove('vali');
            avisohora.innerHTML = "Insira apenas números no formato 00:00!";
            return false;
        } else {
            var hora = parseInt(horario.substring(0, 2));
            var min = parseInt(horario.substring(3, 5));

            if ((hora < 0) || (hora > 23) || (min < 0) || (min > 59)) {
                inhorario.classList.add('inval');
                inhorario.classList.remove('vali');
                avisohora.innerHTML = "Insira uma hora válidade de 00:00 à 23:59!";
                return false;
            } else {
                inhorario.classList.remove('inval');
                inhorario.classList.add('vali');
                avisohora.innerHTML = " ";
                return true;
            }
        }
    }
}

function valicasa() {
    //Como ainda não aprendemos sobre a validação de botões, pesquisei na internet e achei o seguinte site:
    //https://pt.stackoverflow.com/questions/82968/pegar-valor-de-um-button-radio

    var casas = document.getElementsByName('opcoes');
    var avisocasa = document.getElementById('avisocasas');
    var verif = false;
    for (var i = 0; i < casas.length; i++) {
        if (casas[i].checked) {
            localStorage.setItem('casa', casas[i].value);
            verif = true;
            break;
        }
    }

    if (verif == false) {
        avisocasa.innerHTML = "Escolha uma casa!";
        return false;
    } else {
        avisocasa.innerHTML = " ";
        return true;
    }
}

function valinotas() {
    var nota = document.getElementsByName('materia');
    var avisonotas = document.getElementById('avisonotas');
    var notas = new Array();
    var verif = true;
    for (var i = 0; i < nota.length; i++) {
        //Procurei na internet como fazia para substituir virgula por ponto e achei o seguinte site:
        //https://pt.stackoverflow.com/questions/361353/alterar-v%25c3%25adrgula-por-ponto

        var numnota = nota[i].value.replace(',', '.');
        if ((isNaN(numnota)) || (numnota == "")) {
            verif = false;
            nota[i].classList.add('inval');
            nota[i].classList.remove('vali');
        } else {
            notas.push(parseFloat(numnota));
            nota[i].classList.remove('inval');
            nota[i].classList.add('vali');
        }
        localStorage.setItem('1', notas[0]);
        localStorage.setItem('2', notas[1]);
        localStorage.setItem('3', notas[2]);
        localStorage.setItem('4', notas[3]);
        localStorage.setItem('5', notas[4]);
        localStorage.setItem('6', notas[5]);
    }
    if (verif == false) {
        avisonotas.innerHTML = "Insira notas válidas!";
        return false;
    } else {
        verifvalor = true;
        for (var i = 0; i < notas.length; i++) {
            if ((notas[i] < 0) || (notas[i] > 10)) {
                verifvalor = false;
                nota[i].classList.add('inval');
                nota[i].classList.remove('vali');
            }
        }
        if (verifvalor == false) {
            avisonotas.innerHTML = "As notas devem ser de 0 à 10!";
            return false;
        } else {
            localStorage.getItem('notas', notas);
            avisonotas.innerHTML = " ";
            return true;
        }
    }
}

function valipontos() {
    var inpont = document.getElementById('pontos');
    var pontos = inpont.value;
    localStorage.setItem('pontos', pontos);
    var avisopontos = document.getElementById('avisopontos');

    if ((isNaN(pontos)) || (pontos.trim() == "")) {//quando colocava espaços em branco o código considerava então pesquisei na internet como tirá-los e apareceu que era com o trim
        inpont.classList.add('inval');
        inpont.classList.remove('vali');
        avisopontos.innerHTML = "Insira um número válido!";
        return false;
    } else {
        var valiint = true;
        for (var i = 0; i < pontos.length; i++) {
            if ((pontos.charAt(i) == ".") || (pontos.charAt(i) == ",")) {
                valiint = false;
                break;
            }
        }
        if (valiint == false) {
            inpont.classList.add('inval');
            inpont.classList.remove('vali');
            avisopontos.innerHTML = "Os pontos podem ser apenas números inteiros!";
            return false;
        } else {
            //é muito improvável uma casa ter menos de 200 pontos e mais de 600, então considerarei isso
            //já que será importante para a próxima página
            if((parseInt(pontos)>600) || (parseInt(pontos)<300)){
                inpont.classList.add('inval');
                inpont.classList.remove('vali');
                avisopontos.innerHTML = "Valores muito improváveis, coloque os verdadeiros pontos!";
                return false;
            } else {
                inpont.classList.remove('inval');
                inpont.classList.add('vali');
                avisopontos.innerHTML = " ";
                return true;
            }
        }
    }
}

function valibio() {
    var inbio = document.getElementById('bio');
    var bio = inbio.value;
    var avisobio = document.getElementById('avisobio');
    localStorage.setItem('bio', bio);

    if (bio == "") {
        inbio.classList.add('inval');
        inbio.classList.remove('vali');
        avisobio.innerHTML = "Escreva sua biografia!";
        return false;
    } else {
        //Para verificar se tem caracteres não levando em consideração os espaços em branco pesquisei na internet
        //e utilizei a seguinte fonte:
        //https://www.devmedia.com.br/javascript-trim-removendo-espacos-desnecessarios/39685

        var biosemesp = bio.trim();
        if ((biosemesp.length < 60) || (biosemesp.length > 300)) {
            inbio.classList.add('inval');
            inbio.classList.remove('vali');
            avisobio.innerHTML = "Sua biografia deve ter no minímo 60 caracteres e no máximo 300!";
            return false;
        } else {
            inbio.classList.remove('inval');
            inbio.classList.add('vali');
            avisobio.innerHTML = " ";
            return true;
        }
    }
}