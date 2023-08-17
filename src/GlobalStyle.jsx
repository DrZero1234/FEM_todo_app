import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --fw-normal: 400;
        --fw-bold: 700;

        --primary-600: hsl(220, 98%, 61%);
        --checkbox-bg: hsl(192, 100%, 67%) to hsl(280, 87%, 65%);

        --mobile-size: 38em;
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
        display: grid;
        min-height: 100vh;
        // Change on theme
        background-color: hsl(0, 0%, 98%);
    }

    .container {
        display: grid;
        grid-template-rows: 1fr 5fr;
    }

    .main-wrapper {
        position:relative;
    }
    .main-content-wrapper {
        position: absolute;
        min-width: 100%;
    }
`;
