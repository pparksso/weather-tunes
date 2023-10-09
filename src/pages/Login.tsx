import * as S from '@s/login.style';

const Login = () => {
  return (
    <S.container>
      <S.wrap>
        <S.title>
          <h1>Weather Tunes</h1>
        </S.title>
        <S.loginBtnBox>
          <button>
            <span>Log in to Spotify</span>
          </button>
        </S.loginBtnBox>
      </S.wrap>
    </S.container>
  );
};

export default Login;
