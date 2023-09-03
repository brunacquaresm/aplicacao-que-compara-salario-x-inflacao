let salarioMinimo = [
    { salario: "510.00", ano: "2010" },
    { salario: "545.00", ano: "2011" },
    { salario: "622.00", ano: "2012" },
    { salario: "678.00", ano: "2013" },
    { salario: "724.00", ano: "2014" },
    { salario: "788.00", ano: "2015" },
    { salario: "880.00", ano: "2016" },
    { salario: "937.00", ano: "2017" },
    { salario: "954.00", ano: "2018" },
    { salario: "998.00", ano: "2019" },
    { salario: "1045.00", ano: "2020"},
]
let inflacao = [
    { ipca: "5.91", ano: "2010" },
    { ipca: "6.50", ano: "2011" },
    { ipca: "5.84", ano: "2012" },
    { ipca: "5.91", ano: "2013" },
    { ipca: "6.41", ano: "2014" },
    { ipca: "10.67", ano: "2015"},
    { ipca: "6.29", ano: "2016" },
    { ipca: "2.95", ano: "2017" },
    { ipca: "3.75", ano: "2018" },
    { ipca: "4.31", ano: "2019" },
    { ipca: "4.52", ano: "2020" },
]

import entradaDados from 'readline-sync';

console.log("Escolha uma das alternativas:\n");
console.log("1 - Listar os salários mínimos de 2010 à 2020");
console.log("2 - Listar o índice IPCA de 2010 à 2020");
console.log("3 - Comparação entre o percentual de aumento salarial e o IPCA\n");

let escolha = entradaDados.question("Digite o número de sua escolha: \n");

escolha = Number(escolha);

switch(escolha) {
    case 1:
        for(let i = 0; i < salarioMinimo.length; ++i) // Percorre a lista
        {
            let salario = salarioMinimo[i].salario;
            let ano = salarioMinimo[i].ano;

            salario = salario.replace(".",","); 
        
            console.log("\nSalário Mínimo: ".padEnd(30, '.')+ "R$" + salario);
            console.log("Ano: ".padEnd(29, '.') + ano); 
        }
        break;
    case 2:
        for(let i = 0; i < inflacao.length; i++) 
        {
            let ipca = inflacao[i].ipca;
            let ano = inflacao[i].ano;

            ipca = ipca.replace(".",",");

            console.log("\nTaxa de inflação: ".padEnd(30, '.') + ipca + "%");
            console.log("Ano: ".padEnd(29, '.') + ano); 
        }
        break;
    case 3:
        for(let i = 0; i < salarioMinimo.length; ++i) 
        {
            let salario = Number(salarioMinimo[i].salario); // Pega os salários e converte para numérico
            let ano = salarioMinimo[i].ano; // Pega os anos

            let salario_formatado = salario.toFixed(2).replace(".",","); // Formata para 2 casas decimais e converte . para ,

            let percentualCrescimento;
            let crescimento_formatado;
            if (i > 0) 
            {
            let salarioAnterior = salarioMinimo[i - 1].salario; // Pega o índice do salário e volta ao anterior [i - 1]
                salarioAnterior = Number(salarioAnterior); // Converte para numérico
            let salarioAnterior_formatado = salarioAnterior.toFixed(2); // Formata para 2 casas decimais

            let diferenca = salario - salarioAnterior_formatado; // Calcula a diferença do salário anterior para o posterior

                percentualCrescimento = ((diferenca / salarioAnterior_formatado) * 100);
                crescimento_formatado = percentualCrescimento.toFixed(2).replace(".", ",");
            } else {
                crescimento_formatado = "-";
            }

        let ipca = Number(inflacao[i].ipca);
        let ipca_formatado = ipca.toFixed(2).replace(".", ",");

            console.log("\nAno: ".padEnd(30, '.') + ano); 
            console.log("Salário Mínimo: ".padEnd(30, '.')+ "R$" + salario_formatado);
            console.log("Crescimento salarial :".padEnd(30, '.') + crescimento_formatado + "%");
            console.log("Taxa de inflação: ".padEnd(30, '.') + ipca_formatado + "%");
        }
        break;
    default:
        console.log("Opção inválida!");
}