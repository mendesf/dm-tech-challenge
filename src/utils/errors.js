export class ExternalDependenciesError {
  constructor(code, message) {
    this.code = code;
    this.type = 'Dependências Externas';
    this.msg = message;
  }
}

export const recipePuppyErrorFactory = () =>
  new ExternalDependenciesError(
    '001',
    'Não encontramos nosso livro de receitas'
  );

export const giphyErrorFactory = () =>
  new ExternalDependenciesError(
    '002',
    'Nosso criador de GIFs está indisposto no momento'
  );