console.log('js loaded');

// Store conversation history
let conversationHistory = [];

const btn = document.getElementById('send-question');
const resetBtn = document.getElementById('reset-conversation');
const conversationContainer = document.getElementById('conversation-container');

const addMessageToUI = (content, role) => {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message message-${role}`;
    
    const labelDiv = document.createElement('div');
    labelDiv.className = 'message-label';
    labelDiv.textContent = role === 'user' ? 'You' : 'Philosopher';
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.textContent = content;
    
    messageDiv.appendChild(labelDiv);
    messageDiv.appendChild(contentDiv);
    conversationContainer.appendChild(messageDiv);
    
    // Scroll to the bottom
    conversationContainer.scrollTop = conversationContainer.scrollHeight;
};

const sendQuestion = async (event) => {
    const container = event.target.closest('.container');
    const textArea = container.querySelector('textarea');
    
    if (textArea && textArea.value.trim() !== '') {
        const question = textArea.value.trim();
        
        // Add user message to UI
        addMessageToUI(question, 'user');
        
        // Clear textarea
        textArea.value = '';
        
        // Hide button and show loader
        event.target.style.display = 'none';
        resetBtn.style.display = 'none';
        const loadingElem = container.querySelector('.loader');
        loadingElem.style.display = 'flex';
        
        let responseString;
        try {
            const res = await fetch(window.location.protocol + '//' + window.location.host + '/question', {
                method: 'POST',
                body: JSON.stringify({
                    question: question,
                    conversationHistory: conversationHistory
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            });

            if (res.status !== 200) {
                throw new Error('Something failed with the question.')
            }
            
            const resJson = await res.json();
            responseString = resJson.response;
            conversationHistory = resJson.conversationHistory;

        } catch(e) {
            responseString = e.message;
        }

        // Show response
        event.target.style.display = '';
        resetBtn.style.display = '';
        loadingElem.style.display = 'none';
        
        // Add philosopher's response to UI
        addMessageToUI(responseString, 'model');
    }
};

const resetConversation = () => {
    conversationHistory = [];
    conversationContainer.innerHTML = '';
    const textArea = document.querySelector('textarea');
    if (textArea) {
        textArea.value = '';
    }
};

btn.addEventListener('click', sendQuestion);
resetBtn.addEventListener('click', resetConversation);

// Allow Enter + Shift to send message
document.getElementById('question-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && e.shiftKey) {
        e.preventDefault();
        sendQuestion(e);
    }
});