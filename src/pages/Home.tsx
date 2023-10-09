import * as S from '@s/home.style';

import cloudyBg from '@img/cloudy.jpg';
import test from '@img/test-cover.webp';

const Home = () => {
  return (
    <S.container>
      <S.top>
        <S.topContainer bg={cloudyBg}>
          <S.topWrap>
            <S.topLeft>
              <div className="text">
                <div className="img-box">
                  <img src={test} alt="test" />
                </div>
                <p className="title">제목</p>
                <span className="artist">가수</span>
              </div>
              <div className="play">
                <button>
                  <span className="material-icons">skip_next</span>
                </button>
                <button>
                  <span className="material-icons">play_arrow</span>
                </button>
                <button>
                  <span className="material-icons">stop</span>
                </button>
              </div>
            </S.topLeft>
            <S.topRight>
              <button>
                <span className="material-icons">share</span>
              </button>
            </S.topRight>
          </S.topWrap>
        </S.topContainer>
      </S.top>
      <S.main>
        <S.mainContainer>
          <div className="title">
            <span>Playlist...</span>
          </div>
          <S.mainList>
            <ul>
              <li>
                <a href="">
                  <div className="img-box">
                    <img src={test} alt="" />
                  </div>
                  <p>노래 제목임</p>
                  <span>가수는</span>
                </a>
                <button>
                  <span className="material-icons">play_arrow</span>
                </button>
              </li>
              <li>
                <a href="">
                  <div className="img-box">
                    <img src={test} alt="" />
                  </div>
                  <p>노래 제목임</p>
                  <span>가수는</span>
                </a>
                <button>
                  <span className="material-icons">play_arrow</span>
                </button>
              </li>{' '}
              <li>
                <a href="">
                  <div className="img-box">
                    <img src={test} alt="" />
                  </div>
                  <p>노래 제목임</p>
                  <span>가수는</span>
                </a>
                <button>
                  <span className="material-icons">play_arrow</span>
                </button>
              </li>{' '}
              <li>
                <a href="">
                  <div className="img-box">
                    <img src={test} alt="" />
                  </div>
                  <p>노래 제목임</p>
                  <span>가수는</span>
                </a>
                <button>
                  <span className="material-icons">play_arrow</span>
                </button>
              </li>{' '}
              <li>
                <a href="">
                  <div className="img-box">
                    <img src={test} alt="" />
                  </div>
                  <p>노래 제목임</p>
                  <span>가수는</span>
                </a>
                <button>
                  <span className="material-icons">play_arrow</span>
                </button>
              </li>{' '}
              <li>
                <a href="">
                  <div className="img-box">
                    <img src={test} alt="" />
                  </div>
                  <p>노래 제목임</p>
                  <span>가수는</span>
                </a>
                <button>
                  <span className="material-icons">play_arrow</span>
                </button>
              </li>{' '}
              <li>
                <a href="">
                  <div className="img-box">
                    <img src={test} alt="" />
                  </div>
                  <p>노래 제목임</p>
                  <span>가수는</span>
                </a>
                <button>
                  <span className="material-icons">play_arrow</span>
                </button>
              </li>{' '}
              <li>
                <a href="">
                  <div className="img-box">
                    <img src={test} alt="" />
                  </div>
                  <p>노래 제목임</p>
                  <span>가수는</span>
                </a>
                <button>
                  <span className="material-icons">play_arrow</span>
                </button>
              </li>{' '}
              <li>
                <a href="">
                  <div className="img-box">
                    <img src={test} alt="" />
                  </div>
                  <p>노래 제목임</p>
                  <span>가수는</span>
                </a>
                <button>
                  <span className="material-icons">play_arrow</span>
                </button>
              </li>{' '}
              <li>
                <a href="">
                  <div className="img-box">
                    <img src={test} alt="" />
                  </div>
                  <p>노래 제목임</p>
                  <span>가수는</span>
                </a>
                <button>
                  <span className="material-icons">play_arrow</span>
                </button>
              </li>{' '}
              <li>
                <a href="">
                  <div className="img-box">
                    <img src={test} alt="" />
                  </div>
                  <p>노래 제목임</p>
                  <span>가수는</span>
                </a>
                <button>
                  <span className="material-icons">play_arrow</span>
                </button>
              </li>
            </ul>
          </S.mainList>
        </S.mainContainer>
      </S.main>
    </S.container>
  );
};

export default Home;
