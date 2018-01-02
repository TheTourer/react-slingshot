import { injectGlobal } from 'emotion';

const vin_blue = '#5bb7db';
const vin_green = '#60b044';
const vin_red = '#ff0000';

injectGlobal`
  body {
    font: 14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.4em;
    color: #4d4d4d;
    min-width: 230px;
    max-width: 550px;
    margin: 0 auto;
    -webkit-font-smoothing: antialiased;
    -moz-font-smoothing: antialiased;
    font-smoothing: antialiased;
    font-weight: 300;
  }

  td {
    padding: 12px;
  }

  h2 {
    color: ${vin_blue};
  }

  .savings { color: ${vin_green}; }
  .loss { color: ${vin_red}; }
  input.small { width: 46px; }
  td.fuel-savings-label { width: 175px; }
`;
