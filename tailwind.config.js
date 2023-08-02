/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    borderRadius: {
      sm: '8px',
      md: '10px',
      lg: '12px',
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
    },
    fontSize: {
      sm: ['12px','18px'],
      base: ['14px','20px'],
      lg: ['18px','28px'],
    },
    colors: {
      white: '#ffffff',
      primary: {
        100: '#F4EBFF',
        400: '#B692F6',
        600: '#7F56D9',
        700: '#6941C6',
        800: '#53389E',
      },
      gray:{
        50:'#F9FAFB',
        100:'#F2F4F7',
        200:'#EAECF0',
        400:'#98A2B3',
        500:'#667085',
        600:'#475467',
        800:'#1D2939',
        900:'#101828',
      },
      success: {
        50:'#ECFDF3',
        400:'#32D583',
        500:'#12B76A',
        600:'#039855',
        700:'#027A48',
        800:'#05603A',
      },
      warning: {
        50:'#FFFAEB',
        300:'#FEC84B',
        400:'#FDB022',
        600:'#DC6803',
        700:'#B54708',
        800:'#93370D',
      },
      error: {
        50:'#FEF3F2',
        400:'#F97066',
        600:'#D92D20',
        800:'#912018',
      },
    },
    extend: {},
  },
  plugins: [],
};

