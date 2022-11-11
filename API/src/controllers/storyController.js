import { getStories, getItem } from "../utils/API.js";


export const getStoryController = async (req, res) => {
  try {
    const story = await getItem(req.params.id);
    // console.log(story)
    res.json(story);
  } catch (error) {
    console.log('Ошибка загрузки истории');
    res.status(500).json(error)
  }
}

export const getAllStoriesController = async (req, res) => {
  try {
    const storyIds  = await getStories();
    const oneHunderedStories = storyIds.slice(0, 100);
    const stories = await Promise.all(oneHunderedStories.map(getItem));
    res.json(stories);
  } catch (error) {
    console.log('Ошибка загрузки историй');
    res.status(500).json(error)
  }
}

