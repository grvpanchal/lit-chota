
import { css } from "lit-element";

const grid = `
.container {
    max-width: var(--grid-maxWidth);
    margin: 0 auto;
    width: 96%;
    padding: 0 calc(var(--grid-gutter) / 2);
}

.row {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    margin-left: calc(var(--grid-gutter) / -2);
    margin-right: calc(var(--grid-gutter) / -2);
}

.row.reverse {
    flex-direction: row-reverse;
}

.col {
    flex: 1;
}

.col,
[class*=" col-"],
[class^='col-'] {
    margin: 0 calc(var(--grid-gutter) / 2) calc(var(--grid-gutter) / 2);
}

.col-1 {
    flex: 0 0 calc((100% / (12/1)) - var(--grid-gutter));
    max-width: calc((100% / (12/1)) - var(--grid-gutter));
}

.col-2 {
    flex: 0 0 calc((100% / (12/2)) - var(--grid-gutter));
    max-width: calc((100% / (12/2)) - var(--grid-gutter));
}

.col-3 {
    flex: 0 0 calc((100% / (12/3)) - var(--grid-gutter));
    max-width: calc((100% / (12/3)) - var(--grid-gutter));
}

.col-4 {
    flex: 0 0 calc((100% / (12/4)) - var(--grid-gutter));
    max-width: calc((100% / (12/4)) - var(--grid-gutter));
}

.col-5 {
    flex: 0 0 calc((100% / (12/5)) - var(--grid-gutter));
    max-width: calc((100% / (12/5)) - var(--grid-gutter));
}

.col-6 {
    flex: 0 0 calc((100% / (12/6)) - var(--grid-gutter));
    max-width: calc((100% / (12/6)) - var(--grid-gutter));
}

.col-7 {
    flex: 0 0 calc((100% / (12/7)) - var(--grid-gutter));
    max-width: calc((100% / (12/7)) - var(--grid-gutter));
}

.col-8 {
    flex: 0 0 calc((100% / (12/8)) - var(--grid-gutter));
    max-width: calc((100% / (12/8)) - var(--grid-gutter));
}

.col-9 {
    flex: 0 0 calc((100% / (12/9)) - var(--grid-gutter));
    max-width: calc((100% / (12/9)) - var(--grid-gutter));
}

.col-10 {
    flex: 0 0 calc((100% / (12/10)) - var(--grid-gutter));
    max-width: calc((100% / (12/10)) - var(--grid-gutter));
}

.col-11 {
    flex: 0 0 calc((100% / (12/11)) - var(--grid-gutter));
    max-width: calc((100% / (12/11)) - var(--grid-gutter));
}

.col-12 {
    flex: 0 0 calc((100% / (12/12)) - var(--grid-gutter));
    max-width: calc((100% / (12/12)) - var(--grid-gutter));
}

@media screen and (max-width: 599px) {
    .container {
        width: 100%;
    }

    .col,
    [class*="col-"],
    [class^='col-'] {
        flex: 0 1 100%;
        max-width: 100%;
    }
}

@media screen and (min-width: 900px) {
    .col-1-md {
        flex: 0 0 calc((100% / (12/1)) - var(--grid-gutter));
        max-width: calc((100% / (12/1)) - var(--grid-gutter));
    }

    .col-2-md {
        flex: 0 0 calc((100% / (12/2)) - var(--grid-gutter));
        max-width: calc((100% / (12/2)) - var(--grid-gutter));
    }

    .col-3-md {
        flex: 0 0 calc((100% / (12/3)) - var(--grid-gutter));
        max-width: calc((100% / (12/3)) - var(--grid-gutter));
    }

    .col-4-md {
        flex: 0 0 calc((100% / (12/4)) - var(--grid-gutter));
        max-width: calc((100% / (12/4)) - var(--grid-gutter));
    }

    .col-5-md {
        flex: 0 0 calc((100% / (12/5)) - var(--grid-gutter));
        max-width: calc((100% / (12/5)) - var(--grid-gutter));
    }

    .col-6-md {
        flex: 0 0 calc((100% / (12/6)) - var(--grid-gutter));
        max-width: calc((100% / (12/6)) - var(--grid-gutter));
    }

    .col-7-md {
        flex: 0 0 calc((100% / (12/7)) - var(--grid-gutter));
        max-width: calc((100% / (12/7)) - var(--grid-gutter));
    }

    .col-8-md {
        flex: 0 0 calc((100% / (12/8)) - var(--grid-gutter));
        max-width: calc((100% / (12/8)) - var(--grid-gutter));
    }

    .col-9-md {
        flex: 0 0 calc((100% / (12/9)) - var(--grid-gutter));
        max-width: calc((100% / (12/9)) - var(--grid-gutter));
    }

    .col-10-md {
        flex: 0 0 calc((100% / (12/10)) - var(--grid-gutter));
        max-width: calc((100% / (12/10)) - var(--grid-gutter));
    }

    .col-11-md {
        flex: 0 0 calc((100% / (12/11)) - var(--grid-gutter));
        max-width: calc((100% / (12/11)) - var(--grid-gutter));
    }

    .col-12-md {
        flex: 0 0 calc((100% / (12/12)) - var(--grid-gutter));
        max-width: calc((100% / (12/12)) - var(--grid-gutter));
    }
}

@media screen and (min-width: 1200px) {
    .col-1-lg {
        flex: 0 0 calc((100% / (12/1)) - var(--grid-gutter));
        max-width: calc((100% / (12/1)) - var(--grid-gutter));
    }

    .col-2-lg {
        flex: 0 0 calc((100% / (12/2)) - var(--grid-gutter));
        max-width: calc((100% / (12/2)) - var(--grid-gutter));
    }

    .col-3-lg {
        flex: 0 0 calc((100% / (12/3)) - var(--grid-gutter));
        max-width: calc((100% / (12/3)) - var(--grid-gutter));
    }

    .col-4-lg {
        flex: 0 0 calc((100% / (12/4)) - var(--grid-gutter));
        max-width: calc((100% / (12/4)) - var(--grid-gutter));
    }

    .col-5-lg {
        flex: 0 0 calc((100% / (12/5)) - var(--grid-gutter));
        max-width: calc((100% / (12/5)) - var(--grid-gutter));
    }

    .col-6-lg {
        flex: 0 0 calc((100% / (12/6)) - var(--grid-gutter));
        max-width: calc((100% / (12/6)) - var(--grid-gutter));
    }

    .col-7-lg {
        flex: 0 0 calc((100% / (12/7)) - var(--grid-gutter));
        max-width: calc((100% / (12/7)) - var(--grid-gutter));
    }

    .col-8-lg {
        flex: 0 0 calc((100% / (12/8)) - var(--grid-gutter));
        max-width: calc((100% / (12/8)) - var(--grid-gutter));
    }

    .col-9-lg {
        flex: 0 0 calc((100% / (12/9)) - var(--grid-gutter));
        max-width: calc((100% / (12/9)) - var(--grid-gutter));
    }

    .col-10-lg {
        flex: 0 0 calc((100% / (12/10)) - var(--grid-gutter));
        max-width: calc((100% / (12/10)) - var(--grid-gutter));
    }

    .col-11-lg {
        flex: 0 0 calc((100% / (12/11)) - var(--grid-gutter));
        max-width: calc((100% / (12/11)) - var(--grid-gutter));
    }

    .col-12-lg {
        flex: 0 0 calc((100% / (12/12)) - var(--grid-gutter));
        max-width: calc((100% / (12/12)) - var(--grid-gutter));
    }
}
`
export default css([grid]);
export { grid };
