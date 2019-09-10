
import { css } from "lit-element";

const nav = `
.nav {
    display: flex;
    min-height: 5rem;
    align-items: stretch;
}

.nav img {
    max-height: 3rem;
}

.nav>.container {
    display: flex;
}

.nav-center,
.nav-left,
.nav-right {
    display: flex;
    flex: 1;
}

.nav-left {
    justify-content: flex-start;
}

.nav-right {
    justify-content: flex-end;
}

.nav-center {
    justify-content: center;
}

@media screen and (max-width: 480px) {
    .nav,
    .nav>.container {
        flex-direction: column;
    }
    .nav-center,
    .nav-left,
    .nav-right {
        flex-wrap: wrap;
        justify-content: center;
    }
}

.nav a,
.nav .brand {
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 1rem 2rem;
    color: var(--color-darkGrey);
}

.nav .active:not(.button) {
    color: #000; /* fallback */
    color: var(--color-primary);
}

.nav .brand {
    font-size: 1.75em;
    padding-top: 0;
    padding-bottom: 0;
}

.nav .brand img {
    padding-right: 1rem;
}

.nav .button {
    margin: auto 1rem;
}

`
export default css([nav]);
export { nav };
