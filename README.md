# DashMarketplace v4.2.32 - câmera iOS + mobile limpo

Projeto pronto para GitHub Pages em `/DashMarketplace/`.

## Correções

- Câmera funcionando em Android usando detector nativo quando disponível.
- iOS usa `html5-qrcode` como fallback, porque o BarcodeDetector/Shape Detection do Safari iOS não é confiável.
- Botão `Foto do código` para versões/navegadores iOS que bloqueiam câmera ao vivo.
- Interface mobile mais limpa: campo de bipe destacado, botões grandes, uma coluna e menos poluição visual.
- Mantém leitor físico e digitação manual.

## Teste

Abra:

```text
https://maxuelsheskof18-boop.github.io/DashMarketplace/#bipagem?v=4232
```

No console:

```js
window.EHF_MOBILE_CAMERA_SCAN_VERSION
window.EHFMobileCameraScan
````

Deve retornar `4.2.32-IOS-COMPAT-MOBILE-CLEAN` e um objeto.
