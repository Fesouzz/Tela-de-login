export class Aluno {
    #nome;
    setNome(nome){
        this.#nome = nome;
    }
    getNome(){
        return this.#nome;
    }
}