import styled from 'styled-components';
import { FLEX } from '../../styles/common';

export const HeaderContainer = styled.div`
    padding:  10px 20px;
    background-color: ${(p) => p.theme.CATSKILL_WHITE};
    color: ${(p) => p.theme.WATERLOO};
    font-size: ${(p) => p.theme.X_LARGE};
    font-weight: ${(p) => p.theme.SEMI_BOLD_FONT};
    box-shadow: 0 0 30px 0 rgba(41, 49, 73, 0.1);
    ${FLEX('center', 'space-between')};
`;

export const LogoImage = styled.img`
    width: 60px;
    height: 60px;
    object-fit: contain;
`;