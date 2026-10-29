const FORMULACOES = [
  {
    id: "harphos-p-40",
    name: "HARPHOS P 40",
    groupIndex: "0,1",
    aditivado: true,
    category: "Bovinos de corte",
    season: "Ano todo",
    consumption: "100 a 200 g para cada 100 kg de peso corporal do animal por dia, se disponibilizado a livre acesso",
    phases: { cria: 1, recria: 3, engorda: 2, reproducao: 3, producao: 0, trabalho: 0 },
    benefits: [
      "Contém aditivo probiótico funcional: Levedura viva e bactérias ruminais e intestinais;",
      "Contém aditivo nutricional: Ureia protegida com controle na degradação de amônia no rúmen e menor risco de intoxicação;",
      "Maior ingestão de matéria seca e digestibilidade da fibra do pasto;",
      "Maior desenvolvimento de carcaça nas águas e manutenção do peso na seca;",
      "Prevenção e correção de deficiências de macro e microminerais."
    ]
  },
  {
    id: "harphos-p-seca",
    name: "HARPHOS P SECA",
    groupIndex: "0,1",
    aditivado: true,
    category: "Bovinos de corte",
    season: "Seca",
    consumption: "100 a 150 g para cada 100 kg de peso corporal do animal por dia, se disponibilizado a livre acesso",
    phases: { cria: 1, recria: 3, engorda: 2, reproducao: 3, producao: 0, trabalho: 0 },
    benefits: [
      "Contém aditivo nutricional: Ureia protegida com controle na degradação de amônia no rúmen e menor risco de intoxicação;",
      "Maior ingestão de matéria seca e digestibilidade da fibra do pasto;",
      "Auxilia na manutenção do peso durante a seca;",
      "Previne e corrige deficiências de macro e microminerais;",
      "Favorece a antecipação da recria e do abate."
    ]
  },
  {
    id: "harphos-reproducao",
    name: "HARPHOS REPRODUÇÃO",
    groupIndex: "0,1",
    aditivado: true,
    category: "Bovinos de corte",
    season: "Ano todo",
    consumption: "100 g para cada 100 kg de peso corporal do animal por dia, se disponibilizado a livre acesso",
    phases: { cria: 0, recria: 0, engorda: 0, reproducao: 3, producao: 0, trabalho: 0 },
    benefits: [
      "Contém mineral orgânico de alta biodisponibilidade;",
      "Contém aditivo probiótico funcional: Levedura viva e bactérias ruminais e intestinais;",
      "Suporte proteico na seca, auxiliando na manutenção da condição corporal das vacas;",
      "Suporte energético na estação de monta, favorecendo o retorno do cio;",
      "Contribui para melhores índices de fertilidade e número de prenhez;",
      "Suplementação de macro e microminerais;",
      "Melhora a digestibilidade da fibra do pasto."
    ]
  },
  {
    id: "harphos-creep",
    name: "HARPHOS CREEP",
    groupIndex: "0,1",
    aditivado: true,
    category: "Bezerros de corte",
    season: "Ano todo",
    consumption: "300 g para cada 100 kg de peso corporal do animal por dia, se disponibilizado a livre acesso",
    phases: { cria: 3, recria: 0, engorda: 0, reproducao: 0, producao: 0, trabalho: 0 },
    benefits: [
      "Contém aditivo probiótico funcional: Levedura viva e bactérias ruminais e intestinais;",
      "Estimula o desenvolvimento ruminal antecipando o consumo de pasto nos bezerros;",
      "Possibilita a desmama precoce em bezerros de vacas primíparas;",
      "Reduz o desgaste da vaca adiantando o retorno ao cio no pós-parto;",
      "Favorece o desenvolvimento muscular, ósseo e a formação da carcaça;",
      "Proporciona maior peso à desmama."
    ]
  },
  {
    id: "harphos-pe-30",
    name: "HARPHOS PE 30",
    groupIndex: "0,3",
    aditivado: true,
    category: "Bovinos de corte",
    season: "Ano todo",
    consumption: "300 g para cada 100 kg de peso corporal do animal por dia, se disponibilizado a livre acesso",
    phases: { cria: 3, recria: 3, engorda: 3, reproducao: 3, producao: 0, trabalho: 0 },
    benefits: [
      "Contém aditivo probiótico funcional: Levedura viva e bactérias ruminais e intestinais;",
      "Maior ingestão de matéria seca e digestibilidade da fibra do pasto;",
      "Fonte de energia de rápida e média digestibilidade;",
      "Proporciona ganho de peso moderado mesmo durante a seca;",
      "Produto de médio consumo, com ingestão controlada;",
      "Favorece a antecipação da fase de recria e do abate;",
      "Previne e corrige deficiências de macro e microminerais."
    ]
  },
  {
    id: "harphos-pe-aguas",
    name: "HARPHOS PE AGUAS",
    groupIndex: "0,3",
    aditivado: false,
    category: "Bovinos de corte",
    season: "Águas",
    consumption: "300 g para cada 100 kg de peso corporal do animal por dia, se disponibilizado a livre acesso",
    phases: { cria: 3, recria: 3, engorda: 3, reproducao: 3, producao: 0, trabalho: 0 },
    benefits: [
      "Potencializa o ganho de peso e carcaça nas águas;",
      "Equilibra a relação proteína / energia da dieta com máximo aproveitamento do nitrogênio do capim;",
      "Produto de médio consumo, com ingestão controlada;",
      "Previne e corrige deficiências de macro e microminerais;",
      "Favorece a antecipação da recria e do abate."
    ]
  },
  {
    id: "harphos-pe-seca",
    name: "HARPHOS PE SECA",
    groupIndex: "0,3",
    aditivado: false,
    category: "Bovinos de corte",
    season: "Seca",
    consumption: "300 g para cada 100 kg de peso corporal do animal por dia, se disponibilizado a livre acesso",
    phases: { cria: 3, recria: 3, engorda: 3, reproducao: 3, producao: 0, trabalho: 0 },
    benefits: [
      "Suporte de proteína e energia para pastagens de baixa qualidade;",
      "Auxilia na manutenção do peso durante a seca;",
      "Previne e corrige deficiências de macro e microminerais;",
      "Produto de médio consumo, com ingestão controlada."
    ]
  },
  {
    id: "harphos-lac",
    name: "HARPHOS LAC",
    groupIndex: "0,3",
    aditivado: true,
    category: "Bovinos de Leite",
    season: "Ano todo",
    consumption: "300 g para cada 100 kg de peso corporal do animal por dia, se disponibilizado a livre acesso",
    phases: { cria: 0, recria: 2, engorda: 0, reproducao: 3, producao: 3, trabalho: 0 },
    benefits: [
      "Suporte energético no verão e proteico no inverno, conforme as deficiências das pastagens;",
      "Reduz a mobilização de gordura corporal no início da lactação, antecipando o retorno ao cio;",
      "Suporte energético para vacas a pasto com produção acima de 15 litros de leite/dia;",
      "Contém aditivo probiótico funcional: levedura viva e bactérias ruminais e intestinais;",
      "Complementa a dieta com macro e microminerais essenciais;",
      "Melhora a digestibilidade da fibra do pasto, contribuindo para maior produção de leite e sólidos."
    ]
  },
  {
    id: "h-horse-multi-campo",
    name: "H HORSE MULTI CAMPO",
    groupIndex: "0,3",
    aditivado: true,
    category: "Equídeos adultos",
    season: "Ano todo",
    consumption: "300 g para cada 100 kg de peso corporal do animal por dia, se disponibilizado a livre acesso",
    phases: { cria: 0, recria: 0, engorda: 0, reproducao: 0, producao: 0, trabalho: 3 },
    benefits: [
      "Contém aditivo probiótico que contribui para o equilíbrio da microbiota intestinal benéfica de Equinos, Muares e Asininos;",
      "Suplementa proteína e energia de alto valor biológico;",
      "Contribui para a manutenção da massa muscular e a condição corporal;",
      "Favorece o metabolismo digestivo e a saúde intestinal;",
      "Repõe eletrólitos e minerais após atividades físicas;",
      "Auxilia na imunidade e na saúde dos pelos e cascos."
    ]
  },
  {
    id: "harphos-pe-sheep",
    name: "HARPHOS PE SHEEP",
    groupIndex: "0,3",
    aditivado: true,
    category: "Ovinos e Caprinos",
    season: "Ano todo",
    consumption: "10g para cada 1 kg de peso corporal do animal por dia, se disponibilizado a livre acesso",
    phases: { cria: 3, recria: 3, engorda: 3, reproducao: 3, producao: 3, trabalho: 0 },
    benefits: [
      "Produto sem cobre adicionado, reduzindo o risco de intoxicação;",
      "Contém aditivo coccidiostático, auxiliando na prevenção de doença intestinal (coccidiose / eimeriose);",
      "Suporte proteico, energético e mineral nas dietas com pastagens ou volumosos de baixa qualidade, especialmente na seca;",
      "Favorece o ganho de peso, crescimento e a fertilidade por meio da melhor conversão alimentar por conter aditivo modulador do ambiente ruminal."
    ]
  },
  {
    id: "multi-pasto",
    name: "MULTI PASTO",
    groupIndex: "0,5",
    aditivado: true,
    category: "Bovinos",
    season: "Ano todo",
    consumption: "300 a 700 g para cada 100 kg de peso corporal do animal por dia, se disponibilizado a livre acesso",
    phases: { cria: 1, recria: 3, engorda: 2, reproducao: 3, producao: 0, trabalho: 0 },
    benefits: [
      "Suporte proteico e energético para pastagens de boa qualidade;",
      "Contém aditivo probiótico funcional: Levedura viva e bactérias ruminais e intestinais, melhorando a eficiência alimentar;",
      "Produto ideal para RIP - Recria Intensiva a Pasto;",
      "Acelera o crescimento e potencializa o ganho de peso sem acúmulo de gordura na fase de recria;",
      "Contribui para melhor adaptação ruminal antes do Confinamento convencional, Dieta \"ZERO FORRAGEM\" ou Terminação intensiva a pasto (TIP);",
      "Otimiza o desempenho reprodutivo em novilhas leiteiras para IATF e fêmeas de corte para a estação de monta;",
      "Maior taxa de lotação do pasto quando fornecido 700 gramas para cada 100 kg de peso corporal do animal por dia, devido ao efeito substitutivo;",
      "Fornecimento flexível: 300 a 700 gramas para cada 100 kg de peso corporal do animal por dia, conforme o desempenho desejado."
    ]
  },
  {
    id: "multi-pasto-aguas",
    name: "MULTI PASTO AGUAS",
    groupIndex: "0,5",
    aditivado: true,
    category: "Bovinos",
    season: "Águas",
    consumption: "300 a 700 g para 100 kg de peso corporal do animal por dia, se disponibilizado a livre acesso",
    phases: { cria: 1, recria: 3, engorda: 2, reproducao: 3, producao: 0, trabalho: 0 },
    benefits: [
      "Suporte energético para pastagens no período das águas;",
      "Contém aditivo probiótico funcional: Levedura viva e bactérias ruminais e intestinais, melhorando a eficiência alimentar;",
      "Produto ideal para RIP - Recria intensiva a pasto;",
      "Acelera o crescimento e potencializa o ganho de peso sem acúmulo de gordura na fase de recria;",
      "Contribui para melhor adaptação ruminal antes do Confinamento convencional, Dieta \"ZERO FORRAGEM\" ou Terminação intensiva a pasto (TIP);",
      "Otimiza o desempenho reprodutivo em novilhas leiteiras para IATF e fêmeas de corte para a estação de monta;",
      "Maior taxa de lotação do pasto quando fornecido 700 gramas para cada 100 kg de peso corporal do animal por dia, devido ao efeito substitutivo;",
      "Fornecimento flexível: 300 a 700 gramas para cada 100 kg de peso corporal do animal por dia, conforme o desempenho desejado."
    ]
  },
  {
    id: "multi-pasto-seca",
    name: "MULTI PASTO SECA",
    groupIndex: "0,5",
    aditivado: true,
    category: "Bovinos",
    season: "Seca",
    consumption: "300 a 700 g para cada 100 kg de peso corporal do animal por dia, se disponibilizado a livre acesso",
    phases: { cria: 1, recria: 3, engorda: 2, reproducao: 3, producao: 0, trabalho: 0 },
    benefits: [
      "Suporte proteico para pastagens no período das secas;",
      "Contém aditivo probiótico funcional: Levedura viva e bactérias ruminais e intestinais, melhorando a eficiência alimentar;",
      "Produto ideal para o manejo de \"NOVILHAS PRECOCINHAS\" no período seco do ano;",
      "Manutenção no ganho de peso no período das secas, evitando atraso em projetos de Recria Intensiva a Pasto (RIP);",
      "Complemento de matéria seca em pasto com menor disponibilidade de massa, quando fornecido 700 gramas para cada 100 kg de peso corporal do animal por dia;",
      "Fornecimento flexível: 300 a 700 gramas para cada 100 kg de peso corporal do animal por dia, conforme a qualidade e disponibilidade de pasto."
    ]
  }
];

const PHASE_NAMES = {
  cria: "Cria",
  recria: "Recria",
  engorda: "Engorda",
  reproducao: "Reprodução",
  producao: "Produção",
  trabalho: "Trabalho/Manut."
};

const state = {
  view: "list", // 'list' | 'table'
  search: "",
  expandedIds: new Set(["harphos-p-40"])
};

function getLogoSrc() {
  return window.HARPIA_LOGO_SRC || "logo-harpia.jpg";
}

function getSeasonBadgeClass(season) {
  if (season === "Seca") return "tag-seca";
  if (season === "Águas") return "tag-aguas";
  return "tag-ano-todo";
}

function getFilteredFormulacoes() {
  if (!state.search.trim()) return FORMULACOES;
  const q = state.search.toLowerCase();
  return FORMULACOES.filter((item) => {
    const inName = item.name.toLowerCase().includes(q);
    const inCat = item.category.toLowerCase().includes(q);
    const inSeason = item.season.toLowerCase().includes(q);
    const inAdit = item.aditivado && "aditivado".includes(q);
    const inCons = item.consumption.toLowerCase().includes(q);
    const inBen = item.benefits.some((b) => b.toLowerCase().includes(q));
    return inName || inCat || inSeason || inAdit || inCons || inBen;
  });
}

function renderPhasesSummary(phases, groupIndex) {
  const badges = Object.entries(PHASE_NAMES)
    .map(([key, label]) => {
      const count = phases[key] || 0;
      return `
        <span class="phase-mini-tag ${count > 0 ? "has-stars" : ""}">
          ${label}: ${count > 0 ? "★".repeat(count) : "-"}
        </span>
      `;
    })
    .join("");

  return `
    <div class="phases-inline-wrap">
      <div class="phases-badges-list">
        ${badges}
      </div>
      <span class="phase-mini-tag">Faixa de Consumo: <strong>${groupIndex}</strong></span>
    </div>
  `;
}

function renderListView(items, container) {
  if (items.length === 0) {
    container.innerHTML = `
      <div class="list-card" style="padding: 2rem; text-align: center; color: #64748b;">
        Nenhuma formulação encontrada para "<strong>${state.search}</strong>".
      </div>
    `;
    return;
  }

  container.innerHTML = items
    .map((item) => {
      const isOpen = state.expandedIds.has(item.id);
      const benefitsHtml = item.benefits
        .map(
          (b, idx) => `
          <li class="benefit-bar-item">
            <span class="benefit-bar-num">${idx + 1}.</span>
            <span>${b}</span>
          </li>
        `
        )
        .join("");

      return `
        <div class="list-card ${isOpen ? "expanded" : ""}">
          <button class="list-card-header" onclick="toggleItem('${item.id}')" aria-expanded="${isOpen}">
            <div class="list-card-meta">
              <span class="list-prod-name">${item.name}</span>
              ${item.aditivado ? `<span class="tag-badge tag-aditivado">ADITIVADO</span>` : ""}
              <span class="list-prod-category">${item.category}</span>
              <span class="tag-badge ${getSeasonBadgeClass(item.season)}">${item.season}</span>
            </div>
            <span class="list-toggle-action">${isOpen ? "[ Fechar ]" : "[ Abrir ]"}</span>
          </button>

          <div class="list-card-body">
            <div class="consumption-panel">
              <div class="panel-small-title">CONSUMO ESTIMADO A LIVRE ACESSO</div>
              <div class="consumption-panel-value">${item.consumption}</div>
            </div>

            <div class="benefits-section-title">BENEFÍCIOS E DIFERENCIAIS</div>
            <ul class="benefit-bars-list">
              ${benefitsHtml}
            </ul>

            ${renderPhasesSummary(item.phases, item.groupIndex)}
          </div>
        </div>
      `;
    })
    .join("");
}

function renderTableView(items, container) {
  if (items.length === 0) {
    container.innerHTML = `
      <div class="table-card-wrapper" style="padding: 2rem; text-align: center; color: #64748b;">
        Nenhuma formulação encontrada para "<strong>${state.search}</strong>".
      </div>
    `;
    return;
  }

  const rowsHtml = items
    .map((item) => {
      const isOpen = state.expandedIds.has(item.id);
      const benefitsHtml = item.benefits
        .map(
          (b, idx) => `
          <li class="benefit-bar-item">
            <span class="benefit-bar-num">${idx + 1}.</span>
            <span>${b}</span>
          </li>
        `
        )
        .join("");

      const detailRow = isOpen
        ? `
          <tr class="table-detail-row">
            <td colspan="6" class="table-detail-cell">
              <div class="benefits-section-title">BENEFÍCIOS E DIFERENCIAIS — ${item.name}</div>
              <ul class="benefit-bars-list">
                ${benefitsHtml}
              </ul>
              ${renderPhasesSummary(item.phases, item.groupIndex)}
            </td>
          </tr>
        `
        : "";

      return `
        <tr class="main-table-row">
          <td>
            <button class="table-prod-link" onclick="toggleItem('${item.id}')">${item.name}</button>
          </td>
          <td class="col-center">
            ${
              item.aditivado
                ? `<span class="tag-badge tag-aditivado" style="text-transform:none;">Sim</span>`
                : `<span class="text-nao">Não</span>`
            }
          </td>
          <td>${item.category}</td>
          <td class="col-center">
            <span class="tag-badge ${getSeasonBadgeClass(item.season)}">${item.season}</span>
          </td>
          <td>${item.consumption}</td>
          <td class="col-center">
            <button class="btn-ver-beneficios ${isOpen ? "active" : ""}" onclick="toggleItem('${item.id}')">
              ${isOpen ? "Fechar" : "Ver Benefícios"}
            </button>
          </td>
        </tr>
        ${detailRow}
      `;
    })
    .join("");

  container.innerHTML = `
    <div class="table-card-wrapper">
      <div class="table-helper-banner">
        Clique sobre o <strong>nome do produto</strong> ou em <strong>"Ver Benefícios"</strong> para expandir os detalhes técnicos.
      </div>
      <div class="table-responsive-scroll">
        <table class="benefits-table">
          <thead>
            <tr>
              <th>PRODUTO</th>
              <th class="col-center">ADITIVADO</th>
              <th>CATEGORIA ANIMAL</th>
              <th class="col-center">ÉPOCA DO ANO</th>
              <th>CONSUMO ESTIMADO A LIVRE ACESSO</th>
              <th class="col-center">AÇÃO</th>
            </tr>
          </thead>
          <tbody>
            ${rowsHtml}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function render() {
  const filtered = getFilteredFormulacoes();
  const showingEl = document.getElementById("showingCountText");
  if (showingEl) {
    showingEl.innerHTML = `Mostrando <strong>${filtered.length}</strong> formulações`;
  }

  const listContainer = document.getElementById("listViewContainer");
  const tableContainer = document.getElementById("tableViewContainer");

  if (state.view === "list") {
    listContainer.style.display = "flex";
    tableContainer.style.display = "none";
    renderListView(filtered, listContainer);
  } else {
    listContainer.style.display = "none";
    tableContainer.style.display = "block";
    renderTableView(filtered, tableContainer);
  }
}

function toggleItem(id) {
  if (state.expandedIds.has(id)) {
    state.expandedIds.delete(id);
  } else {
    state.expandedIds.add(id);
  }
  render();
}

function setView(viewName) {
  state.view = viewName;
  document.getElementById("btnTabList").classList.toggle("active", viewName === "list");
  document.getElementById("btnTabTable").classList.toggle("active", viewName === "table");
  render();
}

function expandAll() {
  const filtered = getFilteredFormulacoes();
  filtered.forEach((item) => state.expandedIds.add(item.id));
  render();
}

function collapseAll() {
  state.expandedIds.clear();
  render();
}

// =====================================================
// IMPRESSÃO / DOWNLOAD DO CATÁLOGO EM PDF COM LOGO
// =====================================================
function buildPrintableCatalog() {
  const filtered = getFilteredFormulacoes();
  const itemsToPrint = filtered.length > 0 ? filtered : FORMULACOES;
  const logoSrc = getLogoSrc();
  const dateStr = new Date().toLocaleDateString("pt-BR");

  const cardsHtml = itemsToPrint
    .map((item) => {
      const benefitsHtml = item.benefits
        .map(
          (b, idx) => `
          <div class="pdf-benefit-row">
            <strong style="color:#047857;">${idx + 1}.</strong> ${b}
          </div>
        `
        )
        .join("");

      const activePhases = Object.entries(PHASE_NAMES)
        .filter(([k]) => item.phases[k] > 0)
        .map(([k, label]) => `${label}: ${"★".repeat(item.phases[k])}`)
        .join("  •  ");

      return `
        <div class="pdf-card">
          <div class="pdf-card-head">
            <div class="pdf-card-head-left">
              <strong style="font-size:11pt; color:#0f172a;">${item.name}</strong>
              ${item.aditivado ? `<span class="tag-badge tag-aditivado">ADITIVADO</span>` : ""}
              <span style="font-size:8.5pt; color:#475569;">${item.category}</span>
              <span class="tag-badge ${getSeasonBadgeClass(item.season)}">${item.season}</span>
            </div>
            <span style="font-size:8pt; color:#64748b; font-weight:700;">Faixa ${item.groupIndex}</span>
          </div>

          <div class="pdf-consumo-box">
            <div style="font-size:6.8pt; font-weight:800; color:#64748b; text-transform:uppercase;">CONSUMO ESTIMADO A LIVRE ACESSO</div>
            <div style="font-size:8.8pt; font-weight:700; color:#0f172a; margin-top:2px;">${item.consumption}</div>
            ${activePhases ? `<div style="font-size:7.5pt; color:#92400e; font-weight:700; margin-top:3px;">Indicação: ${activePhases}</div>` : ""}
          </div>

          <div style="font-size:7pt; font-weight:800; color:#64748b; text-transform:uppercase; margin-bottom:4px;">BENEFÍCIOS E DIFERENCIAIS</div>
          <div>${benefitsHtml}</div>
        </div>
      `;
    })
    .join("");

  const printArea = document.getElementById("printArea");
  printArea.innerHTML = `
    <div class="pdf-top-bar">
      <div class="pdf-brand-left">
        <img src="${logoSrc}" alt="Logo Harpia Nutrição Animal" />
        <div>
          <div style="font-size:14pt; font-weight:900; letter-spacing:0.02em;">HARPIA <span style="font-size:8.5pt; color:#4ade80;">NUTRIÇÃO ANIMAL</span></div>
          <div style="font-size:8pt; color:#cbd5e1;">Catálogo de Formulações • Apresentação Técnica (${itemsToPrint.length} produtos)</div>
        </div>
      </div>
      <div style="text-align:right; font-size:8pt; color:#cbd5e1;">
        <div>Linha Harpia Completa</div>
        <div>Data: ${dateStr}</div>
      </div>
    </div>
    ${cardsHtml}
  `;
}

function downloadCatalogPDF() {
  buildPrintableCatalog();
  setTimeout(() => {
    window.print();
  }, 100);
}

document.addEventListener("DOMContentLoaded", () => {
  const logoSrc = getLogoSrc();
  document.querySelectorAll(".harpia-logo-img").forEach((img) => {
    img.src = logoSrc;
  });

  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", (e) => {
    state.search = e.target.value;
    render();
  });

  window.addEventListener("beforeprint", () => {
    buildPrintableCatalog();
  });

  render();
});
