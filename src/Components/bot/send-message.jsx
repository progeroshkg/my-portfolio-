const express = require('express');
const bodyParser = require('body-parser');
const { sendMessageToTelegram } = require('../telegram/telegram');


const app = express();
const port = 4000; // Используем порт 4000


// Парсинг тела запроса в формате JSON
app.use(bodyParser.json());

// Обработчик POST запроса на отправку сообщения в Telegram
// Обработчик POST запроса на отправку сообщения в Telegram
app.post('/send-message', (req, res) => {
  const { name, email, message } = req.body;
  sendMessageToTelegram(name, email, message);
  res.sendStatus(200);
});


// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
