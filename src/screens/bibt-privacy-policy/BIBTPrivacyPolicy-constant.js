const POLICY_TYPE = [
  'Ticker: ',
  'Token type:',
  'ICO Token Price: ',
  'Fundraising Goal:',
  'Total Tokens:',
  'Available for Token Sale:',
  'Whitelist:',
  'Know Your Customer:',
  'Cant participate:',
  'Accepts:',
];

const POLICY_VALUE = [
  'CLB',
  'ERC20',
  '1 CLB = 0.0165 USD',
  '2,100,000 USD',
  '1,000,000,000',
  '44%',
  'YES',
  'YES',
  'CHINA, USA',
  'ETH',
];

const POLICY_TEXT =
  'Making the rapidly growing blockchain industry a safer place by making information security open and accessible to all users. The Universal Security Platform is an all-inclusive suite of ready-made cybersecurity solutions that utilizes AI.';

const POLICY_BUTTON = [{title: 'Utility'}, {title: 'Description'}];

Object.freeze(POLICY_TYPE);
Object.freeze(POLICY_VALUE);
Object.freeze(POLICY_BUTTON);

export {POLICY_TEXT, POLICY_TYPE, POLICY_VALUE, POLICY_BUTTON};
