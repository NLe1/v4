/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PropTypes from 'prop-types';
import { Layout } from '@components';
import styled from 'styled-components';
import { theme, mixins, media, Main } from '@styles';
import giphyAPI from 'giphy-js-sdk-core';
const { colors, fonts, navDelay } = theme;

// Famous last words:
// "It's just the 404 page so why not expose the dev API key"
const giphyClient = giphyAPI('LfXRwufRyt6PK414G2kKJBv3L8NdnxyR');
const tag = 'fail';

const StyledMainContainer = styled(Main)`
  ${mixins.flexCenter};
  flex-direction: column;
`;
// const StyledTitle = styled.h1`
//   color: ${colors.green};
//   font-family: ${fonts.SFMono};
//   font-size: 12vw;
//   line-height: 1;
//   ${media.bigDesktop`font-size: 200px;`}
//   ${media.phablet`font-size: 120px;`};
// `;
const StyledSubtitle = styled.h2`
  margin-top: 30px;
  color: ${colors.green};
  font-family: ${fonts.SFMono};
  font-size: 3vw;
  font-weight: 500;
  ${media.bigDesktop`font-size: 50px;`};
  ${media.phablet`font-size: 30px;`};
`;
const StyledHomeButton = styled(Link)`
  ${mixins.bigButton};
  margin-top: 40px;
`;

const NotFoundPage = ({ location }) => {
  const [gif, setGif] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  const getRandomGif = async () => {
    try {
      const response = await giphyClient.random('gifs', { tag });
      const newGif = response.data.images.original.mp4;
      setGif(newGif);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getRandomGif();
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const handleClick = e => {
    e.preventDefault();
    getRandomGif();
  };

  return (
    <Layout location={location}>
      <TransitionGroup component={null}>
        {isMounted && (
          <CSSTransition timeout={500} classNames="fade">
            <StyledMainContainer className="fillHeight">
              <StyledSubtitle>Page Not Found</StyledSubtitle>

              {/* // eslint-disable-next-line jsx-a11y/media-has-caption */}
              <video className="gif" src={gif} autoPlay loop />
              <StyledHomeButton onClick={handleClick}>Get random fail gifs </StyledHomeButton>
              <StyledHomeButton to="/">Go Home</StyledHomeButton>
            </StyledMainContainer>
          </CSSTransition>
        )}
      </TransitionGroup>
    </Layout>
  );
};

NotFoundPage.propTypes = {
  location: PropTypes.object.isRequired,
};

export default NotFoundPage;
