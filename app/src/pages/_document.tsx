import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import React from 'react';

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<any> {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props =>
                        sheet.collectStyles(<App { ...props } />)
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        { initialProps.styles }
                        { sheet.getStyleElement() }
                    </>
                )
            }
        } finally {
            sheet.seal()
        }
    }

    render(): JSX.Element {
        // const favicon = `${publicPath}/favicon.ico`
        // const favicon16 = `${publicPath}/favicon-16x16.png`
        // const favicon32 = `${publicPath}/favicon-32x32.png`
        const url = 'https://www.marblegamble.io'

        return (
            <Html lang="en">
                <Head>
                    <link
                        href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
                        rel="stylesheet"/>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    {/*<link rel="shortcut icon" href={favicon} />*/ }
                    {/*<link rel="icon" type="image/png" sizes="16x16" href={favicon16} />*/ }
                    {/*<link rel="icon" type="image/png" sizes="32x32" href={favicon32} />*/ }
                    <meta property="og:locale" content="en_US"></meta>
                    <meta property="og:site_name" content="Marble Gamble"></meta>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}
