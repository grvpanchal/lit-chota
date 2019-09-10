
import { css } from "lit-element";

const tab = `
.tabs {
    display: flex;
}

.tabs a {
    text-decoration: none;
}

.tabs > a {
    padding: 1rem 2rem;
    flex: 0 1 auto;
    color: var(--color-darkGrey);
    border-bottom: 2px solid var(--color-lightGrey);
    text-align: center;
}

.tabs > a.active,
.tabs > a:hover {
    opacity: 1;
    border-bottom: 2px solid var(--color-darkGrey);
}

.tabs > a.active {
    border-color: var(--color-primary);
}

.tabs.is-full a {
    flex: 1 1 auto;
}

`
export default css([tab]);
export { tab };
