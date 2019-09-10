
import { css } from "lit-element";

const util = `
/* Colors */
.bg-primary {
    background-color: var(--color-primary) !important;
}

.bg-light {
    background-color: var(--color-lightGrey) !important;
}

.bg-dark {
    background-color: var(--color-darkGrey) !important;
}

.bg-grey {
    background-color: var(--color-grey) !important;
}

.bg-error {
    background-color: var(--color-error) !important;
}

.bg-success {
    background-color: var(--color-success) !important;
}

.bd-primary {
    border: 1px solid var(--color-primary) !important;
}

.bd-light {
    border: 1px solid var(--color-lightGrey) !important;
}

.bd-dark {
    border: 1px solid var(--color-darkGrey) !important;
}

.bd-grey {
    border: 1px solid var(--color-grey) !important;
}

.bd-error {
    border: 1px solid var(--color-error) !important;
}

.bd-success {
    border: 1px solid var(--color-success) !important;
}

.text-primary {
    color: var(--color-primary) !important;
}

.text-light {
    color: var(--color-lightGrey) !important;
}

.text-dark {
    color: var(--color-darkGrey) !important;
}

.text-grey {
    color: var(--color-grey) !important;
}

.text-error {
    color: var(--color-error) !important;
}

.text-success {
    color: var(--color-success) !important;
}

.text-white {
    color: #fff !important;
}

/* Position & alignment */
.pull-right {
    float: right !important;
}

.pull-left {
    float: left !important;
}

.is-text-center {
    text-align: center;
}

.is-text-left {
    text-align: left;
}

.is-text-right {
    text-align: right;
}

.is-text-uppercase {
    text-transform: uppercase;
}

.is-text-lowercase {
    text-transform: lowercase;
}

.is-text-capitalize {
    text-transform: capitalize;
}

.is-full-screen {
    width: 100%;
    min-height: 100vh;
}

.is-full-width {
    width: 100% !important;
}

.is-vertical-align {
    display: flex;
    align-items: center;
}

.is-horizontal-align {
    display: flex;
    justify-content: center;
}

.is-center {
    display: flex;
    align-items: center;
    justify-content: center;
}

.is-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.is-left {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.is-fixed {
    position: fixed;
    width: 100%;
}

.is-paddingless {
    padding: 0 !important;
}

.is-marginless {
    margin: 0 !important;
}

.clearfix {
    content: "";
    display: table;
    clear: both;
}

.is-hidden {
    display: none !important;
}

@media screen and (max-width: 599px) {
    .hide-xs {
        display: none !important;
    }
}

@media screen and (min-width: 600px) and (max-width: 899px) {
    .hide-sm {
        display: none !important;
    }
}

@media screen and (min-width: 900px) and (max-width: 1199px) {
    .hide-md {
        display: none !important;
    }
}

@media screen and (min-width: 1200px) {
    .hide-lg {
        display: none !important;
    }
}
`
export default css([util]);
export { util };
