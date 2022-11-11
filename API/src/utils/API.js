import axios from 'axios';
import { API_URL } from './constants.js';


export const getItem = async (id) => {
  try {
    const { data: story } = await axios.get(`${API_URL}/item/${id}.json`);
    return story;

  } catch (error) {
    console.log('Ошибка загрузки истории');
  }
};

export const getStories = async () => {
  try {
    const { data: storyIds } = await axios.get(
      `${API_URL}/newstories.json`
    );
    return storyIds;
  } catch (error) {
    console.log('Ошибка загрузки историй');
  }
};
