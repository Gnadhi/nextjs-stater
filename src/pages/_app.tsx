import * as React from 'react'; 
import type { AppProps } from 'next/app'; 

import 'tailwindcss/tailwind.css'; 

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return <Component {...pageProps} />
}

export default MyApp
