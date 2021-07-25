import { css } from 'styled-components';

export const FADE_ANIMATION_IN = (transitType = 'FAST_TRANSIT') => css`
    opacity: 0;
    animation: fadeAnimationIn ${(p) => p.theme[transitType]} ease forwards;
    @keyframes fadeAnimationIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
    }
`;

export const FLEX = (
    align = null,
    justify = null,
    direction = null,
) => css`
    display: flex;
    align-items: ${align};
    justify-content: ${justify};
    flex-direction: ${direction};
`;

export const TRUNCATE_TEXT = (
    maxWidth = null,
) => css`
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    max-width: ${maxWidth};
`;

export const CLAMP_TEXT = (
    lines = 3,
) => css`
    display: -webkit-box;
    -webkit-line-clamp: ${lines};
    -webkit-box-orient: vertical;
    overflow: hidden;
`;
