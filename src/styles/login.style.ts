import styled from 'styled-components';

export const container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.6) 0, #121212 100%);
  display: flex;
  justify-content: center;
`;

export const wrap = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const title = styled.div`
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    color: #dedede;
  }
`;

export const loginBtnBox = styled.div`
  text-align: center;
  button {
    border-radius: 500px;
    padding: 1rem 5rem;
    background-color: #1ed760;
    &:hover {
      background-color: #4edf64;
      transform: scale(1.04);
    }
  }
  span {
    color: #000;
    font-weight: 700;
  }
`;
