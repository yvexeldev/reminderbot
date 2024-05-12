# Islamic Reminders Bot

This Telegram bot sends Islamic reminders at specific times of the day.

## Features

- Sends Islamic reminders at set times daily.
- Messages are sent to a specified Telegram channel.

## Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/yvexeldev/reminderbot.git
   ```

2. Install dependencies:

   ```bash
   cd reminderbot
   npm install
   ```

3. Create a `.env` file in the project root with your Telegram bot token and channel ID:

   ```plaintext
   BOT_TOKEN=your_bot_token_here
   CHANNEL_ID=your_channel_id_here
   ```

4. Run the bot:

   ```bash
   npm start
   ```

## Configuration

You can customize the messages and timing by editing the `messages` array and the `setInterval` function in `index.js`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
