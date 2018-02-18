import styled from 'styled-components';

import { BREAKPOINTS } from '../../constants';

// TODO: Support different 'levels'?

export default styled.h4`
  margin-bottom: 25px;
  font-size: 30px;
  font-weight: 700;
  -webkit-font-smoothing: antialiased;
  font-family: 'Atlas Grotesk Web';
  letter-spacing: -1px;

  @media ${BREAKPOINTS.sm} {
    font-size: 25px;
  }

  @media ${BREAKPOINTS.mdMin} {
    font-size: 32px;
  }
`;
