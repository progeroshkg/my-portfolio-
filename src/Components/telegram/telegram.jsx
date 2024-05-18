const axios = require('axios');

// Функция для отправки сообщения в Telegram
async function sendMessageToTelegram(name, email, message) {
  // Замените на свой токен бота
  const botToken = '7107748567:AAFxwbRNGFKame_gPODtSFHPGau8hJ_-AJM';
  // Замените на ID вашего чата
  const chatId = '-1002139320649';

  try {
    const response = await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
  chat_id: chatId,
  text: `Сообщение от: ${name}\nEmail: ${email}\nСообщение: ${message}`,
});
    console.log('Сообщение успешно отправлено в Telegram:', response.data);
  } catch (error) {
    console.error('Ошибка при отправке сообщения в Telegram:', error);
  }
}

module.exports = {
  sendMessageToTelegram,
};
