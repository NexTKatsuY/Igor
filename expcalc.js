/*POKÉMON ILLIUM
CÓDIGO DE LANÇAMENTO DE DADOS DE 20 FACES DO RPG*

by: ILLIUM
http://www.pokemonillium.forumeiros.com
*/

function experiencia() {
var experiencia = document.getElementById ("experiencia");
var nvpokeuser = +experiencia.nvpokeuser.value; //CAMPO DO NÍVEL DO POKE
var nvpokederro = +experiencia.nvpokederro.value; // CAMPO DO NIVEL DO ALVO
var estpokeuser = experiencia.estpokeuser.value; // EVO. ESTÁGIO DO POKE
var estpokederro = experiencia.estpokederro.value; // EVO. ESTÁGIO DO ALVO
var basenv; // ATRIBUIÇÃO DE BASE DO DIFERENCIAMENTO DE NÍVEL
var basest; // ATRIBUIÇÃO DE BASE DO DIFERENCIAMENTO DE ESTÁGIOS
var unst; // ATRIBUIÇÃO DE VALORES DO CALCULO
var basenvst; //
var finalResult; // RESULTADO FINAL QUE MOSTRA A EXPERIÊNCIA TOTAL OBTIDA1
var finalResultT; // RESULTADO FINAL QUE MOSTRA A EXPERIÊNCIA TOTAL OBTIDA2
var alert1;
var alert2;
var alert3;
var persoexp;

/*CALCULO DE ATRIBUIÇÃO DE VARIÁVEIS*/
if (nvpokeuser >= 5 && nvpokederro >= 5) {
	nvpokeuser = nvpokeuser;
	nvpokederro = nvpokederro;
} else {
	alert(alert1 = "Preencha os níveis com valores corretos");
}

/*CALCULO PARA DETERMINAR A PONTUAÇÃO BASE POR DIFERENCIAMENTO DE NÍVEL*/
if (nvpokeuser < nvpokederro) {
	basenv = (nvpokederro - nvpokeuser) * 10;
} if (nvpokeuser > nvpokederro) {
	basenv = (nvpokeuser - nvpokederro) * 2;
} if (nvpokeuser == nvpokederro) {
	basenv = (nvpokeuser - nvpokederro) +10 ;
} 


/*CONVERSÃO DE ARRAYs PARA NUMEROS*/

if (estpokeuser == ["primeiro"]) {
	estpokeuser = 1;
} else if (estpokeuser == ["Primeiro"]) {
	estpokeuser = 1;
} else if (estpokeuser == ["PRIMEIRO"]) {
	estpokeuser = 1;
} else if (estpokeuser == ["segundo"]) {
	estpokeuser = 2;
} else if (estpokeuser == ["Segundo"]) {
	estpokeuser = 2;
} else if (estpokeuser == ["SEGUNDO"]) {
	estpokeuser = 2;
} else if (estpokeuser == ["terceiro"]) {
	estpokeuser = 3;
} else if (estpokeuser == ["Terceiro"]) {
	estpokeuser = 3;
} else if (estpokeuser == ["TERCEIRO"]) {
	estpokeuser = 3;
} else if (estpokeuser == ["unico"]) {
	estpokeuser = 1;
} else if (estpokeuser == ["Unico"]) {
	estpokeuser = 1;
} else if (estpokeuser == ["UNICO"]) {
	estpokeuser = 1;
} else {
	alert(alert2 = "Preencha o campo: estágio do Pokémon vencedor");
}

if (estpokederro == ["primeiro"]) {
	estpokederro = 1;
} else if (estpokederro == ["Primeiro"]) {
	estpokederro = 1;
} else if (estpokederro == ["PRIMEIRO"]) {
	estpokederro = 1;
} else if (estpokederro == ["segundo"]) {
	estpokederro = 2;
} else if (estpokederro == ["Segundo"]) {
	estpokederro = 2;
} else if (estpokederro == ["SEGUNDO"]) {
	estpokederro = 2;
} else if (estpokederro == ["terceiro"]) {
	estpokederro = 3;
} else if (estpokederro == ["Terceiro"]) {
	estpokederro = 3;
} else if (estpokederro == ["TERCEIRO"]) {
	estpokederro = 3;
} else if (estpokederro == ["unico"]) {
	estpokederro = 0;
} else if (estpokederro == ["Unico"]) {
	estpokederro = 0;
} else if (estpokederro == ["UNICO"]) {
	estpokederro = 0;
} else {
	alert(alert3 = "Preencha o campo: estágio do Pokémon derrotado");
}

/*CALCULO PARA DETERMINAR A PONTUAÇÃO BASE POR DIFERENCIAMENTO EVO. ESTAGIO*/

if (estpokeuser == estpokederro) {
	basest = 10;
} if (estpokeuser < estpokederro) {
	basest = (estpokederro - estpokeuser);
} if (estpokeuser > estpokederro) {
	basest = -(estpokeuser - estpokederro);
} 


/*CALCULO PARA DETERMINAR A PONTUAÇÃO BASE RESULTANTE DA ++ OU --*/

if (estpokederro == 0 && basest == 1) {
	basest = 25;
} if (estpokederro == 0 && basest == 2) {
	basest = 25;
} if (estpokederro == 0 && basest == -1) {
	basest = 25;
} if (estpokederro == 0 && basest == -2) {
	basest = 25;
} if (estpokederro == 0 && basest == -3) {
	basest = 25;
}

if (basest == 1) {
	basest = 15;
} if (basest == 2) {
	basest = 20;
} if (basest == -1) {
	basest = 10;
} if (basest == -2) {
	basest = 5;
} if (unst == 0 ) {
	basest = 25;
}

/*CALCULO QUE MOSTRARÁ A QUANTIA DE EXPERIÊNCIA GANHA PELO USUÁRIO*/
var basenvst = (nvpokederro * basest);

var finalResult = basenvst;

/*CALCULO FINAL E MOSTRAGEM EM TELA DISABLED*/
var finalResultT = finalResult + basenv;
experiencia.expganha.value = " Recebe " + finalResultT + " de experiência";

	var persoexp = (finalResultT / 4);
	experiencia.log1.value = basenv + " pontos de exp.";
	experiencia.log2.value = finalResult + " pontos de exp.";
	experiencia.exppp.value = " Recebe " + persoexp.toFixed(0) + " de experiência";
}
