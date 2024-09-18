const icons: any = {
  user: ({ color, strokeWidth, width, height }: SvgProps) => (
    <svg  xmlns="http://www.w3.org/2000/svg"  width={width} height={height}  viewBox="0 0 24 24"  fill="none"  strokeWidth={strokeWidth} stroke={color}  strokeLinecap="round"  strokeLinejoin="round">
      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
      <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
    </svg>
  ),
  cart: ({ color, strokeWidth, width, height }: SvgProps) => (
    <svg  xmlns="http://www.w3.org/2000/svg"  width={width} height={height}  viewBox="0 0 24 24"  fill="none"  strokeWidth={strokeWidth} stroke={color}  strokeLinecap="round"  strokeLinejoin="round">
      <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
      <path d="M17 17h-11v-14h-2" />
      <path d="M6 5l14 1l-1 7h-13" />
    </svg>
  ),
  default: ({ color, strokeWidth, width, height }: SvgProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 22 24" strokeWidth={strokeWidth} stroke={color} fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19.5313 5.7925C20.2896 6.22367 20.7554 7.03075 20.75 7.90284V15.7938C20.75 16.6703 20.2701 17.4784 19.4955 17.9042L12.183 22.53C11.8205 22.729 11.4136 22.8334 11 22.8334C10.5864 22.8334 10.1795 22.729 9.817 22.53L2.5045 17.9042C2.12551 17.6971 1.80913 17.3919 1.58845 17.0207C1.36776 16.6494 1.25087 16.2257 1.25 15.7938V7.90175C1.25 7.02534 1.72992 6.21825 2.5045 5.7925L9.817 1.48084C10.1902 1.27504 10.6095 1.16711 11.0358 1.16711C11.462 1.16711 11.8813 1.27504 12.2545 1.48084L19.567 5.7925H19.5313Z"/>
      <path d="M11 16.3334V16.3434"/>
      <path d="M11 13.0833C11.4872 13.0848 11.9607 12.922 12.344 12.6212C12.7274 12.3204 12.9981 11.8992 13.1126 11.4256C13.227 10.952 13.1785 10.4537 12.9748 10.0111C12.7712 9.56842 12.4243 9.20736 11.9902 8.98616C11.5592 8.76538 11.0662 8.69693 10.5914 8.79193C10.1166 8.88694 9.68785 9.13981 9.375 9.5094"/>
    </svg>
  )
}

interface SvgProps {
  name: string,
  color?: string,
  strokeWidth?: string,
  width?: string,
  height?: string
}

export default function Svg({ name, color = '#000000', strokeWidth = "1.75", width = "24", height = "100%" }: SvgProps) {
  const svg = icons[name] || icons.default;
  return svg({color, strokeWidth, width, height});
}