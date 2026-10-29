// Dados oficiais dos 13 produtos do Catálogo Harpia Nutrição Animal (extraídos fielmente do PDF)
const HARPIA_PRODUCTS = [
  {
    id: "harphos-p-40",
    name: "HARPHOS P 40",
    groupIndex: "0,1",
    lineName: "Linha Proteinados Baixo Consumo (0,1%)",
    stripClass: "strip-01",
    cellClass: "cell-01",
    badgeGroupClass: "badge-group-01",
    consumptionText: "100 a 200 g para cada 100 kg de peso corporal do animal por dia, se disponibilizado a livre acesso",
    minGPer100kg: 100,
    maxGPer100kg: 200,
    aditivado: true,
    category: "Bovinos de corte",
    season: "Ano todo",
    phases: {
      cria: 1,
      recria: 3,
      engorda: 2,
      reproducao: 3,
      producao: 0,
      trabalho: 0
    },
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
    lineName: "Linha Proteinados Baixo Consumo (0,1%)",
    stripClass: "strip-01",
    cellClass: "cell-01",
    badgeGroupClass: "badge-group-01",
    consumptionText: "100 a 150 g para cada 100 kg de peso corporal do animal por dia, se disponibilizado a livre acesso",
    minGPer100kg: 100,
    maxGPer100kg: 150,
    aditivado: true,
    category: "Bovinos de corte",
    season: "Seca",
    phases: {
      cria: 1,
      recria: 3,
      engorda: 2,
      reproducao: 3,
      producao: 0,
      trabalho: 0
    },
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
    lineName: "Linha Reprodução & Minerais (0,1%)",
    stripClass: "strip-01",
    cellClass: "cell-01",
    badgeGroupClass: "badge-group-01",
    consumptionText: "100 g para cada 100 kg de peso corporal do animal por dia, se disponibilizado a livre acesso",
    minGPer100kg: 100,
    maxGPer100kg: 100,
    aditivado: true,
    category: "Bovinos de corte",
    season: "Ano todo",
    phases: {
      cria: 0,
      recria: 0,
      engorda: 0,
      reproducao: 3,
      producao: 0,
      trabalho: 0
    },
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
    lineName: "Linha Bezerros / Creep Feeding (0,1%)",
    stripClass: "strip-01",
    cellClass: "cell-01",
    badgeGroupClass: "badge-group-01",
    consumptionText: "300 g para cada 100 kg de peso corporal do animal por dia, se disponibilizado a livre acesso",
    minGPer100kg: 300,
    maxGPer100kg: 300,
    aditivado: true,
    category: "Bezerros de corte",
    season: "Ano todo",
    phases: {
      cria: 3,
      recria: 0,
      engorda: 0,
      reproducao: 0,
      producao: 0,
      trabalho: 0
    },
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
    lineName: "Linha Proteico-Energéticos (0,3%)",
    stripClass: "strip-03-pe",
    cellClass: "cell-03-pe",
    badgeGroupClass: "badge-group-03",
    consumptionText: "300 g para cada 100 kg de peso corporal do animal por dia, se disponibilizado a livre acesso",
    minGPer100kg: 300,
    maxGPer100kg: 300,
    aditivado: true,
    category: "Bovinos de corte",
    season: "Ano todo",
    phases: {
      cria: 3,
      recria: 3,
      engorda: 3,
      reproducao: 3,
      producao: 0,
      trabalho: 0
    },
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
    lineName: "Linha Proteico-Energéticos (0,3%)",
    stripClass: "strip-03-pe",
    cellClass: "cell-03-pe",
    badgeGroupClass: "badge-group-03",
    consumptionText: "300 g para cada 100 kg de peso corporal do animal por dia, se disponibilizado a livre acesso",
    minGPer100kg: 300,
    maxGPer100kg: 300,
    aditivado: false,
    category: "Bovinos de corte",
    season: "Águas",
    phases: {
      cria: 3,
      recria: 3,
      engorda: 3,
      reproducao: 3,
      producao: 0,
      trabalho: 0
    },
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
    lineName: "Linha Proteico-Energéticos (0,3%)",
    stripClass: "strip-03-pe",
    cellClass: "cell-03-pe",
    badgeGroupClass: "badge-group-03",
    consumptionText: "300 g para cada 100 kg de peso corporal do animal por dia, se disponibilizado a livre acesso",
    minGPer100kg: 300,
    maxGPer100kg: 300,
    aditivado: false,
    category: "Bovinos de corte",
    season: "Seca",
    phases: {
      cria: 3,
      recria: 3,
      engorda: 3,
      reproducao: 3,
      producao: 0,
      trabalho: 0
    },
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
    lineName: "Linha Bovinos de Leite (0,3%)",
    stripClass: "strip-03-lac",
    cellClass: "cell-03-lac",
    badgeGroupClass: "badge-group-03",
    consumptionText: "300 g para cada 100 kg de peso corporal do animal por dia, se disponibilizado a livre acesso",
    minGPer100kg: 300,
    maxGPer100kg: 300,
    aditivado: true,
    category: "Bovinos de Leite",
    season: "Ano todo",
    phases: {
      cria: 0,
      recria: 2,
      engorda: 0,
      reproducao: 3,
      producao: 3,
      trabalho: 0
    },
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
    lineName: "Linha Equídeos (0,3%)",
    stripClass: "strip-03-horse",
    cellClass: "cell-03-horse",
    badgeGroupClass: "badge-group-03",
    consumptionText: "300 g para cada 100 kg de peso corporal do animal por dia, se disponibilizado a livre acesso",
    minGPer100kg: 300,
    maxGPer100kg: 300,
    aditivado: true,
    category: "Equídeos adultos",
    season: "Ano todo",
    phases: {
      cria: 0,
      recria: 0,
      engorda: 0,
      reproducao: 0,
      producao: 0,
      trabalho: 3
    },
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
    lineName: "Linha Ovinos e Caprinos",
    stripClass: "strip-03-sheep",
    cellClass: "cell-03-sheep",
    badgeGroupClass: "badge-group-03",
    consumptionText: "10g para cada 1 kg de peso corporal do animal por dia, se disponibilizado a livre acesso",
    minGPer100kg: 1000,
    maxGPer100kg: 1000,
    aditivado: true,
    category: "Ovinos e Caprinos",
    season: "Ano todo",
    phases: {
      cria: 3,
      recria: 3,
      engorda: 3,
      reproducao: 3,
      producao: 3,
      trabalho: 0
    },
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
    lineName: "Linha Multi Pasto Alto Desempenho (0,5%)",
    stripClass: "strip-05",
    cellClass: "cell-05",
    badgeGroupClass: "badge-group-05",
    consumptionText: "300 a 700 g para cada 100 kg de peso corporal do animal por dia, se disponibilizado a livre acesso",
    minGPer100kg: 300,
    maxGPer100kg: 700,
    aditivado: true,
    category: "Bovinos",
    season: "Ano todo",
    phases: {
      cria: 1,
      recria: 3,
      engorda: 2,
      reproducao: 3,
      producao: 0,
      trabalho: 0
    },
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
    lineName: "Linha Multi Pasto Alto Desempenho (0,5%)",
    stripClass: "strip-05",
    cellClass: "cell-05",
    badgeGroupClass: "badge-group-05",
    consumptionText: "300 a 700 g para 100 kg de peso corporal do animal por dia, se disponibilizado a livre acesso",
    minGPer100kg: 300,
    maxGPer100kg: 700,
    aditivado: true,
    category: "Bovinos",
    season: "Águas",
    phases: {
      cria: 1,
      recria: 3,
      engorda: 2,
      reproducao: 3,
      producao: 0,
      trabalho: 0
    },
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
    lineName: "Linha Multi Pasto Alto Desempenho (0,5%)",
    stripClass: "strip-05",
    cellClass: "cell-05",
    badgeGroupClass: "badge-group-05",
    consumptionText: "300 a 700 g para cada 100 kg de peso corporal do animal por dia, se disponibilizado a livre acesso",
    minGPer100kg: 300,
    maxGPer100kg: 700,
    aditivado: true,
    category: "Bovinos",
    season: "Seca",
    phases: {
      cria: 1,
      recria: 3,
      engorda: 2,
      reproducao: 3,
      producao: 0,
      trabalho: 0
    },
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
  trabalho: "Trabalho / Manut."
};

// Estado da aplicação
const state = {
  search: "",
  category: "all",
  season: "all",
  groupIndex: "all",
  phase: "all",
  viewMode: "cards", // 'cards' | 'table'
  selectedIds: new Set(),
  lastSimulation: null
};

// Utilitários
function renderStars(count) {
  if (!count || count <= 0) return '<span class="phase-item-empty">—</span>';
  return "★".repeat(count);
}

function getSeasonBadgeClass(season) {
  if (season === "Águas") return "badge-season-aguas";
  if (season === "Seca") return "badge-season-seca";
  return "badge-season-ano";
}

function getFilteredProducts() {
  return HARPIA_PRODUCTS.filter((p) => {
    // Busca textual
    if (state.search.trim() !== "") {
      const q = state.search.toLowerCase();
      const inName = p.name.toLowerCase().includes(q);
      const inCat = p.category.toLowerCase().includes(q);
      const inCons = p.consumptionText.toLowerCase().includes(q);
      const inBen = p.benefits.some((b) => b.toLowerCase().includes(q));
      if (!inName && !inCat && !inCons && !inBen) return false;
    }

    // Categoria animal
    if (state.category !== "all" && p.category !== state.category) {
      return false;
    }

    // Época do ano
    if (state.season !== "all" && p.season !== state.season) {
      return false;
    }

    // Faixa de consumo (% PV)
    if (state.groupIndex !== "all" && p.groupIndex !== state.groupIndex) {
      return false;
    }

    // Fase / Indicação
    if (state.phase !== "all") {
      if (!p.phases[state.phase] || p.phases[state.phase] <= 0) {
        return false;
      }
    }

    return true;
  });
}

// Renderização principal
function renderCatalog() {
  const filtered = getFilteredProducts();
  const countEl = document.getElementById("resultsCount");
  if (countEl) {
    countEl.innerHTML = `Exibindo <strong>${filtered.length}</strong> de <strong>${HARPIA_PRODUCTS.length}</strong> produtos do catálogo`;
  }

  // Atualizar contador de selecionados
  const selCountEl = document.getElementById("selectedCountBadge");
  const clearSelBtn = document.getElementById("clearSelectionBtn");
  if (selCountEl) {
    selCountEl.textContent = state.selectedIds.size;
  }
  if (clearSelBtn) {
    clearSelBtn.style.display = state.selectedIds.size > 0 ? "inline-flex" : "none";
  }

  const cardsContainer = document.getElementById("cardsViewContainer");
  const tableContainer = document.getElementById("tableViewContainer");

  if (state.viewMode === "cards") {
    cardsContainer.style.display = "grid";
    tableContainer.style.display = "none";
    renderCardsView(filtered, cardsContainer);
  } else {
    cardsContainer.style.display = "none";
    tableContainer.style.display = "block";
    renderTableView(filtered, tableContainer);
  }
}

function renderCardsView(products, container) {
  if (products.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; background: #fff; padding: 3rem; text-align: center; border-radius: 12px; border: 1px solid #e5e7eb;">
        <h3 style="color: #024b1f; margin-bottom: 0.5rem;">Nenhum produto encontrado com esses filtros</h3>
        <p style="color: #6b7280; margin-bottom: 1rem;">Tente limpar a busca ou selecionar outra categoria / época do ano.</p>
        <button class="btn btn-secondary" onclick="resetFilters()">Limpar Filtros</button>
      </div>
    `;
    return;
  }

  container.innerHTML = products
    .map((p) => {
      const isSelected = state.selectedIds.has(p.id);
      const phasesHtml = Object.entries(PHASE_NAMES)
        .map(([key, label]) => {
          const stars = p.phases[key] || 0;
          return `
            <div class="phase-item ${stars > 0 ? "active-phase" : ""}">
              <span class="phase-item-name">${label}</span>
              <span class="phase-item-stars">${renderStars(stars)}</span>
            </div>
          `;
        })
        .join("");

      const benefitsHtml = p.benefits
        .map(
          (b, idx) => `
          <li>
            <span class="benefit-num">${idx + 1}</span>
            <span>${b}</span>
          </li>
        `
        )
        .join("");

      return `
        <article class="product-card ${isSelected ? "selected-for-print" : ""}">
          <div class="card-line-strip ${p.stripClass}"></div>
          <div class="card-header">
            <div class="card-header-top">
              <div class="badges-row">
                <span class="badge ${p.badgeGroupClass}">Consumo ${p.groupIndex}%</span>
                ${
                  p.aditivado
                    ? `<span class="badge badge-aditivado">✓ Aditivado</span>`
                    : `<span class="badge badge-season-ano">Linha Tradicional</span>`
                }
                <span class="badge ${getSeasonBadgeClass(p.season)}">Época: ${p.season}</span>
              </div>
              <label class="select-print-check" title="Selecionar para impressão personalizada">
                <input type="checkbox" ${isSelected ? "checked" : ""} onchange="toggleSelectProduct('${p.id}')" />
                <span>Imprimir</span>
              </label>
            </div>
            <h3 class="product-title">${p.name}</h3>
            <div class="product-category-row">
              <span>Categoria: <strong>${p.category}</strong></span>
            </div>
          </div>

          <div class="consumption-box">
            <div class="consumption-box-title">
              <span>Consumo Estimado a Livre Acesso</span>
              <span>Faixa ${p.groupIndex}</span>
            </div>
            <div class="consumption-box-text">${p.consumptionText}</div>
          </div>

          <div class="card-phases">
            <div class="card-section-label">Indicação por Fase / Desempenho</div>
            <div class="phases-grid">
              ${phasesHtml}
            </div>
          </div>

          <div class="card-benefits">
            <div class="card-section-label">Benefícios Técnicos (${p.benefits.length})</div>
            <ul class="benefits-list">
              ${benefitsHtml}
            </ul>
          </div>

          <div class="card-footer">
            <button class="btn btn-outline btn-sm" onclick="openCalculatorModal('${p.id}')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="8" y2="10"/><line x1="12" y1="10" x2="12" y2="10"/><line x1="16" y1="10" x2="16" y2="10"/><line x1="8" y1="14" x2="8" y2="14"/><line x1="12" y1="14" x2="12" y2="14"/><line x1="16" y1="14" x2="16" y2="14"/><line x1="8" y1="18" x2="16" y2="18"/></svg>
              Simular Consumo
            </button>
            <button class="btn btn-secondary btn-sm" onclick="printSingleProduct('${p.id}')">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
              Imprimir Ficha com Logo
            </button>
          </div>
        </article>
      `;
    })
    .join("");
}

function renderTableView(products, container) {
  if (products.length === 0) {
    container.innerHTML = `<div style="padding: 2.5rem; text-align: center;">Nenhum produto encontrado para os filtros aplicados.</div>`;
    return;
  }

  const rowsHtml = products
    .map((p) => {
      const isSelected = state.selectedIds.has(p.id);
      const benefitsList = p.benefits
        .map((b, i) => `<li><strong>${i + 1} -</strong> ${b}</li>`)
        .join("");

      return `
        <tr>
          <td class="td-center">
            <input type="checkbox" ${isSelected ? "checked" : ""} onchange="toggleSelectProduct('${p.id}')" title="Incluir na impressão" />
          </td>
          <td class="td-group-index">${p.groupIndex}</td>
          <td class="td-consumo">${p.consumptionText}</td>
          <td class="td-produto ${p.cellClass}">
            <div>${p.name}</div>
            <button class="btn btn-outline btn-sm" style="margin-top:6px; font-size:0.68rem; padding:2px 6px;" onclick="printSingleProduct('${p.id}')">Imprimir Ficha</button>
          </td>
          <td class="td-center">${p.aditivado ? "<strong>ADITIVADO</strong>" : "—"}</td>
          <td class="td-center">${p.category}</td>
          <td class="td-center">${p.season}</td>
          <td class="td-stars">${renderStars(p.phases.cria)}</td>
          <td class="td-stars">${renderStars(p.phases.recria)}</td>
          <td class="td-stars">${renderStars(p.phases.engorda)}</td>
          <td class="td-stars">${renderStars(p.phases.reproducao)}</td>
          <td class="td-stars">${renderStars(p.phases.producao)}</td>
          <td class="td-stars">${renderStars(p.phases.trabalho)}</td>
          <td class="td-benefits">
            <ol style="list-style:none; padding-left:0;">${benefitsList}</ol>
          </td>
        </tr>
      `;
    })
    .join("");

  container.innerHTML = `
    <div class="table-scroll">
      <table class="catalog-table">
        <thead>
          <tr>
            <th style="width:36px;">Sel.</th>
            <th>Faixa</th>
            <th>Consumo estimado a livre acesso</th>
            <th>Produtos</th>
            <th>Aditivado</th>
            <th>Categoria animal</th>
            <th>Época do ano</th>
            <th>Cria</th>
            <th>Recria</th>
            <th>Engorda</th>
            <th>Reprodução</th>
            <th>Produção</th>
            <th>Trabalho / Manutenção</th>
            <th>Benefícios</th>
          </tr>
        </thead>
        <tbody>
          ${rowsHtml}
        </tbody>
      </table>
    </div>
  `;
}

// Ações de Filtro e Interação
function toggleSelectProduct(productId) {
  if (state.selectedIds.has(productId)) {
    state.selectedIds.delete(productId);
  } else {
    state.selectedIds.add(productId);
  }
  renderCatalog();
}

function clearSelection() {
  state.selectedIds.clear();
  renderCatalog();
}

function selectAllFiltered() {
  const filtered = getFilteredProducts();
  filtered.forEach((p) => state.selectedIds.add(p.id));
  renderCatalog();
}

function setViewMode(mode) {
  state.viewMode = mode;
  document.getElementById("btnViewCards").classList.toggle("active", mode === "cards");
  document.getElementById("btnViewTable").classList.toggle("active", mode === "table");
  renderCatalog();
}

function setPhaseFilter(phaseKey) {
  state.phase = phaseKey;
  document.querySelectorAll(".phase-pill").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.phase === phaseKey);
  });
  renderCatalog();
}

function resetFilters() {
  state.search = "";
  state.category = "all";
  state.season = "all";
  state.groupIndex = "all";
  state.phase = "all";

  document.getElementById("searchInput").value = "";
  document.getElementById("categorySelect").value = "all";
  document.getElementById("seasonSelect").value = "all";
  document.getElementById("groupSelect").value = "all";
  setPhaseFilter("all");
}

// =====================================================
// CALCULADORA / SIMULADOR DE CONSUMO DO REBANHO
// =====================================================
function openCalculatorModal(preselectedId) {
  const selectEl = document.getElementById("calcProductSelect");
  selectEl.innerHTML = HARPIA_PRODUCTS.map(
    (p) => `<option value="${p.id}">${p.name} (${p.category} - ${p.season})</option>`
  ).join("");

  if (preselectedId) {
    selectEl.value = preselectedId;
  }

  calculateConsumption();
  document.getElementById("calculatorModal").classList.add("open");
}

function closeCalculatorModal() {
  document.getElementById("calculatorModal").classList.remove("open");
}

function calculateConsumption() {
  const prodId = document.getElementById("calcProductSelect").value;
  const heads = Math.max(1, Number(document.getElementById("calcHeads").value) || 1);
  const weightKg = Math.max(10, Number(document.getElementById("calcWeight").value) || 100);
  const days = Math.max(1, Number(document.getElementById("calcDays").value) || 30);
  const bagWeightKg = Math.max(1, Number(document.getElementById("calcBagWeight").value) || 30);

  const product = HARPIA_PRODUCTS.find((p) => p.id === prodId) || HARPIA_PRODUCTS[0];

  // Consumo por cabeça em gramas/dia: (peso / 100) * gramasPor100kg
  const minHeadDayG = (weightKg / 100) * product.minGPer100kg;
  const maxHeadDayG = (weightKg / 100) * product.maxGPer100kg;
  const avgHeadDayG = (minHeadDayG + maxHeadDayG) / 2;

  const totalDayKgMin = (minHeadDayG * heads) / 1000;
  const totalDayKgMax = (maxHeadDayG * heads) / 1000;

  const totalPeriodKgMin = totalDayKgMin * days;
  const totalPeriodKgMax = totalDayKgMax * days;
  const totalPeriodKgAvg = ((avgHeadDayG * heads) / 1000) * days;

  const bagsMin = Math.ceil(totalPeriodKgMin / bagWeightKg);
  const bagsMax = Math.ceil(totalPeriodKgMax / bagWeightKg);

  const isRange = product.minGPer100kg !== product.maxGPer100kg;

  const headDayStr = isRange
    ? `${Math.round(minHeadDayG)} a ${Math.round(maxHeadDayG)} g/cab/dia`
    : `${Math.round(minHeadDayG)} g/cab/dia`;

  const lotDayStr = isRange
    ? `${totalDayKgMin.toFixed(1)} a ${totalDayKgMax.toFixed(1)} kg/dia`
    : `${totalDayKgMin.toFixed(1)} kg/dia`;

  const periodStr = isRange
    ? `${totalPeriodKgMin.toFixed(0)} a ${totalPeriodKgMax.toFixed(0)} kg`
    : `${totalPeriodKgMin.toFixed(0)} kg`;

  const bagsStr = isRange
    ? `${bagsMin} a ${bagsMax} sacos (${bagWeightKg} kg)`
    : `${bagsMin} sacos (${bagWeightKg} kg)`;

  state.lastSimulation = {
    productName: product.name,
    heads,
    weightKg,
    days,
    bagWeightKg,
    headDayStr,
    lotDayStr,
    periodStr,
    bagsStr
  };

  document.getElementById("calcRuleInfo").textContent = `Referência do produto: ${product.consumptionText}`;
  document.getElementById("resHeadDay").textContent = headDayStr;
  document.getElementById("resLotDay").textContent = lotDayStr;
  document.getElementById("resPeriodTotal").textContent = `${periodStr} (${bagsStr})`;
}

function printCurrentSimulation() {
  calculateConsumption();
  const prodId = document.getElementById("calcProductSelect").value;
  closeCalculatorModal();
  printSingleProduct(prodId, true);
}

// =====================================================
// MÓDULO DE IMPRESSÃO COM LOGO HARPIA NUTRIÇÃO ANIMAL
// =====================================================
function getLogoUrl() {
  return window.HARPIA_LOGO_SRC || "logo-harpia.jpg";
}

function openPrintModal() {
  const filteredCount = getFilteredProducts().length;
  const selectedCount = state.selectedIds.size;

  document.getElementById("printScopeAllCount").textContent = `(${HARPIA_PRODUCTS.length} produtos)`;
  document.getElementById("printScopeFilteredCount").textContent = `(${filteredCount} produtos)`;
  document.getElementById("printScopeSelectedCount").textContent = `(${selectedCount} selecionados)`;

  const selectedRadio = document.getElementById("scopeSelectedRadio");
  if (selectedCount > 0) {
    selectedRadio.checked = true;
  } else if (filteredCount < HARPIA_PRODUCTS.length) {
    document.getElementById("scopeFilteredRadio").checked = true;
  } else {
    document.getElementById("scopeAllRadio").checked = true;
  }

  document.getElementById("printModal").classList.add("open");
}

function closePrintModal() {
  document.getElementById("printModal").classList.remove("open");
}

let isCustomPrintTriggered = false;

function executePrintFromModal() {
  const scope = document.querySelector('input[name="printScope"]:checked').value;
  const format = document.querySelector('input[name="printFormat"]:checked').value;
  const clientName = document.getElementById("printClientName").value.trim();
  const farmName = document.getElementById("printFarmName").value.trim();
  const consultantName = document.getElementById("printConsultantName").value.trim();
  const notes = document.getElementById("printCustomNotes").value.trim();
  const includeSim = document.getElementById("printIncludeSim").checked;

  let productsToPrint = [];
  if (scope === "selected" && state.selectedIds.size > 0) {
    productsToPrint = HARPIA_PRODUCTS.filter((p) => state.selectedIds.has(p.id));
  } else if (scope === "filtered") {
    productsToPrint = getFilteredProducts();
  } else {
    productsToPrint = [...HARPIA_PRODUCTS];
  }

  if (productsToPrint.length === 0) {
    productsToPrint = [...HARPIA_PRODUCTS];
  }

  isCustomPrintTriggered = true;
  buildPrintDocument({
    products: productsToPrint,
    format,
    clientName,
    farmName,
    consultantName,
    notes,
    includeSim: includeSim && state.lastSimulation
  });

  closePrintModal();
  setTimeout(() => {
    window.print();
    isCustomPrintTriggered = false;
  }, 150);
}

function printSingleProduct(productId, withSim = false) {
  const product = HARPIA_PRODUCTS.find((p) => p.id === productId);
  if (!product) return;

  isCustomPrintTriggered = true;
  buildPrintDocument({
    products: [product],
    format: "single",
    clientName: document.getElementById("printClientName")?.value?.trim() || "",
    farmName: document.getElementById("printFarmName")?.value?.trim() || "",
    consultantName: document.getElementById("printConsultantName")?.value?.trim() || "",
    notes: "",
    includeSim: withSim ? state.lastSimulation : null
  });

  setTimeout(() => {
    window.print();
    isCustomPrintTriggered = false;
  }, 150);
}

function buildPrintDocument({ products, format, clientName, farmName, consultantName, notes, includeSim }) {
  const printArea = document.getElementById("printArea");
  const logoSrc = getLogoUrl();
  const dateStr = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });

  const hasClientMeta = clientName || farmName || consultantName || notes;
  const clientBannerHtml = hasClientMeta
    ? `
      <div class="print-client-banner">
        ${clientName ? `<div><strong>Produtor / Cliente:</strong> ${clientName}</div>` : ""}
        ${farmName ? `<div><strong>Propriedade / Fazenda:</strong> ${farmName}</div>` : ""}
        ${consultantName ? `<div><strong>Consultor Técnico:</strong> ${consultantName}</div>` : ""}
        ${notes ? `<div style="width:100%;"><strong>Observações Técnicas:</strong> ${notes}</div>` : ""}
      </div>
    `
    : "";

  const simBannerHtml = includeSim
    ? `
      <div class="print-client-banner" style="background:#fef3c7; border-color:#f59e0b; border-left:4px solid #d97706;">
        <div><strong>Simulação de Consumo (${includeSim.productName}):</strong></div>
        <div>Lote: <strong>${includeSim.heads} animais</strong> (${includeSim.weightKg} kg PV) por <strong>${includeSim.days} dias</strong></div>
        <div>Consumo/Cab: <strong>${includeSim.headDayStr}</strong> | Lote/Dia: <strong>${includeSim.lotDayStr}</strong></div>
        <div>Total no Período: <strong>${includeSim.periodStr} (${includeSim.bagsStr})</strong></div>
      </div>
    `
    : "";

  let contentHtml = "";

  if (format === "table") {
    const rows = products
      .map((p) => {
        const benefitsHtml = p.benefits
          .map((b, i) => `<div><strong>${i + 1} -</strong> ${b}</div>`)
          .join("");
        return `
          <tr>
            <td style="font-weight:900; font-size:11pt; text-align:center;">${p.groupIndex}</td>
            <td style="text-align:center;">${p.consumptionText}</td>
            <td class="td-produto ${p.cellClass}" style="font-weight:800; text-align:center;">${p.name}</td>
            <td style="text-align:center; font-weight:700;">${p.aditivado ? "ADITIVADO" : "—"}</td>
            <td style="text-align:center;">${p.category}</td>
            <td style="text-align:center;">${p.season}</td>
            <td style="text-align:center; color:#b45309;">${p.phases.cria ? "★".repeat(p.phases.cria) : "-"}</td>
            <td style="text-align:center; color:#b45309;">${p.phases.recria ? "★".repeat(p.phases.recria) : "-"}</td>
            <td style="text-align:center; color:#b45309;">${p.phases.engorda ? "★".repeat(p.phases.engorda) : "-"}</td>
            <td style="text-align:center; color:#b45309;">${p.phases.reproducao ? "★".repeat(p.phases.reproducao) : "-"}</td>
            <td style="text-align:center; color:#b45309;">${p.phases.producao ? "★".repeat(p.phases.producao) : "-"}</td>
            <td style="text-align:center; color:#b45309;">${p.phases.trabalho ? "★".repeat(p.phases.trabalho) : "-"}</td>
            <td>${benefitsHtml}</td>
          </tr>
        `;
      })
      .join("");

    contentHtml = `
      <table class="print-table">
        <thead>
          <tr>
            <th>Faixa</th>
            <th style="width:130px;">Consumo estimado a livre acesso</th>
            <th style="width:110px;">Produtos</th>
            <th>Aditivado</th>
            <th>Categoria animal</th>
            <th>Época do ano</th>
            <th>Cria</th>
            <th>Recria</th>
            <th>Engorda</th>
            <th>Reprodução</th>
            <th>Produção</th>
            <th>Trabalho / Manut.</th>
            <th>Benefícios</th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    `;
  } else if (format === "single" && products.length === 1) {
    const p = products[0];
    const phasesBadges = Object.entries(PHASE_NAMES)
      .map(([k, label]) => {
        const st = p.phases[k] || 0;
        return `
          <div style="border:1px solid #d1d5db; border-radius:6px; padding:6px 10px; text-align:center; background:${st > 0 ? "#fffbeb" : "#f9fafb"};">
            <div style="font-size:8pt; font-weight:700; color:#374151; text-transform:uppercase;">${label}</div>
            <div style="font-size:11pt; color:#d97706; font-weight:800;">${st > 0 ? "★".repeat(st) : "—"}</div>
          </div>
        `;
      })
      .join("");

    const benefitsList = p.benefits
      .map((b, i) => `<li style="margin-bottom:6px;"><strong>${i + 1}.</strong> ${b}</li>`)
      .join("");

    contentHtml = `
      <div style="border:2px solid #035e27; border-radius:10px; padding:16px; margin-bottom:14px;">
        <div style="display:flex; justify-content:space-between; align-items:center; border-bottom:2px solid #e5e7eb; padding-bottom:10px; margin-bottom:12px;">
          <div>
            <span style="background:#e6f4ea; color:#024b1f; padding:3px 8px; border-radius:4px; font-size:8.5pt; font-weight:700;">${p.lineName}</span>
            <h2 style="font-size:18pt; color:#024b1f; margin-top:4px;">${p.name}</h2>
          </div>
          <div style="text-align:right; font-size:9.5pt;">
            <div><strong>Categoria Animal:</strong> ${p.category}</div>
            <div><strong>Época Recomendada:</strong> ${p.season}</div>
            <div><strong>Classificação:</strong> ${p.aditivado ? "PRODUTO ADITIVADO" : "Linha Tradicional"}</div>
          </div>
        </div>

        <div style="background:#f3f4f6; border-left:4px solid #035e27; padding:10px 12px; border-radius:4px; margin-bottom:14px;">
          <div style="font-size:8.5pt; font-weight:700; text-transform:uppercase; color:#024b1f;">Consumo Estimado a Livre Acesso (Faixa ${p.groupIndex}% PV)</div>
          <div style="font-size:10.5pt; font-weight:700; margin-top:2px;">${p.consumptionText}</div>
        </div>

        <div style="margin-bottom:14px;">
          <div style="font-size:9pt; font-weight:700; text-transform:uppercase; color:#374151; margin-bottom:6px;">Indicação por Fase Produtiva</div>
          <div style="display:grid; grid-template-columns:repeat(6, 1fr); gap:8px;">
            ${phasesBadges}
          </div>
        </div>

        <div>
          <div style="font-size:9.5pt; font-weight:700; text-transform:uppercase; color:#024b1f; margin-bottom:8px;">Benefícios e Diferenciais Técnicos</div>
          <ul style="list-style:none; padding-left:0; font-size:10pt; line-height:1.5;">
            ${benefitsList}
          </ul>
        </div>
      </div>
    `;
  } else {
    // Cards Grid Print
    const cards = products
      .map((p) => {
        const activePhases = Object.entries(PHASE_NAMES)
          .filter(([k]) => p.phases[k] > 0)
          .map(([k, label]) => `<span class="print-phase-badge">${label}: ${"★".repeat(p.phases[k])}</span>`)
          .join("");

        const benefitsList = p.benefits
          .map((b, i) => `<li><strong>${i + 1} -</strong> ${b}</li>`)
          .join("");

        return `
          <div class="print-card">
            <div class="print-card-head">
              <span class="print-card-title">${p.name}</span>
              <span style="font-size:8pt; font-weight:700; color:#035e27;">Faixa ${p.groupIndex} | ${p.aditivado ? "ADITIVADO" : "Tradicional"}</span>
            </div>
            <div class="print-card-meta">
              <strong>Categoria:</strong> ${p.category} &nbsp;|&nbsp; <strong>Época:</strong> ${p.season}<br/>
              <strong>Consumo:</strong> ${p.consumptionText}
            </div>
            <div class="print-card-phases">
              ${activePhases}
            </div>
            <ul class="print-card-benefits" style="list-style:none; padding-left:0;">
              ${benefitsList}
            </ul>
          </div>
        `;
      })
      .join("");

    contentHtml = `<div class="print-cards-grid">${cards}</div>`;
  }

  printArea.innerHTML = `
    <div class="print-header">
      <div class="print-logo-box">
        <img src="${logoSrc}" alt="Logo Harpia Nutrição Animal" />
        <div class="print-title-block">
          <h1>Harpia Nutrição Animal</h1>
          <p>${format === "single" ? "Ficha Técnica Oficial de Produto" : "Catálogo Técnico de Produtos e Suplementos"}</p>
        </div>
      </div>
      <div class="print-meta-box">
        <div><strong>Data de Emissão:</strong> ${dateStr}</div>
        <div><strong>Produtos Listados:</strong> ${products.length}</div>
        <div><strong>Documento Técnico Oficial</strong></div>
      </div>
    </div>

    ${clientBannerHtml}
    ${simBannerHtml}
    ${contentHtml}

    <div class="print-footer">
      <div style="display:flex; align-items:center; gap:10px;">
        <img src="${logoSrc}" alt="Harpia Nutrição Animal" class="print-footer-logo" />
        <span><strong>Harpia Nutrição Animal</strong> — Excelência e Tecnologia em Suplementação Animal</span>
      </div>
      <div>Impresso em ${dateStr}</div>
    </div>
  `;
}

// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  // Garantir que todas as imagens de logo tenham o src carregado (arquivo local ou base64)
  const logoSrc = getLogoUrl();
  document.querySelectorAll(".harpia-logo-img").forEach((img) => {
    img.src = logoSrc;
  });

  // Listeners de filtros
  document.getElementById("searchInput").addEventListener("input", (e) => {
    state.search = e.target.value;
    renderCatalog();
  });

  document.getElementById("categorySelect").addEventListener("change", (e) => {
    state.category = e.target.value;
    renderCatalog();
  });

  document.getElementById("seasonSelect").addEventListener("change", (e) => {
    state.season = e.target.value;
    renderCatalog();
  });

  document.getElementById("groupSelect").addEventListener("change", (e) => {
    state.groupIndex = e.target.value;
    renderCatalog();
  });

  renderCatalog();

  // Preparar documento de impressão padrão caso o usuário pressione Ctrl+P direto no teclado
  window.addEventListener("beforeprint", () => {
    if (!isCustomPrintTriggered) {
      const productsToPrint =
        state.selectedIds.size > 0
          ? HARPIA_PRODUCTS.filter((p) => state.selectedIds.has(p.id))
          : getFilteredProducts();
      buildPrintDocument({
        products: productsToPrint.length > 0 ? productsToPrint : HARPIA_PRODUCTS,
        format: state.viewMode === "table" ? "table" : "cards",
        clientName: "",
        farmName: "",
        consultantName: "",
        notes: "",
        includeSim: state.lastSimulation
      });
    }
  });
});
