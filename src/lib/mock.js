export const videoQueryMock = [
  {
    id: 'bot_1',
    text: 'Hi.. How can I help you?',
    timestamp: new Date().toISOString(),
    from: 'bot',
    type: 'TEXT',
    current_action: 'START_CHAT',
    next_action: 'GET_USER_INPUT',
    next_input_type: ['TEXT'],
    index: 0
  },
  {
    id: 'bot_2',
    text: 'Here is your summary',
    timestamp: new Date().toISOString(),
    from: 'bot',
    type: 'TEXT',
    current_action: 'SHOW_BOT_RESPONSE',
    next_action: 'CONTINUE',
    index: 1
  },
  {
    id: 'bot_3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    timestamp: new Date().toISOString(),
    from: 'bot',
    type: 'TEXT',
    current_action: 'SHOW_BOT_RESPONSE',
    next_action: 'CONTINUE',
    index: 2
  },
  {
    id: 'bot_4',
    text: 'Is there anything else you would like to know?',
    timestamp: new Date().toISOString(),
    from: 'bot',
    type: 'TEXT',
    current_action: 'SHOW_BOT_RESPONSE',
    next_action: 'GET_USER_INPUT',
    next_input_type: ['TEXT'],
    index: 3
  },
  {
    id: 'user_1',
    text: 'Thanks for choosing us!',
    timestamp: new Date().toISOString(),
    from: 'user',
    type: 'TEXT',
    current_action: 'SHOW_BOT_RESPONSE',
    next_action: 'END_CHAT',
    index: 4
  }
];
  