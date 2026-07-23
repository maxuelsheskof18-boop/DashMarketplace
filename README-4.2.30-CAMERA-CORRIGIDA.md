# EHF v4.2.30 - camera corrigida

Correção: o arquivo `modules/mobile-camera-scan.js` deve ser servido como script, não colado como conteúdo do `index.html`.

Validação no console:

```js
window.EHF_CAMERA_LOADER_VERSION
window.EHF_MOBILE_CAMERA_SCAN_VERSION
window.EHFMobileCameraScan
```

Esperado:

```txt
4.2.30-CAMERA-LOADER-CORRIGIDO
4.2.30-CAMERA-LOADER-CORRIGIDO
object
```

Subir a raiz do pacote no repositório `dashboard-separacao-ehf` e fazer Redeploy sem cache no Vercel.
