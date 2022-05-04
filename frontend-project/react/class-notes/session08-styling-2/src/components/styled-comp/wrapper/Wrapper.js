import styled from 'styled-components';

export default styled.div`
  background-color: ${(props) => (props.bgColor ? props.bgColor : 'fff')};
  margin: auto;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
