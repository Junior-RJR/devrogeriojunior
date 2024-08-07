document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('chatbot-input');
    const sendButton = document.getElementById('chatbot-send');
    const messagesContainer = document.getElementById('chatbot-messages');
    const chatbotContainer = document.getElementById('chatbot-container');
    const chatbotHeader = document.getElementById('chatbot-header');

    function sendMessage() {
        const message = input.value.trim();
        if (message) {
            const userMessage = document.createElement('div');
            userMessage.className = 'message user-message';
            userMessage.innerHTML = `<div class="message-header">Você:</div>${message}`;
            messagesContainer.appendChild(userMessage);

            input.value = '';

            fetch('https://devrogeriojunior-backend.onrender.com/chatbot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ message })
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const botResponse = document.createElement('div');
                botResponse.className = 'message bot-message';
                botResponse.innerHTML = `<div class="message-header">RJR-Bot:</div>${data.response || 'Erro na resposta do bot'}`;
                messagesContainer.appendChild(botResponse);

                messagesContainer.scrollTop = messagesContainer.scrollHeight;
            })
            .catch(error => {
                console.error('Error:', error);
                const botResponse = document.createElement('div');
                botResponse.className = 'message bot-message';
                botResponse.innerHTML = `<div class="message-header">RJR-Bot:</div>Desculpe, ocorreu um erro.`;
                messagesContainer.appendChild(botResponse);
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
});
