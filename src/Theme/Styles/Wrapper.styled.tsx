import {createGlobalStyle} from 'styled-components';

const Wrapper = createGlobalStyle`
  *{
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Arial, Helvetica, Sans-Serif;
    font-size: 14px;
    line-height: 1.5;
    color: #c9d1d9;
    .octicon {
    display: inline-block;
    overflow: visible !important;
    vertical-align: text-bottom;
    fill: currentColor;
    }
  }
`;

export default Wrapper;
