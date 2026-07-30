# DashMarketplace v4.2.44

Correção do Resumo por Loja / Canal da bipagem para espelhar o Resumo Operacional por Loja.

- Busca /api/summary no tiny-worker.
- Usa perStore.situacaoEnvioCounts como fonte principal.
- Mostra grupos Aguardando, Em separação, Separadas e Embaladas / checkout com os mesmos canais.
- Conta bipadas por loja/canal e calcula restantes sobre o total operacional.
