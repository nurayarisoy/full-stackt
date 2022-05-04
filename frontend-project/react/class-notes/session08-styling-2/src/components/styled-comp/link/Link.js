import styled, { css } from 'styled-components';

export default styled.a`
  font-size: 1.2rem;
  transition: ease 0.25s all;
  text-decoration: none;
  color: #fff;
  ${(props) =>
    props.secondary &&
    css`
      background-color: #7e3b8e;
      border-radius: 8px;
      padding: 8px;
    `}
  : hover {
    font-size: 1.5rem;
    opacity: 0.6;
  }
  @media (max-width: 560px) {
    font-size: 1rem;
  }
`;
