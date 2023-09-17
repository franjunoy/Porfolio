const metaCharset: HTMLMetaElement = document.createElement('meta');
metaCharset.name = 'charset';
metaCharset.content = 'UTF-8';

const linkIcon: HTMLLinkElement = document.createElement('link');
linkIcon.rel = 'icon';
linkIcon.type = 'image/svg+xml';
linkIcon.href = '/vite.svg';

const metaViewport: HTMLMetaElement = document.createElement('meta');
metaViewport.name = 'viewport';
metaViewport.content = 'width=device-width, initial-scale=1.0';

const title: HTMLTitleElement = document.createElement('title');
title.textContent = 'Vite + React + TS';

const rootDiv: HTMLDivElement = document.createElement('div');
rootDiv.id = 'root';

const scriptModule: HTMLScriptElement = document.createElement('script');
scriptModule.type = 'module';
scriptModule.src = '/src/main.tsx';

const body: HTMLBodyElement = document.createElement('body');
body.appendChild(rootDiv);
body.appendChild(scriptModule);

const html: HTMLHtmlElement = document.createElement('html');
html.lang = 'en';
html.appendChild(metaCharset);
html.appendChild(linkIcon);
html.appendChild(metaViewport);
html.appendChild(title);
html.appendChild(body);

document.documentElement.replaceWith(html);