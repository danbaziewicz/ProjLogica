alert(`Boas vindas aom jogo do número secreto`);
let numeroSecreto = 5;
let palpite;
let tentativas = 1;

while(palpite != numeroSecreto) {
    palpite =  prompt(`Escolha um número entre 1 e 30`);
    if (numeroSecreto == palpite) {
        break;
    } else {
        if (palpite > numeroSecreto) {
            alert(`o número secreto é menor que ${palpite}`);
        } else {
            alert(`o número secreto é maior que ${palpite}`);
        }
        tentativas++;
    }
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você acertou o número secreto é: ${numeroSecreto} \nVocê utilizou ${tentativas} ${palavraTentativa}`);
