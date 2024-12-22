document.querySelector('.send-btn').addEventListener('click', () => {
    const input = document.querySelector('.chat-input input');
    if (input.value.trim() !== "") {
      alert(`You sent: ${input.value}`);
      input.value = '';
    }
  });
  