export class ExternalDependencyError extends Error {
  constructor(message, dependency) {
    super(message);
    this.name = 'Erro de Dependência Externa';
    this.dependency = dependency;
    this.msg = message;
  }
}
