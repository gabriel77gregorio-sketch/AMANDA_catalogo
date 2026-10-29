// Base completa dos 13 produtos Harpia Nutrição Animal (extraídos do PDF oficial)
const HARPIA_PRODUCTS = [
  {
    id: "harphos-p-40",
    name: "HARPHOS P 40",
    groupIndex: "0,1",
    lineGroup: "Proteinados 0,1%",
    lineClass: "line-01",
    shortDosage: "100 a 200 g / 100 kg PV",
    consumptionText: "100 a 200 g para cada 100 kg de peso corporal do animal por dia, se disponibilizado a livre acesso",
    aditivado: true,
    category: "Bovinos de corte",
    season: "Ano todo",
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
    lineGroup: "Proteinados 0,1%",
    lineClass: "line-01",
    shortDosage: "100 a 150 g / 100 kg PV",
    consumptionText: "100 a 150 g para cada 100 kg de peso corporal do animal por dia, se disponibilizado a livre acesso",
    aditivado: true,
    category: "Bovinos de corte",
    season: "Seca",
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
    lineGroup: "Proteinados 0,1%",
    lineClass: "line-01",
    shortDosage: "100 g / 100 kg PV",
    consumptionText: "100 g para cada 100 kg de peso corporal do animal por dia, se disponibilizado a livre acesso",
    aditivado: true,
    category: "Bovinos de corte",
    season: "Ano todo",
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
    lineGroup: "Proteinados 0,1%",
    lineClass: "line-01",
    shortDosage: "300 g / 100 kg PV",
    consumptionText: "300 g para cada 100 kg de peso corporal do animal por dia, se disponibilizado a livre acesso",
    aditivado: true,
    category: "Bezerros de corte",
    season: "Ano todo",
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
    lineGroup: "Proteico-Energéticos 0,3%",
    lineClass: "line-03",
    shortDosage: "300 g / 100 kg PV",
    consumptionText: "300 g para cada 100 kg de peso corporal do animal por dia, se disponibilizado a livre acesso",
    aditivado: true,
    category: "Bovinos de corte",
    season: "Ano todo",
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
    name: "HARPHOS PE ÁGUAS",
    groupIndex: "0,3",
    lineGroup: "Proteico-Energéticos 0,3%",
    lineClass: "line-03",
    shortDosage: "300 g / 100 kg PV",
    consumptionText: "300 g para cada 100 kg de peso corporal do animal por dia, se disponibilizado a livre acesso",
    aditivado: false,
    category: "Bovinos de corte",
    season: "Águas",
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
    lineGroup: "Proteico-Energéticos 0,3%",
    lineClass: "line-03",
    shortDosage: "300 g / 100 kg PV",
    consumptionText: "300 g para cada 100 kg de peso corporal do animal por dia, se disponibilizado a livre acesso",
    aditivado: false,
    category: "Bovinos de corte",
    season: "Seca",
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
    lineGroup: "Especialidades 0,3%",
    lineClass: "line-03",
    shortDosage: "300 g / 100 kg PV",
    consumptionText: "300 g para cada 100 kg de peso corporal do animal por dia, se disponibilizado a livre acesso",
    aditivado: true,
    category: "Bovinos de Leite",
    season: "Ano todo",
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
    lineGroup: "Especialidades 0,3%",
    lineClass: "line-03",
    shortDosage: "300 g / 100 kg PV",
    consumptionText: "300 g para cada 100 kg de peso corporal do animal por dia, se disponibilizado a livre acesso",
    aditivado: true,
    category: "Equídeos adultos",
    season: "Ano todo",
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
    lineGroup: "Especialidades 0,3%",
    lineClass: "line-03",
    shortDosage: "10 g / 1 kg PV",
    consumptionText: "10g para cada 1 kg de peso corporal do animal por dia, se disponibilizado a livre acesso",
    aditivado: true,
    category: "Ovinos e Caprinos",
    season: "Ano todo",
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
    lineGroup: "Multi Pasto 0,5%",
    lineClass: "line-05",
    shortDosage: "300 a 700 g / 100 kg PV",
    consumptionText: "300 a 700 g para cada 100 kg de peso corporal do animal por dia, se disponibilizado a livre acesso",
    aditivado: true,
    category: "Bovinos",
    season: "Ano todo",
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
    name: "MULTI PASTO ÁGUAS",
    groupIndex: "0,5",
    lineGroup: "Multi Pasto 0,5%",
    lineClass: "line-05",
    shortDosage: "300 a 700 g / 100 kg PV",
    consumptionText: "300 a 700 g para 100 kg de peso corporal do animal por dia, se disponibilizado a livre acesso",
    aditivado: true,
    category: "Bovinos",
    season: "Águas",
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
    lineGroup: "Multi Pasto 0,5%",
    lineClass: "line-05",
    shortDosage: "300 a 700 g / 100 kg PV",
    consumptionText: "300 a 700 g para cada 100 kg de peso corporal do animal por dia, se disponibilizado a livre acesso",
    aditivado: true,
    category: "Bovinos",
    season: "Seca",
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

const PHASE_LABELS = {
  cria: "Cria",
  recria: "Recria",
  engorda: "Engorda",
  reproducao: "Reprodução",
  producao: "Produção",
  trabalho: "Trabalho"
};

const state = {
  tab: "list", // 'list' | 'compare'
  search: "",
  category: "all",
  season: "all",
  phase: "all",
  expandedIds: new Set(["harphos-p-40"]) // Primeiro item aberto como exemplo inicial
};

function getLogoSrc() {
  return window.HARPIA_LOGO_SRC || "logo-harpia.jpg";
}

function getSeasonPillClass(season) {
  if (season === "Águas") return "pill-aguas";
  if (season === "Seca") return "pill-seca";
  return "pill-ano";
}

function starsText(n) {
  return n > 0 ? "★".repeat(n) : "—";
}

function getFilteredProducts() {
  return HARPIA_PRODUCTS.filter((p) => {
    if (state.search.trim() !== "") {
      const q = state.search.toLowerCase();
      const match =
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.season.toLowerCase().includes(q) ||
        p.consumptionText.toLowerCase().includes(q) ||
        p.benefits.some((b) => b.toLowerCase().includes(q));
      if (!match) return false;
    }
    if (state.category !== "all" && p.category !== state.category) return false;
    if (state.season !== "all" && p.season !== state.season) return false;
    if (state.phase !== "all" && (!p.phases[state.phase] || p.phases[state.phase] <= 0)) return false;
    return true;
  });
}

// Renderiza a mini tabela comparativa dentro do produto clicado
function renderInlineComparison(currentProd) {
  // Compara produtos da mesma linha (0,1 / 0,3 / 0,5) ou mesma categoria
  const peers = HARPIA_PRODUCTS.filter(
    (p) => p.lineGroup === currentProd.lineGroup || p.category === currentProd.category
  );

  const rows = peers
    .map((p) => {
      const isCurrent = p.id === currentProd.id;
      return `
        <tr class="${isCurrent ? "current-row" : ""}">
          <td>${p.name} ${isCurrent ? " (Atual)" : ""}</td>
          <td>${p.season}</td>
          <td>${p.shortDosage}</td>
          <td style="color:#d97706;">${starsText(p.phases.cria)}</td>
          <td style="color:#d97706;">${starsText(p.phases.recria)}</td>
          <td style="color:#d97706;">${starsText(p.phases.engorda)}</td>
          <td style="color:#d97706;">${starsText(p.phases.reproducao)}</td>
          <td style="color:#d97706;">${starsText(p.phases.producao)}</td>
          <td style="color:#d97706;">${starsText(p.phases.trabalho)}</td>
        </tr>
      `;
    })
    .join("");

  return `
    <div class="inline-compare-box">
      <div class="inline-compare-header">
        <span>Comparativo Rápido — ${currentProd.lineGroup}</span>
        <button class="btn-link" onclick="switchTab('compare')">Ver tabela completa &rarr;</button>
      </div>
      <div class="compare-table-wrap">
        <table class="mini-compare-table">
          <thead>
            <tr>
              <th>Produto</th>
              <th>Época</th>
              <th>Consumo</th>
              <th>Cria</th>
              <th>Recria</th>
              <th>Engorda</th>
              <th>Reprod.</th>
              <th>Prod.</th>
              <th>Trab.</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

function renderApp() {
  const filtered = getFilteredProducts();
  const statusCount = document.getElementById("statusCount");
  const toggleAllBtn = document.getElementById("toggleAllBtn");

  if (statusCount) {
    statusCount.textContent =
      state.tab === "list"
        ? `${filtered.length} produto(s) • Toque no produto para abrir detalhes`
        : `Comparando ${filtered.length} produto(s) lado a lado`;
  }

  if (toggleAllBtn) {
    toggleAllBtn.style.display = state.tab === "list" ? "inline-block" : "none";
    const allOpen = filtered.length > 0 && filtered.every((p) => state.expandedIds.has(p.id));
    toggleAllBtn.textContent = allOpen ? "Recolher todos" : "Abrir todos";
  }

  const listSec = document.getElementById("listSection");
  const compSec = document.getElementById("compareSection");

  if (state.tab === "list") {
    listSec.style.display = "flex";
    compSec.style.display = "none";
    renderList(filtered, listSec);
  } else {
    listSec.style.display = "none";
    compSec.style.display = "block";
    renderFullComparison(filtered, compSec);
  }
}

function renderList(products, container) {
  if (products.length === 0) {
    container.innerHTML = `
      <div style="background:#fff; padding:2rem 1rem; border-radius:12px; text-align:center; border:1px solid #e5e7eb;">
        <p style="font-weight:700; color:#024b1f; margin-bottom:0.4rem;">Nenhum produto encontrado</p>
        <p style="font-size:0.82rem; color:#6b7280; margin-bottom:0.85rem;">Tente ajustar os filtros ou limpar a busca.</p>
        <button class="chip active" onclick="resetAllFilters()">Mostrar Todos os Produtos</button>
      </div>
    `;
    return;
  }

  container.innerHTML = products
    .map((p) => {
      const isOpen = state.expandedIds.has(p.id);

      const phasesHtml = Object.entries(PHASE_LABELS)
        .map(([key, label]) => {
          const st = p.phases[key] || 0;
          return `
            <div class="phase-box ${st > 0 ? "recommended" : ""}">
              <span class="phase-box-name">${label}</span>
              <span class="phase-box-stars">${starsText(st)}</span>
            </div>
          `;
        })
        .join("");

      const benefitsHtml = p.benefits
        .map(
          (b, idx) => `
          <li>
            <span class="b-index">${idx + 1}</span>
            <span>${b}</span>
          </li>
        `
        )
        .join("");

      return `
        <div class="product-item ${isOpen ? "open" : ""}" id="item-${p.id}">
          <button class="product-row-btn" onclick="toggleProduct('${p.id}')" aria-expanded="${isOpen}">
            <div class="row-left">
              <div class="line-badge ${p.lineClass}">
                <span>${p.groupIndex}</span>
                <small>% PV</small>
              </div>
              <div class="row-info">
                <div class="row-title">
                  <span>${p.name}</span>
                  ${p.aditivado ? `<span class="mini-pill pill-aditivado">Aditivado</span>` : ""}
                </div>
                <div class="row-subtitle">
                  <span>${p.category}</span>
                  <span>•</span>
                  <span class="mini-pill ${getSeasonPillClass(p.season)}">${p.season}</span>
                  <span>•</span>
                  <span>${p.shortDosage}</span>
                </div>
              </div>
            </div>
            <div class="row-chevron" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </div>
          </button>

          <div class="product-details">
            <div class="detail-grid">
              <!-- Consumo Recomendado -->
              <div class="info-highlight-box">
                <div class="info-label">Consumo Estimado a Livre Acesso (Faixa ${p.groupIndex}% PV)</div>
                <div class="info-value">${p.consumptionText}</div>
              </div>

              <!-- Estrelas por Fase -->
              <div>
                <div class="section-subtitle">Indicação por Fase Produtiva</div>
                <div class="phases-strip">
                  ${phasesHtml}
                </div>
              </div>

              <!-- Benefícios Técnicos -->
              <div>
                <div class="section-subtitle">Benefícios e Argumentos Técnicos (${p.benefits.length})</div>
                <ul class="detail-benefits-list">
                  ${benefitsHtml}
                </ul>
              </div>

              <!-- Tabela Comparativa da Mesma Linha -->
              ${renderInlineComparison(p)}

              <!-- Ações Rápidas do Produto -->
              <div class="detail-actions">
                <button class="btn-detail" onclick="printSingleInformativePDF('${p.id}')">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
                    <polyline points="6 9 6 2 18 2 18 9" />
                    <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                    <rect x="6" y="14" width="12" height="8" />
                  </svg>
                  Imprimir Informativo deste Produto
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderFullComparison(products, container) {
  if (products.length === 0) {
    container.innerHTML = `<div style="background:#fff; padding:2rem; border-radius:12px; text-align:center;">Nenhum produto para comparar com os filtros atuais.</div>`;
    return;
  }

  const rows = products
    .map(
      (p) => `
      <tr onclick="openProductFromTable('${p.id}')" style="cursor:pointer;" title="Toque para abrir todas as informações de ${p.name}">
        <td>
          <strong style="color:#024b1f; display:block;">${p.name}</strong>
          <span style="font-size:0.68rem; color:#6b7280;">${p.category} ${p.aditivado ? "• Aditivado" : ""}</span>
        </td>
        <td><strong>${p.groupIndex}</strong></td>
        <td><span class="mini-pill ${getSeasonPillClass(p.season)}">${p.season}</span></td>
        <td style="font-size:0.73rem;">${p.shortDosage}</td>
        <td style="color:#d97706; font-weight:700;">${starsText(p.phases.cria)}</td>
        <td style="color:#d97706; font-weight:700;">${starsText(p.phases.recria)}</td>
        <td style="color:#d97706; font-weight:700;">${starsText(p.phases.engorda)}</td>
        <td style="color:#d97706; font-weight:700;">${starsText(p.phases.reproducao)}</td>
        <td style="color:#d97706; font-weight:700;">${starsText(p.phases.producao)}</td>
        <td style="color:#d97706; font-weight:700;">${starsText(p.phases.trabalho)}</td>
      </tr>
    `
    )
    .join("");

  container.innerHTML = `
    <div class="full-compare-card">
      <div style="padding:0.65rem 0.85rem; background:#eaf5ee; border-bottom:1px solid #c2e2cd; font-size:0.76rem; color:#024b1f; font-weight:700;">
        💡 Dica: Deslize para o lado para ver todas as fases ou toque em um produto para abrir seus benefícios completos.
      </div>
      <div class="compare-table-wrap">
        <table class="full-compare-table">
          <thead>
            <tr>
              <th>Produto / Categoria</th>
              <th>Faixa</th>
              <th>Época</th>
              <th>Consumo (100kg PV)</th>
              <th>Cria</th>
              <th>Recria</th>
              <th>Engorda</th>
              <th>Reprod.</th>
              <th>Produção</th>
              <th>Trabalho</th>
            </tr>
          </thead>
          <tbody>
            ${rows}
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// =====================================================
// INTERAÇÕES MOBILE-FIRST
// =====================================================
function toggleProduct(id) {
  if (state.expandedIds.has(id)) {
    state.expandedIds.delete(id);
  } else {
    state.expandedIds.add(id);
  }
  renderApp();
}

function toggleExpandAll() {
  const filtered = getFilteredProducts();
  const allOpen = filtered.every((p) => state.expandedIds.has(p.id));
  if (allOpen) {
    state.expandedIds.clear();
  } else {
    filtered.forEach((p) => state.expandedIds.add(p.id));
  }
  renderApp();
}

function switchTab(tabName) {
  state.tab = tabName;
  document.getElementById("tabListBtn").classList.toggle("active", tabName === "list");
  document.getElementById("tabCompareBtn").classList.toggle("active", tabName === "compare");
  renderApp();
}

function openProductFromTable(productId) {
  state.expandedIds.add(productId);
  switchTab("list");
  setTimeout(() => {
    const el = document.getElementById(`item-${productId}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 80);
}

function setCategory(cat) {
  state.category = cat;
  document.querySelectorAll(".chip").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.cat === cat);
  });
  renderApp();
}

function onSubFilterChange() {
  state.season = document.getElementById("seasonFilter").value;
  state.phase = document.getElementById("phaseFilter").value;
  renderApp();
}

function clearSearch() {
  state.search = "";
  const input = document.getElementById("searchInput");
  input.value = "";
  document.getElementById("clearSearchBtn").style.display = "none";
  renderApp();
}

function resetAllFilters() {
  state.search = "";
  state.category = "all";
  state.season = "all";
  state.phase = "all";
  document.getElementById("searchInput").value = "";
  document.getElementById("clearSearchBtn").style.display = "none";
  document.getElementById("seasonFilter").value = "all";
  document.getElementById("phaseFilter").value = "all";
  setCategory("all");
}

// =====================================================
// GERAÇÃO DO PDF INFORMATIVO (COM TODAS AS INFORMAÇÕES + LOGO)
// =====================================================
let customPrintActive = false;

function buildInformativePDF(products, titleSubtitle) {
  const logoSrc = getLogoSrc();
  const dateStr = new Date().toLocaleDateString("pt-BR");

  // 1. Quadro comparativo sintético no início (se mais de 1 produto)
  const summarySectionHtml =
    products.length > 1
      ? `
      <div class="pdf-summary-section">
        <div class="pdf-summary-title">Quadro Comparativo de Indicação por Fase e Consumo</div>
        <table class="pdf-summary-grid">
          <thead>
            <tr>
              <th>Produto</th>
              <th>Categoria Animal</th>
              <th>Época</th>
              <th>Consumo (Livre Acesso)</th>
              <th>Cria</th>
              <th>Recria</th>
              <th>Engorda</th>
              <th>Reprod.</th>
              <th>Produção</th>
              <th>Trabalho</th>
            </tr>
          </thead>
          <tbody>
            ${products
              .map(
                (p) => `
              <tr>
                <td><strong>${p.name}</strong> ${p.aditivado ? "<span style='color:#035e27;'>(Aditivado)</span>" : ""}</td>
                <td>${p.category}</td>
                <td>${p.season}</td>
                <td>${p.shortDosage}</td>
                <td style="color:#b45309; font-weight:700;">${starsText(p.phases.cria)}</td>
                <td style="color:#b45309; font-weight:700;">${starsText(p.phases.recria)}</td>
                <td style="color:#b45309; font-weight:700;">${starsText(p.phases.engorda)}</td>
                <td style="color:#b45309; font-weight:700;">${starsText(p.phases.reproducao)}</td>
                <td style="color:#b45309; font-weight:700;">${starsText(p.phases.producao)}</td>
                <td style="color:#b45309; font-weight:700;">${starsText(p.phases.trabalho)}</td>
              </tr>
            `
              )
              .join("")}
          </tbody>
        </table>
      </div>
    `
      : "";

  // 2. Fichas Informativas Detalhadas de Todos os Produtos (Estilo Informativo Técnico)
  const productBlocksHtml = products
    .map((p) => {
      const phasesPills = Object.entries(PHASE_LABELS)
        .map(([k, label]) => {
          const st = p.phases[k] || 0;
          return `
            <span class="pdf-phase-pill ${st > 0 ? "active" : ""}">
              ${label}: ${st > 0 ? "★".repeat(st) : "—"}
            </span>
          `;
        })
        .join("");

      const benefitsItems = p.benefits
        .map((b, idx) => `<li><strong>${idx + 1}.</strong> ${b}</li>`)
        .join("");

      return `
        <div class="pdf-product-block">
          <div class="pdf-prod-top">
            <div class="pdf-prod-name">
              <span>${p.name}</span>
              <span class="pdf-tag pdf-tag-amber">Faixa ${p.groupIndex}% PV</span>
              ${p.aditivado ? `<span class="pdf-tag pdf-tag-green">Produto Aditivado</span>` : ""}
            </div>
            <div class="pdf-prod-specs">
              <span><strong>Categoria:</strong> ${p.category}</span>
              <span><strong>Época:</strong> ${p.season}</span>
            </div>
          </div>

          <div class="pdf-dosage-bar">
            <div><strong>Recomendação de Consumo a Livre Acesso:</strong> ${p.consumptionText}</div>
          </div>

          <div class="pdf-phases-row">
            ${phasesPills}
          </div>

          <div class="pdf-benefits-title">Informações Técnicas e Benefícios do Produto:</div>
          <ul class="pdf-benefits-grid">
            ${benefitsItems}
          </ul>
        </div>
      `;
    })
    .join("");

  const printArea = document.getElementById("printArea");
  printArea.innerHTML = `
    <div class="pdf-header">
      <div class="pdf-brand">
        <img src="${logoSrc}" alt="Logo Harpia Nutrição Animal" />
        <div class="pdf-brand-title">
          <h1>Harpia Nutrição Animal</h1>
          <p>${titleSubtitle || "Informativo Técnico de Produtos • Guia Completo de Suplementação"}</p>
        </div>
      </div>
      <div class="pdf-meta">
        <div><strong>Informativo Técnico Comercial</strong></div>
        <div>Produtos incluídos: <strong>${products.length}</strong></div>
        <div>Data: ${dateStr}</div>
      </div>
    </div>

    ${summarySectionHtml}

    <div class="pdf-section-heading">Especificações Técnicas e Benefícios por Produto</div>
    ${productBlocksHtml}

    <div class="pdf-footer">
      <div style="display:flex; align-items:center; gap:8px;">
        <img src="${logoSrc}" alt="Harpia Nutrição Animal" />
        <span><strong>Harpia Nutrição Animal</strong> — Informações técnicas para orientação de suplementação a pasto</span>
      </div>
      <div>Emissão: ${dateStr}</div>
    </div>
  `;
}

function printFullInformativePDF() {
  customPrintActive = true;
  // Sempre imprime todos os produtos (ou os filtrados se o usuário filtrou, mas garantindo todas as informações detalhadas)
  const filtered = getFilteredProducts();
  const listToPrint = filtered.length > 0 ? filtered : HARPIA_PRODUCTS;
  const subtitle =
    listToPrint.length === HARPIA_PRODUCTS.length
      ? "Informativo Técnico Completo — Todas as Linhas de Produtos"
      : `Informativo Técnico de Produtos (${listToPrint.length} itens selecionados)`;

  buildInformativePDF(listToPrint, subtitle);
  setTimeout(() => {
    window.print();
    customPrintActive = false;
  }, 120);
}

function printSingleInformativePDF(productId) {
  const product = HARPIA_PRODUCTS.find((p) => p.id === productId);
  if (!product) return;
  customPrintActive = true;
  buildInformativePDF([product], `Informativo Técnico do Produto — ${product.name}`);
  setTimeout(() => {
    window.print();
    customPrintActive = false;
  }, 120);
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  const logoSrc = getLogoSrc();
  document.querySelectorAll(".harpia-logo-img").forEach((img) => {
    img.src = logoSrc;
  });

  const searchInput = document.getElementById("searchInput");
  const clearBtn = document.getElementById("clearSearchBtn");

  searchInput.addEventListener("input", (e) => {
    state.search = e.target.value;
    clearBtn.style.display = state.search ? "flex" : "none";
    renderApp();
  });

  // Se o vendedor apertar Ctrl+P direto, gera o informativo completo automaticamente
  window.addEventListener("beforeprint", () => {
    if (!customPrintActive) {
      buildInformativePDF(
        HARPIA_PRODUCTS,
        "Informativo Técnico Completo — Todas as Linhas de Produtos"
      );
    }
  });

  renderApp();
});
