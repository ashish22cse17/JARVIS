document.addEventListener('DOMContentLoaded', function () {
    const messageForm = document.getElementById('messageForm');
    const userMessageInput = document.getElementById('userMessage');
    const chatBox = document.getElementById('chatBox');

    messageForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const userMessage = userMessageInput.value;
        if (userMessage.trim() !== '') {
            appendMessage('user', userMessage);
            userMessageInput.value = '';
            // You can add logic here to process the user's message
            // and generate a response.
            const botResponse = "This is a sample response from the bot.";
            setTimeout(() => appendMessage('bot', botResponse), 500);
        }
    });

    function appendMessage(sender, message) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;
        messageDiv.innerHTML = `<span>${sender === 'user' ? 'You' : 'Bot'}:</span> ${message}`;
        chatBox.appendChild(messageDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
