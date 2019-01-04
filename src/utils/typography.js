import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '17px',
  baseLineHeight: 1.55,
  headerFontFamily: ['Source Sans Pro', 'sans-serif'],
  bodyFontFamily: ['Source Sans Pro', 'sans-serif'],
  bodyWeight: 400,
  headerWeight: 700,
  boldWeight: 600,
  googleFonts: [
    {
      name: 'Source Sans Pro',
      styles: ['400','400i','600','700'],
    },
  ],
  scaleRatio: 2.1,
  blockMarginBottom: 0.8,
})

export default typography
