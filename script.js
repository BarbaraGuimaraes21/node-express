import prompt from "prompt-sync"

const resp = prompt();

const listaOrdemAlf = () => {
    let prop = resp("Digite uma propriedade de CSS:");
    let array = [];
    while (prop.toLowerCase() != "Sair") {
        array.push(prop);
        prop = resp("Digite uma propriedade de CSS:")
    }
    return array.sort().join("\n");
}

console.log(listaOrdemAlf());