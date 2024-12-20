export default function handler(req, res) {
  res.status(200).json([
    { id: 1, nome: 'caneta', preco: 2 },
    { id: 2, nome: 'caderno', preco: 5 },
    { id: 3, nome: 'lapis', preco: 1.5 },
    { id: 4, nome: 'tesoura', preco: 3 }
  ])
}
