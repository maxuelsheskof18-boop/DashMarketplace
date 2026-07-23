# DashMarketplace - Dashboard de Separação EHF v4.2.31

Projeto pronto para GitHub Pages no repositório `DashMarketplace`.

## Como publicar

1. Extraia este ZIP.
2. Suba o conteúdo de dentro da pasta para a raiz do repositório `maxuelsheskof18-boop/DashMarketplace`.
3. Não suba o ZIP fechado e não cole conteúdo de `.js` dentro do `index.html`.
4. A raiz do repositório deve conter diretamente:

```text
.nojekyll
index.html
modules/
assets/
api/
site/
dist/
package.json
build.js
```

## Teste

Abra:

```text
https://maxuelsheskof18-boop.github.io/DashMarketplace/#bipagem?v=4231
```

No console rode:

```js
window.EHF_MOBILE_CAMERA_SCAN_VERSION
window.EHFMobileCameraScan
document.querySelector('script[src*="mobile-camera-scan"]')?.src
```

O esperado é:

```text
4.2.31-DASHMARKETPLACE-GHPAGES
object
.../DashMarketplace/modules/mobile-camera-scan.js?v=4231
```

## Câmera

A câmera só abre em HTTPS ou localhost. No GitHub Pages funciona por HTTPS. Clique em `Ler com câmera` e permita o acesso à câmera.
