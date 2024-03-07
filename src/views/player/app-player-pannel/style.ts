import { MutableRefObject } from 'react'
import styled from 'styled-components'

export const PlayerPannelWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: 46px;
  transform: translateX(-50%);
  width: 986px;
  height: 301px;
  color: #e2e2e2;

  .main {
    position: relative;
    display: flex;
    height: 260px;
    overflow: hidden;
    background: url(${require('@/assets/img/playpanel_bg.png')}) -1014px 0 repeat-y;

    .image {
      position: absolute;
      left: 2px;
      top: -360px;
      width: 980px;
      height: auto;
      opacity: 0.2;
    }
  }
`

export const PannelHeaderWrapper = styled.div`
  display: flex;
  height: 41px;
  line-height: 41px;
  background: url(${require('@/assets/img/playpanel_bg.png')}) 0 0;
`

export const HeaderLeftWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 553px;
  padding: 0 25px;

  h3 {
    color: #e2e2e2;
    font-weight: 700;
  }

  .operator {
    color: #ccc;

    button {
      background-color: transparent;
      color: #ccc;
    }

    .icon {
      display: inline-block;
      width: 16px;
      height: 16px;
      position: relative;
      top: 4px;
      right: 2px;
    }

    .favor {
      background-position: -24px 0;
    }

    .remove {
      width: 13px;
      background-position: -51px 0;
    }
  }
`

export const HeaderRightWrapper = styled.div`
  flex: 1;
  text-align: center;
  color: #fff;
  font-size: 14px;

  .icon {
    float: right;
    position: relative;
    top: 5px;
    right: 10px;
    width: 30px;
    height: 30px;
    line-height: 30px;
    background-position: -195px -21px;
    cursor: pointer;
  }
`

export const PannelListWrapper = styled.div`
  position: relative;
  width: 553px;
  padding: 2px;
  overflow-y: auto;

  .play-item {
    padding: 0 8px 0 25px;
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    height: 28px;
    line-height: 28px;
    color: #ccc;
    cursor: pointer;

    &:hover {
      color: #fff;
      background-color: #000;
    }

    .left {
      flex: 1;
    }

    &.active {
      color: #fff;
      background-color: #000;

      .left::before {
        content: '';
        position: absolute;
        left: 8px;
        width: 10px;
        height: 13px;
        top: 8px;
        background: url(${require('@/assets/img/playlist_sprite.png')}) -182px 0;
      }
    }

    .middle {
      display: none;
      position: relative;
      top: 4px;
      height: 28px;
      line-height: 28px;
      margin-right: 8px;

      .icon {
        display: inline-block;
        width: 13px;
        height: 16px;
        margin: 0 3px;
      }
      .favor {
        background-position: -24px 0;
        &:hover {
          background-position: -24px -20px;
        }
      }
      .share {
        background-position: 0 0;
        &:hover {
          background-position: 0 -20px;
        }
      }
      .download {
        background-position: -57px -50px;
        &:hover {
          background-position: -80px -50px;
        }
      }
      .delete {
        background-position: -51px 0;

        &:hover {
          background-position: -51px -20px;
        }
      }
    }

    .right {
      position: relative;
      display: flex;
      align-items: center;

      .singer {
        width: 80px;
      }

      .duration {
        width: 45px;
      }

      .link {
        margin-left: 20px;
        width: 14px;
        height: 16px;
        background-position: -100px 0;
      }
    }

    &:hover {
      .middle {
        display: block;
      }
    }
  }
`

interface PanelLyricProps {
  ref: MutableRefObject<any>
}
export const PannelLyricWrapper = styled.div<PanelLyricProps>`
  position: relative;
  flex: 1;
  margin: 21px 0 20px 0;
  overflow: scroll;

  &::-webkit-scrollbar {
    display: none;
  }

  .lrc-content {
    .lrc-item {
      height: 32px;
      text-align: center;
      color: #989898;

      &.active {
        color: #fff;
        font-size: 14px;
      }
    }
  }
`
