class Pilha{
    constructor(){
        this.itens = []
    }

    push(element){
        this.itens.push(element);
    }
    pop(){
        return this.itens.pop();
    }
    peek(){
        return this.itens[this.itens.length - 1];
    }
    isEmpty(){
        return this.itens.length === 0;
    }
    clean(){
        return this.itens = [];
    }
    size(){
        return this.itens.length;
    }
}

const pilha = new Pilha();

pilha.push(7)
pilha.push(39)
pilha.push(5)
pilha.push(6)
pilha.push(1)
console.log(pilha.isEmpty())
pilha.pop()
console.log(pilha.peek())

