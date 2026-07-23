(function(){
  'use strict';
  const VERSION = '4.2.34-ROMANEIO-MOBILE-PC-CLEAN';
  const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbwQ8-Rn-zZJQM0fLm9js3ErtJZefRnHP55E3M0r3Z_TIXS_skTioZ6p3yHqTLFYxPU9/exec';
  window.EHF_ROMANEIO_MOBILE_PC_VERSION = VERSION;

  function injectStyle(){
    if(document.getElementById('ehf-romaneio-mobile-pc-style')) return;
    const st=document.createElement('style');
    st.id='ehf-romaneio-mobile-pc-style';
    st.textContent = `
      .ehf-romaneios-panel{margin:12px 0 14px;padding:12px;border:1px solid rgba(255,138,0,.28);border-radius:14px;background:linear-gradient(135deg,rgba(255,138,0,.10),rgba(13,18,27,.94));box-shadow:0 12px 28px rgba(0,0,0,.22)}
      .ehf-romaneios-head{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:10px}
      .ehf-romaneios-head h3{margin:0;color:#fff;font-size:15px}.ehf-romaneios-head small{display:block;color:#9ca3af;font-size:10px;margin-top:2px}
      .ehf-romaneio-actions{display:flex;gap:7px;align-items:center;flex-wrap:wrap}.ehf-romaneio-btn{border:0;border-radius:9px;padding:8px 10px;background:#ff8a00;color:#111;font-weight:900;font-size:10px;cursor:pointer}.ehf-romaneio-btn.secondary{background:#1f2937;color:#fff;border:1px solid rgba(255,255,255,.12)}
      .ehf-romaneio-month{background:#05070a;color:#fff;border:1px solid rgba(255,255,255,.14);border-radius:8px;padding:8px 9px;font-size:11px}
      .ehf-romaneios-list{display:grid;gap:8px}.ehf-romaneio-item{display:grid;grid-template-columns:minmax(0,1fr) auto;gap:10px;align-items:center;border:1px solid rgba(255,255,255,.08);border-radius:12px;background:rgba(7,10,14,.76);padding:10px}
      .ehf-romaneio-title{font-weight:950;color:#fff;font-size:12px}.ehf-romaneio-meta{margin-top:4px;color:#aeb6c2;font-size:10px;line-height:1.45}.ehf-romaneio-status{display:inline-flex;padding:3px 7px;border-radius:999px;background:rgba(39,174,96,.13);border:1px solid rgba(39,174,96,.28);color:#8ff0ad;font-size:9px;font-weight:900;margin-right:5px}.ehf-romaneio-status.finalizado{background:rgba(59,130,246,.13);border-color:rgba(59,130,246,.32);color:#bfdbfe}.ehf-romaneio-print{display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end}.ehf-romaneio-empty{color:#9ca3af;font-size:11px;padding:8px;border:1px dashed rgba(255,255,255,.14);border-radius:10px;text-align:center}
      @media(max-width:760px){
        body[data-active-module="bipagem"]{background:#05070a!important;overflow-x:hidden!important}
        body[data-active-module="bipagem"] .enterprise-sidebar{display:none!important}
        body[data-active-module="bipagem"] .enterprise-layout,body[data-active-module="bipagem"] .app-shell{grid-template-columns:1fr!important;margin:0!important;padding:0!important;width:100%!important;max-width:100%!important}
        body[data-active-module="bipagem"] .topbar{padding:7px 9px!important;min-height:42px!important}
        body[data-active-module="bipagem"] .topbar .title{font-size:12px!important}
        #view-bipagem.active .bip-pro-page{padding:8px!important;margin:0!important;max-width:100%!important;width:100%!important}
        #view-bipagem.active .bip-pro-header{display:none!important}
        #view-bipagem.active #bip-session-panel{border-radius:13px!important;padding:10px!important;margin:0 0 9px!important;box-shadow:none!important;position:relative!important}
        #view-bipagem.active #bip-session-panel h3{font-size:13px!important;margin-bottom:2px!important}
        #view-bipagem.active #bip-session-description{font-size:10px!important;line-height:1.3!important}
        #view-bipagem.active .bip-session-summary-grid{display:none!important}
        #view-bipagem.active .bip-session-actions{display:grid!important;grid-template-columns:1fr 1fr;gap:6px!important;width:100%!important}
        #view-bipagem.active .bip-session-actions .bip-session-pill{justify-content:center!important;padding:6px!important;font-size:10px!important}
        #view-bipagem.active .bip-session-btn{padding:9px 7px!important;font-size:10px!important;min-height:36px!important}
        #view-bipagem.active .bip-session-inline{padding-top:8px!important;margin-top:8px!important}
        #view-bipagem.active .bip-session-inline-note{display:none!important}
        #view-bipagem.active .bip-session-form{display:grid!important;grid-template-columns:1fr!important;gap:7px!important}
        #view-bipagem.active .bip-session-field label{font-size:8px!important}
        #view-bipagem.active .bip-session-field input,#view-bipagem.active .bip-session-field select,#view-bipagem.active .bip-session-field textarea{padding:10px!important;font-size:13px!important;min-height:40px!important}
        #view-bipagem.active .bip-scan-hero{padding:10px!important;border-radius:13px!important;margin:0 0 9px!important}
        #view-bipagem.active .scan-topline strong{font-size:11px!important}
        #view-bipagem.active .scan-hint{font-size:9px!important;margin-top:5px!important}
        #view-bipagem.active #input-leitor-codigo{height:88px!important;font-size:27px!important;text-align:center!important;border-radius:12px!important}
        #view-bipagem.active .ehf-camera-btn,#view-bipagem.active .ehf-pack-camera-btn{width:100%!important;margin:7px 0 0!important;min-height:42px!important;border-radius:12px!important;font-size:13px!important}
        #view-bipagem.active .bip-kpi-grid{display:grid!important;grid-template-columns:1fr 1fr!important;gap:8px!important;margin:8px 0!important}
        #view-bipagem.active .bip-kpi-card{padding:9px!important;min-height:72px!important}
        #view-bipagem.active .bip-kpi-card:nth-child(n+3){display:none!important}
        #view-bipagem.active .bip-pro-insights,#view-bipagem.active .bip-side-column,#view-bipagem.active #bip-resumo-rapido-flutuante{display:none!important}
        #view-bipagem.active .bip-pro-bottom{display:block!important;margin-top:8px!important}
        #view-bipagem.active .bip-history-card{padding:10px!important;border-radius:13px!important}
        #view-bipagem.active .bip-history-topbar h4{font-size:13px!important}.bip-history-hint{display:none!important}
        #view-bipagem.active .table-responsive{max-height:260px!important;overflow:auto!important}
        #view-bipagem.active #tabela-historico-bipagem{font-size:10px!important;min-width:520px!important}
        #view-bipagem.active #tabela-historico-bipagem th:nth-child(3),#view-bipagem.active #tabela-historico-bipagem td:nth-child(3),#view-bipagem.active #tabela-historico-bipagem th:nth-child(4),#view-bipagem.active #tabela-historico-bipagem td:nth-child(4),#view-bipagem.active #tabela-historico-bipagem th:nth-child(6),#view-bipagem.active #tabela-historico-bipagem td:nth-child(6){display:none!important}
        #view-bipagem.active .ehf-romaneios-panel{padding:10px!important;margin:8px 0!important;border-radius:13px!important}
        #view-bipagem.active .ehf-romaneios-head{align-items:flex-start;flex-direction:column;margin-bottom:8px}.ehf-romaneio-actions{width:100%}.ehf-romaneio-btn,.ehf-romaneio-month{flex:1;min-height:36px}.ehf-romaneio-item{grid-template-columns:1fr!important}.ehf-romaneio-print{justify-content:stretch}.ehf-romaneio-print button{flex:1}
      }
    `;
    document.head.appendChild(st);
  }

  function monthKey(date=new Date()){
    const y=date.getFullYear(); const m=String(date.getMonth()+1).padStart(2,'0'); return `${y}_${m}`;
  }
  function jsonp(action, params={}){
    return new Promise((resolve,reject)=>{
      const cb='ehf_jsonp_'+Date.now()+'_'+Math.random().toString(36).slice(2);
      const url=new URL(WEB_APP_URL);
      url.searchParams.set('action',action);
      Object.entries(params||{}).forEach(([k,v])=>{ if(v!==undefined && v!==null) url.searchParams.set(k,String(v)); });
      url.searchParams.set('callback',cb);
      const s=document.createElement('script');
      const timer=setTimeout(()=>{ cleanup(); reject(new Error('Tempo esgotado ao consultar planilha')); },15000);
      function cleanup(){ clearTimeout(timer); try{ delete window[cb]; }catch(_){} s.remove(); }
      window[cb]=(data)=>{ cleanup(); resolve(data); };
      s.onerror=()=>{ cleanup(); reject(new Error('Falha ao consultar planilha')); };
      s.src=url.toString(); document.body.appendChild(s);
    });
  }
  function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));}
  function normalizeRow(row){
    return {
      key: row.romaneio_key || row.session_id || row.arquivo || '', session: row.session_id || '', arquivo: row.arquivo || row.file_name || '', status: row.status || '', canal: row.canal || '', conta: row.conta || row.account || '', coletor: row.coletor || '', conferente: row.conferente || '', inicio: row.inicio || '', fim: row.fim || '', leituras: Number(row.leituras || 0), pedidos: Number(row.pedidos || 0), unidades: Number(row.unidades || 0), divergentes: Number(row.divergentes || 0), html: row.html_salvo || row.html || '', data: row.data_registro || row.data_local || ''
    };
  }
  function buildFallbackHtml(r, mode){
    const title=esc(r.arquivo || ('romaneio-'+(r.session||r.key||'')));
    return `<!doctype html><html><head><meta charset="utf-8"><title>${title}</title><style>body{font-family:Arial,sans-serif;margin:28px;color:#111}h1{margin:0;font-size:24px}.head{display:flex;justify-content:space-between;border-bottom:3px solid #111;padding-bottom:12px}.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin:16px 0}.box{border:1px solid #bbb;padding:10px}.box span{display:block;font-size:10px;text-transform:uppercase;color:#555}.totals{display:flex;gap:12px;margin:18px 0}.totals div{border:2px solid #111;padding:12px 18px}.sign{display:grid;grid-template-columns:1fr 1fr;gap:50px;margin-top:75px}.sig{border-top:1px solid #111;text-align:center;padding-top:7px}@media print{body{margin:12mm}}</style></head><body><div class="head"><div><h1>EHF LOGÍSTICA</h1><div>Romaneio salvo em planilha</div></div><div><b>${title}</b><br>${new Date().toLocaleString('pt-BR')}</div></div><div class="grid"><div class="box"><span>Canal</span><b>${esc(r.canal)}</b></div><div class="box"><span>Coletor</span><b>${esc(r.coletor)}</b></div><div class="box"><span>Conferente</span><b>${esc(r.conferente)}</b></div><div class="box"><span>Status</span><b>${esc(r.status)}</b></div><div class="box"><span>Início</span><b>${esc(r.inicio)}</b></div><div class="box"><span>Fim</span><b>${esc(r.fim||'Em andamento')}</b></div></div><div class="totals"><div><b>${r.leituras}</b><br>leituras</div><div><b>${r.pedidos}</b><br>pedidos</div><div><b>${r.unidades}</b><br>unidades</div><div><b>${r.divergentes}</b><br>divergentes</div></div><div class="sign"><div class="sig">Entregue/conferido por: ${esc(r.conferente)}</div><div class="sig">Recebido por: ${esc(r.coletor)}</div></div><div class="sign"><div class="sig">Documento / placa</div><div class="sig">Assinatura e data/hora</div></div></body></html>`;
  }
  function printRomaneio(row, mode='summary'){
    const r=normalizeRow(row);
    let html = r.html || buildFallbackHtml(r, mode);
    try{
      if(mode==='complete') html = html.replace('<body class="print-summary">','<body>').replace('<body>','<body class="print-complete">');
      else html = html.replace('<body>','<body class="print-summary">');
    }catch(_){}
    const w=window.open('','_blank','width=1100,height=800');
    if(w){ w.document.open(); w.document.write(html); w.document.close(); setTimeout(()=>{try{w.focus();w.print();}catch(_){}} ,700); return; }
    const blob=new Blob([html],{type:'text/html;charset=utf-8'}); const url=URL.createObjectURL(blob); const a=document.createElement('a'); a.href=url; a.download=(r.arquivo||'romaneio-ehf.html'); document.body.appendChild(a); a.click(); a.remove(); setTimeout(()=>URL.revokeObjectURL(url),1000);
  }
  window.EHFPrintRomaneioSalvo = printRomaneio;

  function ensurePanel(){
    const bip=document.getElementById('view-bipagem'); if(!bip) return null;
    let panel=document.getElementById('ehf-romaneios-salvos-panel'); if(panel) return panel;
    panel=document.createElement('section'); panel.id='ehf-romaneios-salvos-panel'; panel.className='ehf-romaneios-panel';
    panel.innerHTML=`<div class="ehf-romaneios-head"><div><h3>Romaneios salvos</h3><small>Bipe no celular e imprima no PC pela mesma lista mensal.</small></div><div class="ehf-romaneio-actions"><input id="ehf-romaneio-month" class="ehf-romaneio-month" value="${monthKey()}"><button type="button" id="ehf-romaneio-refresh" class="ehf-romaneio-btn secondary">Atualizar</button><button type="button" id="ehf-romaneio-save-now" class="ehf-romaneio-btn">Salvar atual</button></div></div><div id="ehf-romaneios-list" class="ehf-romaneios-list"><div class="ehf-romaneio-empty">Carregando romaneios...</div></div>`;
    const session=document.getElementById('bip-session-panel');
    if(session && session.parentNode) session.parentNode.insertBefore(panel, session.nextSibling);
    else bip.prepend(panel);
    panel.querySelector('#ehf-romaneio-refresh')?.addEventListener('click',()=>loadRomaneios(true));
    panel.querySelector('#ehf-romaneio-save-now')?.addEventListener('click',()=>{
      if(typeof window.ehfSalvarRomaneioAtual==='function') window.ehfSalvarRomaneioAtual('EM_ANDAMENTO');
      setTimeout(()=>loadRomaneios(true),2200);
    });
    return panel;
  }

  async function loadRomaneios(force){
    injectStyle(); const panel=ensurePanel(); if(!panel) return;
    const list=panel.querySelector('#ehf-romaneios-list'); const monthInput=panel.querySelector('#ehf-romaneio-month');
    const mes=(monthInput?.value||monthKey()).trim()||monthKey();
    if(list) list.innerHTML='<div class="ehf-romaneio-empty">Buscando romaneios na planilha...</div>';
    try{
      const data=await jsonp('romaneios',{mes,limit:80});
      const rows=(data.rows||data.romaneios||[]).map(normalizeRow).filter(r=>r.key||r.arquivo).sort((a,b)=>String(b.data||b.inicio||'').localeCompare(String(a.data||a.inicio||''))).slice(0,30);
      if(!rows.length){ list.innerHTML='<div class="ehf-romaneio-empty">Nenhum romaneio salvo neste mês ainda.</div>'; return; }
      list.innerHTML=rows.map((r,i)=>{
        const statusClass=/final/i.test(r.status)?'finalizado':'';
        const label=`Romaneio ${esc(r.session||r.key||('#'+(i+1)))}`;
        return `<div class="ehf-romaneio-item" data-key="${esc(r.key)}"><div><div class="ehf-romaneio-title"><span class="ehf-romaneio-status ${statusClass}">${esc(r.status||'EM ANDAMENTO')}</span>${label}</div><div class="ehf-romaneio-meta"><b>${esc(r.canal||'-')}</b> · Coletor: ${esc(r.coletor||'-')} · Conferente: ${esc(r.conferente||'-')}<br>${r.leituras} leituras · ${r.pedidos} pedidos · ${r.unidades} unid. · ${r.divergentes} diverg.</div></div><div class="ehf-romaneio-print"><button class="ehf-romaneio-btn" type="button" data-idx="${i}" data-mode="summary">Resumo</button><button class="ehf-romaneio-btn secondary" type="button" data-idx="${i}" data-mode="complete">Lista</button></div></div>`;
      }).join('');
      list.querySelectorAll('button[data-idx]').forEach(btn=>btn.addEventListener('click',()=>printRomaneio(rows[Number(btn.dataset.idx)], btn.dataset.mode)));
      window.EHFRomaneiosSalvosCache=rows;
    }catch(err){
      if(list) list.innerHTML=`<div class="ehf-romaneio-empty">Não consegui ler a planilha agora. ${esc(err.message||err)}</div>`;
    }
  }
  window.EHFLoadRomaneiosSalvos = loadRomaneios;

  function boot(){ injectStyle(); ensurePanel(); setTimeout(()=>loadRomaneios(false),900); setInterval(()=>{ if(document.body.dataset.activeModule==='bipagem') loadRomaneios(false); },60000); }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot); else boot();
  window.addEventListener('hashchange',()=>setTimeout(()=>{ if(location.hash.includes('bipagem')) boot(); },300));
  window.addEventListener('ehf:romaneioAtualizado',()=>setTimeout(()=>loadRomaneios(true),1800));
})();
