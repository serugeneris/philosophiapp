# philosophiapp
A simple app to learn from the masters.

## Instructions
Ask a question to the avatar and get a relevant philosophical quote from the most famous philosophers.

## Features
- 🤖 **Google Gemini AI Integration** - Using the cost-effective `gemini-flash-lite-latest` model
- 💬 **Conversation History** - Continue discussions with context-aware responses
- ✨ **Beautiful Modern UI** - Glassmorphism design with smooth animations
- 🎨 **Responsive Design** - Works perfectly on desktop, tablet, and mobile

## Setup

### Prerequisites
- Node.js installed
- Google Gemini API key

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd philosophiapp
```

2. Install dependencies
```bash
npm install
```

3. Create a `.env` file in the root directory and add your Gemini API key:
```env
GEMINI_API_KEY=your_gemini_api_key_here
```

To get a Gemini API key:
- Visit [Google AI Studio](https://aistudio.google.com/app/apikey)
- Sign in with your Google account
- Click "Create API Key"
- Copy and paste it into your `.env` file

4. Build and run the application
```bash
npm run build
npm start
```

5. Open your browser and navigate to `http://localhost:3000`

## Usage

1. Type your philosophical question in the text area
2. Click "Ask the Philosopher" or press Shift + Enter
3. Wait for the AI to provide a relevant philosophical quote and explanation
4. Continue the conversation with follow-up questions
5. Click "New Conversation" to reset and start fresh

## Tech Stack

- **Backend**: Node.js, Express, TypeScript
- **AI**: Google Gemini (gemini-flash-lite-latest)
- **Frontend**: Vanilla JavaScript, EJS, CSS3
- **Styling**: Modern glassmorphism with animated gradients

## License

MIT

