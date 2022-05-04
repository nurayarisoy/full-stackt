import styled from 'styled-components';

export default styled.h1`
  color: ${(props) => props.headerColor || '#484848'};
  font-size: 1.5rem;
  margin: 1rem;
`;
