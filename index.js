// Função para gerar um ID único
function gerarIdUnico() {
  return '_' + Math.random().toString(36).substr(2, 9);
}

// Função para criar um ingrediente aleatório
function criarIngredienteAleatório() {
  const nomesIngredientes = ['Farinha', 'Açúcar', 'Sal', 'Leite', 'Ovo'];
  const unidadesDeCompra = ['KG', 'L', 'U'];
  const unidadeConvertida = unidadesDeCompra[Math.floor(Math.random() * unidadesDeCompra.length)];
  const custoUnitario = Math.random() * 10 + 1; // Custo aleatório entre 1 e 10
  const nome = nomesIngredientes[Math.floor(Math.random() * nomesIngredientes.length)];

  return {
    id: gerarIdUnico(),
    nome,
    UnidadeDeCompra: unidadeConvertida === 'U' ? 'U' : unidadesDeCompra[Math.floor(Math.random() * unidadesDeCompra.length)],
    unidadeConvertida,
    custoUnitario,
  };
}

// Função para criar um produto com 5 ingredientes aleatórios
function criarProdutoAleatório() {
  const id = gerarIdUnico();
  const nome = `Produto ${id}`;
  const descrição = `Descrição do ${nome}`;
  const ingredientes = [];

  for (let i = 0; i < 5; i++) {
    ingredientes.push(criarIngredienteAleatório());
  }

  const categoria = `Categoria do ${nome}`;

  return {
    id,
    nome,
    descrição,
    ingredientes,
    categoria,
  };
}

// Crie um array com 10 produtos
const produtos = [];

for (let i = 0; i < 10; i++) {
  produtos.push(criarProdutoAleatório());
}

// Exiba o array de produtos
console.log(JSON.stringify(produtos));
