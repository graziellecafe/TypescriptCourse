interface TemNome {
  nome: string;
}

interface TemSobrenome {
  sobrenome: string;
}

class Aluno implements TemNome, TemSobrenome {
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
    private readonly idade: number
  ) {}

  public getFullName(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}
