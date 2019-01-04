import Typography from 'typography'

const typography = new Typography({
  baseFontSize: '18px',
  baseLineHeight: 1.55,
  headerFontFamily: ['Open Sans', 'sans-serif'],
  bodyFontFamily: ['Open Sans', 'sans-serif'],
  bodyWeight: 300,
  headerWeight: 600,
  boldWeight: 600,
  googleFonts: [
    {
      name: 'Open Sans',
      styles: ['300','400','400i','600'],
    },
  ],
  scaleRatio: 2.2,
  blockMarginBottom: 0.8,
})

export default typography
