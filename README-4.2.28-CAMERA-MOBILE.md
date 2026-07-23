# Dashboard Separação EHF v4.2.28 - Camera Mobile

Atualização em cima da base v4.2.27.

## Inclui
- Botão **Ler com câmera** na Conferência de Embalagem.
- Usa câmera traseira por padrão no mobile.
- Leitura nativa por BarcodeDetector quando disponível.
- Fallback por ZXing Browser via CDN quando o navegador não suporta BarcodeDetector.
- Fecha a câmera automaticamente ao localizar código e joga o valor no fluxo normal de Localizar pedido.
- Mantém busca por planilha/worker já existente.

## Requisitos
- Abrir em HTTPS, preferencialmente pelo Vercel.
- Permitir acesso à câmera no navegador.

## Teste
No console da tela de embalagem:

```js
window.EHF_EMBALAGEM_RUNTIME_VERSION
```

Deve retornar:

```text
4.2.28-CAMERA-MOBILE
```
