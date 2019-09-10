
import { css } from "lit-element";

const tag = `
.tag {
  display: inline-block;
  border: 1px solid var(--color-lightGrey);
  text-transform: uppercase;
  color: var(--color-grey);
  padding: 0.5rem;
  line-height: 1;
  letter-spacing: 0.5px;
}

.tag.is-small {
  padding: 0.4rem;
  font-size: 0.75em;
}

.tag.is-large {
  padding: 0.7rem;
  font-size: 1.125em;
}

.tag+.tag {
  margin-left: 1rem;
}
`
export default css([tag]);
export { tag };
