const DEFAULT_LENGHT_INPUT = 6;

const EVENTS = [
    { type: 'focus', event: new FocusEvent('focus', { bubbles: true }) },
    { type: 'click', event: new MouseEvent('click', { bubbles: true }) },
    { type: 'input', event: new Event('input', { bubbles: true }) },
    { type: 'change', event: new Event('change', { bubbles: true }) },
    { type: 'keydown', event: new KeyboardEvent('keydown', { bubbles: true, key: 'a' }) },
    { type: 'keyup', event: new KeyboardEvent('keyup', { bubbles: true, key: 'a' }) },
    { type: 'blur', event: new FocusEvent('blur', { bubbles: true }) }
  ];
  