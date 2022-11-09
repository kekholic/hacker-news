import axios from 'axios';
import { STORY_URL, COMMENTS_URL } from './constants';

export const getStory = async (id) => {
  try {
    const story = await axios.get(`${STORY_URL}${id}`);
    return story;
  } catch (error) {
    console.log('Ошибка загрузки истории');
  }
};

export const getStories = async () => {
  try {
    const { data: stories } = await axios.get(
      `${STORY_URL}`
      );
    return stories;

  } catch (error) {
    console.log('Ошибка загрузки историй');
  }
};

export const getComment = async (id) => {
  try {
    const {data: comment} = await axios.get(`${COMMENTS_URL + id}`);
    return comment
  } catch (error) {
    console.log('Ошибка при загрузке комментария');
  }
}