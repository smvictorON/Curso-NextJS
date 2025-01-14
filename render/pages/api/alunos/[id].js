export default function handler(req, res) {
  const id = +req.query.id
  res.status(200).json({
    id,
    nome: `joao${id}`,
    email: `joao${id}@gmail.com`
  })
}