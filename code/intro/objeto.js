let cadeira = false;
let mesa = true;
let cozinha = cadeira && mesa;
let sala = cadeira || mesa;
console.log(cozinha);
console.log(sala);
let casa = !cozinha && !sala;
console.log(casa);
