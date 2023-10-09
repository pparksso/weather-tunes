import { styled } from 'styled-components';

interface TopContainerProps {
  bg: string;
}

export const container = styled.div`
  background-color: #000;
  width: 100%;
  height: 100%;
`;

export const top = styled.section`
  height: 25rem;
`;

export const topContainer = styled.div<TopContainerProps>`
  height: 100%;
  width: 100%;
  background-image: url(${(props) => props.bg});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;
`;

export const topWrap = styled.div`
  padding: 0 7rem 1rem 7rem;
  width: 100%;
  display: flex;
`;

export const topLeft = styled.div`
  display: flex;
  .text {
    display: flex;
    align-items: flex-end;
    padding-right: 10rem;
  }
  .img-box {
    width: 60px;
    height: 60px;
    border-radius: 6px;
    overflow: hidden;
    margin-right: 20px;
  }
  .title {
    color: #fff;
    font-size: 1.2rem;
    font-weight: 600;
    margin-right: 10px;
  }
  .artist {
    color: #fff;
  }
  .play {
    display: flex;
    align-items: flex-end;
    margin-right: 5rem;
    .material-icons {
      font-size: 2rem;
      color: #fff;
    }
  }
`;

export const topRight = styled.div`
  display: flex;
  align-items: flex-end;
  button {
    display: inline-flex;
  }
  .material-icons {
    color: #fff;
    font-size: 2rem;
  }
`;

export const main = styled.section`
  display: flex;
  justify-content: center;
  padding: 3rem 0;
`;

export const mainContainer = styled.div`
  width: 700px;
  .title {
    margin-bottom: 2rem;
    span {
      font-size: 2rem;
    }
  }
`;

export const mainList = styled.div`
  ul {
    background-color: #121212;
    li {
      width: 100%;
      position: relative;
      &:hover {
        button {
          opacity: 1;
          transform: translateY(-50%);
        }
      }
    }
  }
  a {
    padding: 1rem;
    display: flex;
    align-items: center;
    .img-box {
      width: 45px;
      height: 45px;
      margin-right: 1rem;
    }
    p {
      font-weight: 700;
      color: #fff;
      margin-right: 1rem;
    }
    span {
      color: #fff;
    }
    &:hover {
      background-color: #242424;
    }
  }
  button {
    opacity: 0;
    border-radius: 100%;
    background-color: #1ed760;
    position: absolute;
    right: 1rem;
    top: 50%;
    transform: translateY(-30%);
    width: fit-content;
    height: fit-content;
    transition: all 0.3s ease;
    .material-icons {
      color: #fff;
      font-size: 2.7rem;
    }
  }
`;
