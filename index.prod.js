import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import dotenv from 'dotenv';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import path from 'path';

import store from './src/config/redux';
import App from './src/App';

dotenv.config();
const app = express();
const PORT = process.env.APP_PORT;

app.use('/static', express.static(path.resolve(__dirname, 'assets')));
app.use('/assets', express.static(path.resolve(__dirname, 'assets/file')));

app.get('/*', (req, res) => {
    const context = {};
    const component = ReactDOMServer.renderToString(
        <div id="root">
            <Provider store={store}>
                <StaticRouter location={req.url} context={context}>
                    <App />
                </StaticRouter>
            </Provider>
        </div>
    );

    const html = `<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Adaphan Exchanger</title>
<link rel="stylesheet" href="/static/app.css"/>
<meta name="keywords" content="Voucher Indodax, Exchanger, Voucher Exchange">
<link rel="canonical" href="https://adaphan.com/" />
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1">
<meta property="og:type" content="website">
<meta property="og:locale" content="id_ID">
<meta property="og:url" content="https://adaphan.com">
<meta property="og:title" content="Adaphan Exchanger">
<meta property="og:description" content="Adaphan Penukaran Digital - Partner Resmi Jual Beli Voucher Indodax">
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-PNFDSH3');</script>
<!-- End Google Tag Manager -->
</head>
<body>
${component}
<script src="/static/app.91fa9965b44ea3764348.js"></script>
</body>
</html>`;
    if (context.url) {
        res.writeHead(301, { Location: context.url });
        res.end();
    } else {
        res.send(html);
    }
});

app.listen(PORT, () => {
    console.log(`App Running on http://localhost:${PORT}`);
});
