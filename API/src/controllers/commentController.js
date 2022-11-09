import { getItem } from "../utils/API.js";

export const getCommentController = async (req, res) => {
  try {
    const comment = await getItem(req.params.id);
    res.json(comment);
  } catch (error) {
    console.log('Ошибка загрузки истории');
    res.status(500).json(error)
  }
}