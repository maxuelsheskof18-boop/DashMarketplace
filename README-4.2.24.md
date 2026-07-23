# Dashboard EHF v4.2.24

Correções desta versão:

- Romaneio: abre a janela de impressão antes da chamada assíncrona ao finalizar, reduzindo bloqueio de pop-up.
- Romaneio: adiciona botão interno "Imprimir romaneio" na própria página gerada.
- Romaneio: fallback por iframe e download HTML caso o navegador bloqueie a nova janela.
- Shopee: remove a segunda remessa de Shopee Envios.
- Shopee: troca a antiga "SHOPEE ENVIO - REMESSA 1" por "SPX ENTREGA - 1ª REMESSA".
- Shopee: mantém "SHOPEE ENVIO" como remessa única.
- Cache dos módulos atualizado para ?v=4224.
- site/ e dist/ sincronizados.

Depois de subir no GitHub, fazer Redeploy no Vercel sem cache.
