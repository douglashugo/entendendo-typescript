// desafio com generics: classe Fila
// atributo: fila (Array)
// métodos: imprimir

class Fila <T>{
    private fila: Array<T>
    constructor(...args: T[]) {
        this.fila = args
    }

    entrar(elemento: T): void {
        this.fila.push(elemento)
    }
    
    proximo(): T | null {
        if (this.fila.length >= 0 && this.fila[0]) {
            const primeiro = this.fila[0]
        this.fila.splice(0, 1)
        return primeiro
        } else {
            return null
        }
        
    }

    imprimir(): string {
        return `Fila atual: ${this.fila}`
    }
}

const fila = new Fila<string>('Beto', 'Ana', 'Leo')
console.log(fila.imprimir());
fila.entrar('José');
console.log(fila.imprimir());
fila.proximo();
console.log(fila.imprimir());
fila.proximo();
console.log(fila.imprimir());





// Desafio Mapa
// Array de Objetos (Chave/Valor) -> itens
// Métodos: obter(Chave), colocar({ C, V })
// limpar(), imprimir()

class Mapa <K, V> {
    private arrayObjetos: Array<{chave: K; valor: V}>
    constructor(... args: Array<{chave: K; valor: V}>) {
        this.arrayObjetos = args;
    }

    obter(elemento: K): V | undefined {
        const encontrado = this.arrayObjetos.find(x => x.chave === elemento);
        return encontrado?.valor
    }

    colocar(item: {chave: K, valor: V}): void {
        this.arrayObjetos.push(item)
    }

    imprimir(): void {
        console.log(`Valores do mapa: ${JSON.stringify(this.arrayObjetos)}`)
    }

    limpar(): void {
        this.arrayObjetos.splice(0, this.arrayObjetos.length)
    }
}
 
const mapa = new Mapa<number, string>()
mapa.colocar({ chave: 1, valor: 'Pedro' })
mapa.colocar({ chave: 2, valor: 'Rebeca' })
mapa.colocar({ chave: 3, valor: 'Maria' })
mapa.colocar({ chave: 1, valor: 'Gustavo' })
 
console.log(mapa.obter(2))
mapa.imprimir()
mapa.limpar()
mapa.imprimir()