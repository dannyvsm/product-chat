class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    const lowerCaseMsg = message.toLowerCase();

    if (lowerCaseMsg.includes("hello")) {
      this.actionProvider.greet();
    }
  }
}

export default MessageParser;
