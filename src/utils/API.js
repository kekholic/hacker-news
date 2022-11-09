import axios from 'axios';
import { API_URL, COMMENTS_URL } from './constants';

export const getStory = async (id) => {
  try {
    const story = await axios.get(`${API_URL}/item/${id}.json`);
    return story;
  } catch (error) {
    console.log('Ошибка загрузки истории');
  }
};

export const getStories = async () => {
  try {
    const { data: storyIds } = await axios.get(
      `${API_URL}/topstories.json`
    );
    const stories = await Promise.all(storyIds.slice(0, 100).map(getStory));
    return stories;
  } catch (error) {
    console.log('Ошибка загрузки историй');
  }
};

export const getComment = async (id) => {
  try {
    const {data: comment} = await axios.get(`${COMMENTS_URL + id}.json`);
    return comment
  } catch (error) {
    console.log('Ошибка при загрузке комментария');
  }
}