var listaFrases = [];

function preencherFrases() {
  listaFrases.push("frase 1");
  listaFrases.push("frase 2");
  listaFrases.push("frase 3");
}

setTimeout(preencherFrases, 1000);

async function buscarFrase() {
    var frases = await buscarFrasesDaWeb();
    var index = Math.floor(Math.random() * (frases.length -1));
    var frase = frases[index]
  mostrarFrase(frase.quote)
}

function mostrarFrase (frase){
    document.getElementById('campo-frase').innerHTML = frase
}

async function buscarFrasesDaWeb (){
    var dadosRespostas = await (fetch('https://moraislucas.github.io/MeMotive/phrases.json'));
    var dadosJson = await (await dadosRespostas).json()

   
    return dadosJson;

}