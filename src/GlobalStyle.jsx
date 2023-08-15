import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --fw-normal: 400;
        --fw-bold: 700;

        --primary-600: hsl(220, 98%, 61%);
        --checkg-bg: linear-gradient hsl(192, 100%, 67%) to hsl(280, 87%, 65%);

        --mobile-size: 21em;
        --desktop-size: 80em;

    }

    *,
    *::before,
    *::after {
    box-sizing: border-box;
    }

    /* Remove default margin */
    * {
    margin: 0;
    padding: 0;
    font:inherit
    }

    /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
    ul[role='list'],
    ol[role='list'] {
    list-style: none;
    }

    /* Set core root defaults */
    html:focus-within {
    scroll-behavior: smooth;
    }

    html,body {
        height: 100%
    }

    /* Set core body defaults */

    /* A elements that don't have a class get default styles */
    a:not([class]) {
    text-decoration-skip-ink: auto;
    }

    /* Make images easier to work with */
    img,
    picture,
    svg {
    display: block;
    max-width: 100%
    }

    /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
    @media (prefers-reduced-fmotion: reduce) {
    html:focus-within {
        scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
        scroll-behavior: auto !important;
    }
}

    html {
        font-size: 1.125rem;
    }

    body {
        font-family: 'Josefin Sans', sans-serif;
    }

    .container {
        display: grid;
        grid-template-rows: 1fr 5fr;
    }

    .content-wrapper {
        min-width: 20em;
        max-width: 30em;
    }
    .content-wrapper input,
    .content-wrapper li {
        width: 100%;
        padding: 1em;
    }

    .title-wrapper {
        display: flex;
        justify-content: space-between;
        margin-bottom: 2em;
    }

    .title-wrapper>button {
        background: inherit;
        border: none;
    }
    .title-wrapper>button:hover {
        cursor: pointer;
    }

`;
