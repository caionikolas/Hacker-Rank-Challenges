var listMerge = function(){
    let head = null   // inicio
    let length = 0      // tamanho da lista

    const Node = (value) => {      //Criando um nó  
        return {             
            value,          //Recebe um valor e
            next: null      //Retorna outro nó
        }
    }

    //operações :
    const add = (value) => {    //adicionar um valor
        if(!head){         
           head = Node(value)
           length++
           return head
        }
        let node = head
        while(node.next){
            node = node.next
        }                  //descobrir nó nulo
        node.next = Node(value)
        length++
        return node.next        //retorna o nó adicionado
    }

    return {
        length: () => length,
        add: (value) => add(value),  //exibição
        print: () => console.log(head)
    }
}

const list = listMerge()
console.log(list.length())
list.add(1)
console.log(list.length())
list.print()