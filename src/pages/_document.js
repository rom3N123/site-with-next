import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="ru">
      <Head >
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <meta name="description" content="Строительство домов во Владимирской области" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Roboto&display=swap" rel="stylesheet" />
        <meta charset="utf-8" />
        <link rel="icon" href="/monostroy.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Монострой</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
