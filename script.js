const NOME = ["Pedro"];

// Entrada da(s) Nota(s)
const NOTAS = [7, 5, 9, 4];

// Situação do(s) Aluno(s)
let situacao = ["pendente"];

let media = 0;

// Loop para a Média do(s) Aluno(s)
for (let i = 0; i < NOTAS.length; i++)
{
    media += NOTAS[i];
}
media = media / NOTAS.length;

// Condição para a Situação do(s) Aluno(s)
if (media >= 7)
{
    situacao[0] = "Aprovado";
}
else
{
    situacao[0] = "Reprovado";
}

// Saida do Resultado
console.log("Aluno: " + NOME[0] + " - Média: " + media.toFixed(2) + " - Situação: " + situacao[0]);
