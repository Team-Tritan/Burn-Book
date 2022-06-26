'use strict';

import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
    return (
        <Html lang="en">
            <Head />
            <title>🔥 Burn Book</title>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
                integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
                crossOrigin="anonymous"
            />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta content="🔥 Burn Book" name="title" />
            <meta
                content="Just like in mean girls, but a digital version. Write spiteful comments about others for the world to see."
                name="description"
            />
            <meta
                content="Just like in mean girls, but a digital version. Write spiteful comments about others for the world to see."
                name="keywords"
            />
            <meta content="index, follow" name="robots" />
            <meta content="English" name="language" />
            <meta content="Team Tritan" name="author" />
            <meta property="og:title" content="🔥 Burn Book" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://bb.tritan.dev" />
            <meta
                property="og:description"
                content="Just like in mean girls, but a digital version. Write spiteful comments about others for the world to see."
            />
            <link rel="icon" href="/av.jpg" />
            <meta name="theme-color" content="#5c9dff"></meta>
            <style>
                {`
        .body {
          background-color: #000;
        }
        .btn{
            background-color: #000;
            border-color: #5c9dff
          }
          .navbar-nav {
            display: flex;
            margin: auto;
        }
        .navbar-nav .nav-link {
            margin-right: 25px;
            margin-left: 25px;
        }
          `}
            </style>
            <body className={'bg-black'}>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
