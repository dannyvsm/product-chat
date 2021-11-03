class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider;
    this.state = state;
  }

  parse(message) {
    //turns messages into lowercase for ease
    const lowerCaseMsg = message.toLowerCase();

    //if user message contains 'hello', we call the greet function
    if (lowerCaseMsg.includes("hello")) {
      this.actionProvider.greet();
    }
  }
}

export default MessageParser;
