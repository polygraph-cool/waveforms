// @flow
import React from 'react';
import styled from 'styled-components';

import { COLORS, BREAKPOINTS } from '../../constants';

import Link from '../Link';

const Header = () => {
  return (
    <HeaderElem>
      <TitleIntro>Let's Learn About</TitleIntro>
      <Title>Waveforms</Title>

      <Byline>
        By{' '}
        <strong>
          <Link
            font="Atlas Grotesk Web"
            external
            to="https://twitter.com/JoshWComeau"
            target="_blank"
          >
            Josh Comeau
          </Link>
        </strong>
      </Byline>
    </HeaderElem>
  );
};

const HeaderElem = styled.header`
  position: relative;
  margin-top: 196px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media ${BREAKPOINTS.lgMin} {
    margin-top: 222px;
  }

  @media (orientation: portrait) {
    margin-top: 146px;
  }
`;

const TitleIntro = styled.h3`
  font-weight: 200;
  color: ${COLORS.gray[500]};
  line-height: 1;
  letter-spacing: 3px;
  -webkit-font-smoothing: antialiased;
  font-family: 'Atlas Grotesk Web', Helvetica, Arial, sans-serif;
  margin-bottom: 16px;
  text-transform: uppercase;
  font-size: 20px;

  @media (orientation: portrait) {
    font-size: 3.5vw;
  }
`;

const Title = styled.h1`
  font-weight: 700;
  color: ${COLORS.gray[900]};
  letter-spacing: -3px;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  font-family: 'Canela Web', 'Times New Roman', serif;
  margin-bottom: 60px;

  @media (orientation: portrait) {
    font-size: 16vw;
  }

  @media (orientation: landscape) {
    font-size: 7vw;
    /* See note in TitleIntro for explanation about this negative margin */
    margin-left: -9px;
  }

  @media ${BREAKPOINTS.lgMin} {
    /*
      At a certain point, the 'vw' solution looks a little obnoxiously large.
      There is a clever way to do this using 'calc', but the simple way is
      clearer.
    */
    font-size: 92px;
  }
`;

const Byline = styled.p`
  font-family: 'Atlas Grotesk Web', Helvetica, Arial, sans-serif;

  @media (orientation: portrait) {
    font-size: 14px;
  }
`;

export default Header;
