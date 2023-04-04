class Livro{
    constructor(title, ano, paginas){
        this.title = title;
        this.ano = ano;
        this.paginas = paginas;
    }
}

//Herança
class ITLivro extends Livro{
    constructor(title, ano, paginas, estante, autor){
        super(title, ano, paginas);
        this.estante = estante;
        this._autor = autor
    }
}

let miranha = new ITLivro("miranha", 2023, 190, "12A", "joaozinho");
miranha._autor = "pedro"
console.log(miranha)