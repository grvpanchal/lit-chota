
import { css } from "lit-element";

const card = `
.card {
    padding: 1rem 2rem;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
}

.card p:last-child {
  margin: 0;
}

.card header > * {
  margin-top: 0;
  margin-bottom: 1rem;
}

`
export default css([card]);
export { card };
