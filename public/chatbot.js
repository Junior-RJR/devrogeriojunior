document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('chatbot-input');
    const sendButton = document.getElementById('chatbot-send');
    const messagesContainer = document.getElementById('chatbot-messages');
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotHeader = document.getElementById('chatbot-header');
    // const chatbotToggle = document.querySelector('.chatbot-toggle');

    function sendMessage() {
        const message = input.value.trim();
        if (message) {
            const userMessage = document.createElement('div');
            userMessage.className = 'message user-message';
            userMessage.innerHTML = `<div class="message-header">Você:</div>${message}`;
            messagesContainer.appendChild(userMessage);

            input.value = '';

            fetch('http://127.0.0.1:5000/chatbot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message })
            })
            .then(response => response.json())
            .then(data => {
                const botResponse = document.createElement('div');
                botResponse.className = 'message bot-message';
                botResponse.innerHTML = `<div class="message-header">RJR-Bot:</div>${data.response}`;
                messagesContainer.appendChild(botResponse);

                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            });
        }
    }

    sendButton.addEventListener('click', sendMessage);

    input.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            event.preventDefault(); 
            sendMessage();
        }
    });

    chatbotHeader.addEventListener('click', () => {
        chatbotContainer.classList.toggle('minimized');
    });

    // chatbotToggle.addEventListener('click', () => {
    //     chatbotContainer.classList.toggle('minimized');
    // });
});
