import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 20,
        background: '#E8622A',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 900,
        borderRadius: 6,
        letterSpacing: '-0.5px',
      }}
    >
      D
    </div>,
    { ...size }
  )
}
