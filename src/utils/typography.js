import Typography from 'typography';
import Wordpress2016 from 'typography-theme-wordpress-2016';

Wordpress2016.googleFonts = [
  {
    name: 'Open Sans',
    styles: ['400'],
  },
  {
    name: 'Special Elite',
    styles: ['400'],
  },
];
Wordpress2016.headerFontFamily = ['Special Elite', 'sans-serif'];
Wordpress2016.bodyFontFamily = ['Open Sans', 'sans-serif'];

Wordpress2016.overrideThemeStyles = () => {
  return {
    'h1, h2, h3, h4, h5, h6': {
      fontFamily: ['Special Elite', 'sans-serif'].join(','),
      letterSpacing: '0.1rem',
    },
    'a.gatsby-resp-image-link': {
      boxShadow: `none`,
    },
    'a': {
      color: '#313e5a',
    }
  };
};

const typography = new Typography (Wordpress2016);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles ();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
