import { articles } from "./../../../data";

export default function handler(req, res) {
  const id = req.query.id;
  const filtered = articles.filter((x) => x.id === id);
  if (filtered.length > 0) {
    res.status(200).json(filtered);
  } else {
    res.status(404).json({ message: `no found for id : ${id}` });
  }
}
