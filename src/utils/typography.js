import Typography from 'typography'
import noriegaTheme from 'typography-theme-noriega'
noriegaTheme.bodyWeight = 300
noriegaTheme.baseFontSize = '16px'
noriegaTheme.scaleRatio = 1.8
noriegaTheme.googleFonts = [
  {
    name: 'Lato',
    styles: [
      '300',
      '300i',
      '700',
      '700i',
    ],
  },
]

const typography = new Typography(noriegaTheme)

export default typography
