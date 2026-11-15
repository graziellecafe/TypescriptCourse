"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Aluno {
    nome;
    sobrenome;
    idade;
    constructor(nome, sobrenome, idade) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }
    getFullName() {
        return `${this.nome} ${this.sobrenome}`;
    }
}
//# sourceMappingURL=00-Introduction.js.map