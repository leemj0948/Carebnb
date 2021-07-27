import { css } from 'styled-components';

export const flexSet = (justifyContent, alignItems) => css`
  font-family: 'Open Sans Condensed';
  font-size: 1.3rem;
  display: flex;
  justify-content: ${justifyContent};
  align-items: ${alignItems};
  margin: 0 auto;
`;

const Theme = {
  flexSet,
};

export default Theme;
