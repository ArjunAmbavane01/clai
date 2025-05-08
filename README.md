<h1 align="center">CLAI — Command Line AI Assistant</h1>
<p align="center">⚡ A sleek, AI-powered terminal assistant that runs commands and answers your coding questions intelligently.</p>

<div align="center">
  <a href="https://www.npmjs.com/package/clai">
    <img src="https://img.shields.io/npm/v/clai.svg" alt="npm version" />
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" alt="License: MIT" />
  </a>
</div>

## ✨ Features

- **Terminal Integration**: AI assistant that lives in your terminal
- **Command Execution**: Automatically runs shell commands on your behalf
- **Multiple AI Models**: Switch between various language models (Mistral, Claude, GPT, Gemini, etc.)
- **Context Awareness**: Maintains chat history for more contextual responses
- **Beautiful TUI**: Modern terminal UI built with React Ink

## 📦 Installation

```bash
npm install -g clai
```

or

```bash
yarn global add clai
```

## 🔑 Prerequisites

CLAI requires an [OpenRouter](https://openrouter.ai/) API key to function. If you don't have one:

1. Create an account at [OpenRouter.ai](https://openrouter.ai/)
2. Generate an API key from your dashboard
3. The API key will be requested on first run or can be set manually (see Configuration)

## 🚀 Quick Start

After installation, simply run:

```bash
clai
```

On first run, you'll be prompted for your OpenRouter API key. After that, you can start chatting with your AI assistant.

## 💬 Usage

CLAI provides two main types of responses:

### 1. Explanations

The AI will respond with helpful text, code examples, and guidance.

### 2. Command Execution

When appropriate, the AI will suggest and execute terminal commands:

- The command will be shown with an explanation
- You'll see real-time execution
- Results will be displayed directly in the chat

## ⚙️ Configuration

You can set your OpenRouter API key in one of these ways:

1. Let CLAI prompt you on first run
2. Create a config file at `~/.clai/config.json`:
   ```json
   {
     "apiKey": "your-openrouter-api-key"
   }
   ```

## 🔄 Model Selection

CLAI supports multiple AI models through OpenRouter:

- mistralai/mistral-7b-instruct (default)
- neversleep/noromaid-20b
- perplexity/llama-3.1-sonar-small-128k-online
- perplexity/sonar
- openai/gpt-3.5-turbo
- anthropic/claude-3.5-haiku
- google/gemini-flash-1.5-8b

To change models during a session:

1. Type `/models` at the prompt
2. Select your preferred model from the list

## ⌨️ Commands

- `/help` - Show all available commands
- `/clear` - Clear the current chat history
- `/model` - Change the AI model
- `/exit` or `Ctrl+C` - Exit CLAI

## 📊 Project Structure

```
clai/
├── components/        # React components for the TUI
├── hooks/             # Custom React hooks
├── utils/             # Utility functions and types
│   ├── aiClient.ts    # OpenRouter API client
│   ├── models.ts      # Model definitions
│   ├── chatTypes.ts   # Type definitions
│   └── config.js      # Configuration management
└── index.tsx          # Application entry point
```

## 🔒 Privacy & Security

CLAI:

- Only sends your prompts to the selected AI model via OpenRouter
- Can execute shell commands on your machine, so review before confirming
- Does not collect telemetry or user data

## 📝 TODO

- Implement previous chat context memory
- Add offline support
- Add support for command aliasing

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

<p align="center">Made with 💻 and ☕</p>
