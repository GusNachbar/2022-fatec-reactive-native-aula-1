// const hello = async nome => {
//     return `Hello, ${nome}`;
// }

async function hello(nome){
    return `Hello, ${nome}`;
}

const resultado = hello('Alec')
resultado.then(r => {console.log(r);})

function fatorial(n) {
    if(n < 0) return Promise.reject("Valor não pode ser negativo")
    if(n === 0 || n === 1) {
        const res = 1
        return Promise.resolve(res)
    }
    
    
}

function chamadaComThenCatch(){
    fatorial(10)
    .then(res => console.log(res))
    .catch(erro => console.log(erro))
    
    fatorial(-10)
    .then(res => console.log(res))
    .catch(erro => console.log(erro))
}

async function chamadaComAsyncAwait(){
    const f1 = await fatorial(10)
    console.log(f1)
    const f2 = await fatorial(-10)
    console.log(f2)
}