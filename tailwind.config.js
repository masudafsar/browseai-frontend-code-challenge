/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1440px',
    },
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '980px',
      },
      padding: {
        DEFAULT: '1rem',
      },
    },
    borderRadius: {
      none:'unset',
      sm: '.500rem',
      md: '.625rem',
      lg: '.750rem',
      full: '9999rem',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    fontSize: {
      sm: ['12px','18px'],
      md: ['14px','20px'],
      base: ['16px','24px'],
      lg: ['18px','28px'],
    },
    colors: {
      transparent:'transparent',
      white: '#ffffff',
      primary: {
        50: '#F4EBFF', // TODO: set correct color code
        100: '#F4EBFF',
        200: '#E9D7FE',
        400: '#B692F6',
        600: '#7F56D9',
        700: '#6941C6',
        800: '#53389E',
      },
      gray:{
        50:'#F9FAFB',
        100:'#F2F4F7',
        200:'#EAECF0',
        300:'#D0D5DD',
        400:'#98A2B3',
        500:'#667085',
        600:'#475467',
        800:'#1D2939',
        900:'#101828',
      },
      success: {
        50:'#ECFDF3',
        200:'#A6F4C5',
        400:'#32D583',
        500:'#12B76A',
        600:'#039855',
        700:'#027A48',
        800:'#05603A',
      },
      info: {
        50: '#f2f6ff', // TODO: set correct color code
        200:'#B2CCFF',
        600:'#155EEF',
        700:'#004EEB',
      },
      warning: {
        50:'#FFFAEB',
        200:'#FEDF89',
        300:'#FEC84B',
        400:'#FDB022',
        600:'#DC6803',
        700:'#B54708',
        800:'#93370D',
      },
      error: {
        50:'#FEF3F2',
        200:'#FECDCA',
        400:'#F97066',
        600:'#D92D20',
        700:'#B42318',
        800:'#912018',
      },
    },
    boxShadow: {
      none: 'unset',
      sm: '0px 1px 2px 0px rgba(16, 24, 40, 0.05);',
      md: '0px 1px 2px 0px rgba(16, 24, 40, 0.06), 0px 1px 3px 0px rgba(16, 24, 40, 0.10);'
    },
    extend: {
      spacing:{
        '0.5': '0.125rem',
        '1.5': '0.375rem',
        '2.5': '0.625rem',
        '3.5': '0.875rem',
        '4.5': '1.125rem',
        '5.5': '1.375rem',
      }
    },
  },
  plugins: [],
};

