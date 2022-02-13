import styled from 'styled-components/native';
import theme from 'styles/GlobalStyles';

export const SContainer = styled.View`
    margin-left: 12px;
    margin-bottom: 28px;
`;

export const STitleContainer = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    margin-bottom: 4px;
`;

export const STitleList = styled.Text`
    color: ${theme.colors.white};
    width: 100%;
    font-size: 18px; 
    margin-left: 6px; 
    font-weight: 700;
    margin-right: 8px;
    text-align: left;
`;

export const SSubtitleList = styled.Text`
    color: ${theme.colors.white};
    font-size: 13px; 
    margin-left: 6px; 
    margin-bottom: 4px;
    font-weight: 400;
    width: 100%;
    opacity: 0.9;
`;

