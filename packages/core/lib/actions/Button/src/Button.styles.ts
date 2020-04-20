import { css } from 'lit-element';

export const styles = css`
:host {
  --sui-button-text-color: #000;

  display: block;
  padding: 25px;
  color: var(--sui-button-text-color);
}

:host([hidden]) {
  display: none;
}

h2 {
  font-family: 'Source Sans Pro', 'Helvetica', Arial, sans-serif;
}

button {
  font-family: 'Source Sans Pro', 'Helvetica', Arial, sans-serif;
  appearance: none;
  outline: 0;
  background-color: #0055B8;
  color: white;
  border: 0;
  padding: 0.5em 0.75em;
  border-radius: 0.3em;
  cursor: pointer;
  font-size: 1rem;
  transition-duration: 0.25s;
}

button:hover {
  background-color: #3388EB;
}

button[disabled] {
  background-color: #BFC5CC !important;
  color: #EFF5FC !important;
  cursor: not-allowed;
}

button.secondary {
  border: 2px #0055B8 solid;
  background-color: white;
  color: #0055B8;
}

button.secondary:hover {
  border: 2px #3388EB solid;
  color: #3388EB;
}
`;
