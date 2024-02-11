import styled from 'styled-components'

export const AlbumItemWrapper = styled.div`
  /* fix an additional line on the end of NewAlbum carousel bug */
  padding-left: 1px;
  box-sizing: border-box;

  .top {
    position: relative;
    width: 118px;
    height: 100px;
    overflow: hidden;
    margin-top: 15px;

    img {
      width: 100px;
      height: 100px;
    }

    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 -570px;
      text-indent: -9999px;
    }
  }

  .bottom {
    font-size: 12px;
    width: 100px;
    .name {
      color: #000;
      ${(props) => props.theme.mixin.textNoWrap}
    }

    .artist {
      color: #666;
      ${(props) => props.theme.mixin.textNoWrap}
    }
  }
`
