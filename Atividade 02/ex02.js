//parte 1
var numeros = [25,23,11,55,30,6,4,21,34,89,56];
numeros.sort();

console.log(numeros);

//parte 2
var times = ["Santos", "Sport", "Santa Cruz", "Vasco", "Chapecó"];
times.push("Flamengo");
times.shift();
times.unshift("Palmeiras");
times.push("Gremio");
times.unshift("São Paulo", "Santos");
console.log(times.length);
times.pop();
times.sort();
console.log(times);

//parte 3
var atividades = ["exercícios", "escovar os dentes", "cochilar", "jogar","comer", "tomar banho", "beber agua"];
atividades.reverse();
console.log(atividades);
console.log(atividades[2], atividades[5]);
console.log(atividades.join(" - "))
var maisGosto = ["Jogar bola", "Ir a praia"];
var adicionar = atividades.concat(maisGosto);
console.log(adicionar);

//parte 4
var cidades = ["Recife", "Olinda", "Jaboatão", "São lourenço","Abreu e lima"];
cidades.shift();
cidades.pop();
console.log(cidades);