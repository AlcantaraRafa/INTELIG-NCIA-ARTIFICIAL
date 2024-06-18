const caixaPrincipal = document.querySelector('.caixa-principal');
const caixaPerguntas = document.querySelector('.caixa-perguntas');
const caixaAlternativas = document.querySelector('.caixa-alternativas');
const caixaResultado = document.querySelector('.caixa-resultado');
const textoResultado = document.querySelector('.texto-resultado');

const perguntas= [
    {
    enunciado: "Qual o ponto turístico mais visitado do Paraná?",
    alternativas: [ "Marco das Três Fronteiras", "Cataratas do Iguaçu"

    ]
    }, 

    {
    enunciado: "Qual a principal Usína Hidrelétrica do mundo?",
    alternativas: [ "Hidrelétrica das Três Gargantas", "Usína Hidrelétrica de Itaipú"
    
    ]
    }, 

    {
    enunciado: "Quanto tempo o Brasil teve sua economia ligada ao trabalho escravo?",
    alternativas: [ "388 Anos", "326 Anos"
        
    ]
    }, 

    {
    enunciado: "Qual o clima predominante no Paraná?",
    alternativas: [ "Temperado", "Subtropical Úmido"
            
    ]
    }, 

    {
     enunciado: "Com quantos soldados o Brasil contribuiu na Segunda Guerra Mundial?",
    alternativas: [ "Cerca de 25 mil Homens", "Cerca de 40 mil Homens"                
    ]
    } //Fecha objeto de perguntas
]; //Fecha lista de perguntas

let atual = 0;
let perguntaAtual;

function mostraPergunta(){
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();