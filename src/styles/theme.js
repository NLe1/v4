import { hex2rgba } from '../../src/utils';

import ColorScheme from 'color-scheme';

const scheme = new ColorScheme();
scheme
  .from_hue(parseInt(360 * Math.random())) // Start the scheme
  .scheme('triade') // Use the 'triade' scheme, that is, colors
  // selected from 3 points equidistant around
  // the color wheel.
  .variation('pastel'); // Use the 'soft' color variation

let colors = scheme.colors();
colors = colors.map(color => `#${color}`);

const ACCENT = colors[11];
const DARK_BG = colors[9];

const theme = {
  colors: {
    darkNavy: DARK_BG,
    navy: colors[9],
    lightNavy: colors[3],
    lightestNavy: colors[7],
    slate: colors[10],
    lightSlate: colors[2],
    lightestSlate: colors[3],
    white: ACCENT,
    green: colors[6],
    transGreen: hex2rgba(ACCENT, 0.15),
    shadowNavy: hex2rgba(DARK_BG, 0.7),
  },

  fonts: {
    Calibre:
      'Calibre, San Francisco, SF Pro Text, -apple-system, system-ui, BlinkMacSystemFont, Roboto, Helvetica Neue, Segoe UI, Arial, sans-serif',
    SFMono: 'SF Mono, Fira Code, Fira Mono, Roboto Mono, Lucida Console, Monaco, monospace',
  },

  fontSizes: {
    xs: '12px',
    smish: '13px',
    sm: '14px',
    md: '16px',
    lg: '18px',
    xl: '20px',
    xxl: '22px',
    h3: '32px',
  },

  easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
  transition: 'all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1)',

  borderRadius: '3px',
  navHeight: '100px',
  navScrollHeight: '70px',
  margin: '20px',

  tabHeight: 42,
  tabWidth: 120,
  radius: 3,

  hamburgerWidth: 30,
  hamBefore: `top 0.1s ease-in 0.25s, opacity 0.1s ease-in`,
  hamBeforeActive: `top 0.1s ease-out, opacity 0.1s ease-out 0.12s`,
  hamAfter: `bottom 0.1s ease-in 0.25s, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19)`,
  hamAfterActive: `bottom 0.1s ease-out, transform 0.22s cubic-bezier(0.215, 0.61, 0.355, 1) 0.12s`,

  navDelay: 1000,
  loaderDelay: 2000,
};

export default theme;
