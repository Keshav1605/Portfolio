declare namespace JSX {
  interface IntrinsicElements {
    "spline-viewer": SplineViewerProps
  }
}

interface SplineViewerProps {
  url?: string
  [key: string]: any
}
