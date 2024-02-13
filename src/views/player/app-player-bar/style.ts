import styled from 'styled-components'

interface IPlayerBarWrapper {
  islock: boolean
}
export const PlayerBarWrapper = styled.div<IPlayerBarWrapper>`
  position: fixed;
  z-index: 99;
  left: 0;
  right: 0;
  bottom: 0;
  height: ${(props) => (props.islock ? 52 : 0)}px;
  /* height: 52px; */
  background-position: 0 0;
  background-repeat: repeat;

  &:hover {
    height: 52px;
    .content {
      height: 47px;
    }
  }

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 0;
    height: ${(props) => (props.islock ? 47 : 0)}px;
  }

  .lyric {
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    bottom: 50px;
    background-color: rgba(0, 0, 0, 0.7);
    color: #fff;
    padding: 15px;
    border-radius: 10px;
  }

  .show-bar {
    position: absolute;
    z-index: 999;
    top: -14px;
    right: 15px;
    width: 52px;
    height: 67px;
    background-position: 0 -380px;

    .lock {
      display: block;
      width: 18px;
      height: 18px;
      margin: 6px 0 0 17px;
      background-position: ${(props) => (props.islock ? '-100' : '-80')}px -380px;
    }

    &:hover {
      height: 67px;
    }
  }
`

interface IBarControl {
  isplaying: string
}
export const BarControl = styled.div<IBarControl>`
  display: flex;
  align-items: center;

  .btn {
    cursor: pointer;
  }

  .prev,
  .next {
    width: 28px;
    height: 28px;
  }

  .prev {
    background-position: 0 -130px;

    &:hover {
      background-position: -30px -130px;
    }
  }

  .play {
    width: 36px;
    height: 36px;
    margin: 0 8px;
    background-position: 0
      ${(props) => (props.isplaying === 'true' ? '-165px' : '-204px')};

    &:hover {
      background-position: 0
        ${(props) => (props.isplaying === 'true' ? '-165px' : '-204px')};
    }
  }

  .next {
    background-position: -80px -130px;

    &:hover {
      background-position: -110px -130px;
    }
  }
`

export const BarPlayerInfo = styled.div`
  display: flex;
  width: 642px;
  align-items: center;

  .image {
    width: 34px;
    height: 34px;
    border-radius: 5px;
  }

  .info {
    flex: 1;
    color: #a1a1a1;
    margin-left: 10px;

    .song {
      color: #e1e1e1;
      position: relative;
      top: 8px;
      left: 8px;

      .singer-name {
        color: #a1a1a1;
        margin-left: 10px;
      }
    }

    .progress {
      display: flex;
      align-items: center;

      .ant-slider {
        position: relative;
        top: 1px;
        width: 493px;
        margin-right: 10px;

        .ant-slider-rail {
          height: 9px;
          background: url(${require('@/assets/img/progress_bar.png')}) right 0;
        }

        .ant-slider-track {
          height: 9px;
          background: url(${require('@/assets/img/progress_bar.png')}) left -66px;
        }

        .ant-slider-handle {
          width: 22px;
          height: 24px;
          border: none;
          margin-top: -4px;
          background: url(${require('@/assets/img/sprite_icon.png')}) 0 -250px;

          &::before {
            display: none;
          }

          &::after {
            display: none;
          }
        }
      }

      .time {
        .current {
          color: #e1e1e1;
        }
        .divider {
          margin: 0 3px;
        }
      }
    }
  }
`

interface IBarOperator {
  playmode: number
}

export const BarOperator = styled.div<IBarOperator>`
  display: flex;
  align-items: center;
  position: relative;
  top: 3px;

  .btn {
    width: 25px;
    height: 25px;
  }

  .left {
    display: flex;
    align-items: center;
  }

  .pip {
    background: url(${require('@/assets/img/pip_icon')});
  }

  .favor {
    background-position: -88px -163px;
  }

  .share {
    background-position: -114px -163px;
  }

  .right {
    display: flex;
    align-items: center;
    width: 126px;
    padding-left: 13px;
    background-position: -147px -248px;

    .volume {
      background-position: -2px -248px;
    }

    .loop {
      cursor: pointer;
      background-position: ${(props) => {
        switch (props.playmode) {
          case 1:
            return '-66px -248px'
          case 2:
            return '-66px -344px'
          default:
            return '-3px -344px'
        }
      }};
    }

    .playlist {
      padding-left: 18px;
      text-align: center;
      color: #ccc;
      width: 59px;
      background-position: -42px -68px;
    }
  }
`
