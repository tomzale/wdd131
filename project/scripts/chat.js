// Chat system functionality
const chatSystem = {
    init: function() {
        // Load chat history
        this.loadMessages();
        
        // Setup event listeners
        document.getElementById('send-btn').addEventListener('click', () => this.sendMessage());
        document.getElementById('message-input').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });
        
        // Setup form submission
        document.getElementById('contact-form').addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleContactForm();
        });
    },
    
    loadMessages: function() {
        const messagesContainer = document.getElementById('chat-messages');
        messagesContainer.innerHTML = '';
        
        // Get messages from localStorage
        const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
        
        // Display messages
        messages.forEach(msg => {
            const messageEl = document.createElement('div');
            messageEl.className = `message ${msg.sender === 'user' ? 'user' : 'other'}`;
            messageEl.innerHTML = `
                <div class="message-sender">${msg.sender === 'user' ? 'You' : msg.sender}</div>
                <div class="message-text">${msg.text}</div>
                <div class="message-time">${new Date(msg.timestamp).toLocaleTimeString()}</div>
            `;
            messagesContainer.appendChild(messageEl);
        });
        
        // Scroll to bottom
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    },
    
    sendMessage: function() {
        const input = document.getElementById('message-input');
        const message = input.value.trim();
        
        if (message) {
            // Create message object
            const newMessage = {
                sender: 'user',
                text: message,
                timestamp: new Date().toISOString()
            };
            
            // Save to localStorage
            const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
            messages.push(newMessage);
            localStorage.setItem('chatMessages', JSON.stringify(messages));
            
            // Clear input and reload messages
            input.value = '';
            this.loadMessages();
            
            // Simulate response after delay
            setTimeout(() => this.simulateResponse(), 2000);
        }
    },
    
    simulateResponse: function() {
        const responses = [
            "Great point! I love that strategy.",
            "Has anyone tried the new Killer Bean update?",
            "I'm stuck on level 23, any tips?",
            "What's your favorite gaming moment this week?",
            "Check out Zale's latest video for pro tips!"
        ];
        
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        
        const botMessage = {
            sender: 'GamerPro42',
            text: randomResponse,
            timestamp: new Date().toISOString()
        };
        
        const messages = JSON.parse(localStorage.getItem('chatMessages')) || [];
        messages.push(botMessage);
        localStorage.setItem('chatMessages', JSON.stringify(messages));
        
        this.loadMessages();
    },
    
    handleContactForm: function() {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // Basic validation
        if (!name || !email || !message) {
            alert('Please fill all fields');
            return;
        }
        
        // In a real app, this would send to a server
        console.log('Contact form submitted:', { name, email, message });
        alert('Message sent successfully!');
        
        // Reset form
        document.getElementById('contact-form').reset();
    }
};

// Initialize chat system
document.addEventListener('DOMContentLoaded', () => {
    chatSystem.init();
});