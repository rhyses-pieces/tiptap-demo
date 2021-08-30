import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts-test-beryl.vercel.app/css?family=Open%20Sans:ital,wght@1,400;0,400;0,700;1,700&family=Merriweather:ital,wght@1,400;0,400;0,700;1,700&family=Inconsolata:ital,wght@0,400;0,700&family=Source%20Code%20Pro:ital,wght@0,400;1,400;0,700;1,700&family=EB%20Garamond:ital,wght@0,400;0,700;1,400;1,700&family=Patrick%20Hand:ital,wght@0,400&family=Vollkorn:ital,wght@1,400;0,400;0,700;1,700&family=Frank%20Ruhl%20Libre:ital,wght@0,400;0,700&family=IBM%20Plex%20Mono:ital,wght@0,400;1,400;0,700;1,700&family=Itim:ital,wght@0,400&family=Space%20Mono:ital,wght@0,400;1,400;1,700;0,700&family=Nanum%20Pen%20Script:ital,wght@0,400&family=Courier%20Prime:ital,wght@0,400;1,400;1,700;0,700&family=Atkinson%20Hyperlegible:ital,wght@0,400;1,400;1,700;0,700&family=DotGothic16:ital,wght@0,400&display=swap" 
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument