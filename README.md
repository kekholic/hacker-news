# Hacker news clone
Интерфейс для сайта Hacker News, состоящий из двух страниц.

Frontend will be available on http://127.0.0.1:3000/  
Backend will be available on http://127.0.0.1:4000/

## Start API
1. `cd API`
2. `yarn start`

## Start WEB
1. `cd WEB`
2. `yarn start`

# Продуктовые требования
### Главная страница
- Показывает последние 100 новостей в виде списка, отсортированного по дате, самые свежие сверху.
- Каждая новость содержит:
  - название
  - рейтинг
  - ник автора
  - дату публикации
- По клику на новость происходит переход на страницу новости
- Список новостей обновляется раз в минуту без участия пользователя
- На странице есть кнопка для принудительного обновления списка новостей

### Страница новости
- Содержит:
  - ссылку на новость
  - заголовок новости
  - дату
  - автора
  - счётчик количества комментариев
  - список комментариев в виде дерева
- Корневые комментарии подгружаются сразу же при входе на страницу, вложенные - по клику на корневой
- На странице есть кнопка для принудительного обновления списка комментариев
- На странице есть кнопка для возврата к списку новостей

# Технические требования
- Приложение разработано с использованием React и Redux
- Использован официальный API Hacker News. Вызовы Hacker News API и обработка данных от него производятся напрямую с фронтенда (кроме случая, если вы сделаете опциональное задание про Node.JS)
- Роутинг выполнен с использованием React Router v5
- Фреймворк UI любой на ваше усмотрение (как пример Ant Design или Semantic UI).
  - Можно и на чистом css, главное, чтобы было красиво (выбран SCSS)
- Пакетный менеджер yarn
- Приложение должно запускаться по адресу localhost:3000 командой yarn start
- При переходах по ссылкам страница не перезагружается
- Исходный код решения выложен с вашего аккаунта на Github с Readme файлом с инструкцией по запуску

# Дополнительно
- API для инкапсуляции внешних запросов на Node.JS
