/* eslint-disable class-methods-use-this */
export default class Message {
  constructor(position, el) {
    this.position = position;
    this.el = el;
    this.date = new Date().toString().slice(3, 21);
  }

  createMessage(chat, messages) {
    // eslint-disable-next-line no-param-reassign
    chat.innerHTML = '';
    messages.forEach((msg) => {
      const newMes = document.createElement('div');
      newMes.classList.add('message');
      newMes.innerHTML = `
      <span class='message-date'>${msg.date}</span>
      <div class='message-content'></div> 
      <span class='message-position'>${msg.position}</span>
      `;
      chat.insertAdjacentElement('afterbegin', newMes);
      newMes.querySelector('.message-content').appendChild(msg.el);
    });
  }
}
