const catCatalog = [
  { raca: "Persa", origem: "Irã", anoReconhecimento: 1871, soltaPelo: true, temperamento: "Calmo, afetuoso e silencioso", imagem: "./fotos/persian.jpg" },
  { raca: "Siamês", origem: "Tailândia", anoReconhecimento: 1878, soltaPelo: true, temperamento: "Brincalhão, vocal e inteligente", imagem: "./fotos/siamese.jpg" },
  { raca: "Maine Coon", origem: "Estados Unidos", anoReconhecimento: 1976, soltaPelo: true, temperamento: "Gentil, amigável e gigante", imagem: "./fotos/maine_coon.jpg" },
  { raca: "Sphynx", origem: "Canadá", anoReconhecimento: 2005, soltaPelo: false, temperamento: "Extrovertido, enérgico e apegado", imagem: "./fotos/sphynx.jpg" },
  { raca: "Bengal", origem: "Estados Unidos", anoReconhecimento: 1983, soltaPelo: true, temperamento: "Ativo, curioso e independente", imagem: "./fotos/bengal.jpg" },
  { raca: "Ragdoll", origem: "Estados Unidos", anoReconhecimento: 1960, soltaPelo: true, temperamento: "Dócil, tranquilo e carinhoso", imagem: "./fotos/ragdoll.jpg" },
  { raca: "British Shorthair", origem: "Reino Unido", anoReconhecimento: 1870, soltaPelo: true, temperamento: "Sossegado, leal e paciente", imagem: "./fotos/british_shorthair.jpg" },
  { raca: "Scottish Fold", origem: "Escócia", anoReconhecimento: 1966, soltaPelo: true, temperamento: "Amoroso, companheiro e adaptável", imagem: "./fotos/scottish_fold.jpg" },
  { raca: "American Curl", origem: "Estados Unidos", anoReconhecimento: 1986, soltaPelo: true, temperamento: "Orelhas curvadas, interativo e alegre", imagem: "./fotos/american_curl.jpg" },
  { raca: "Exótico", origem: "Estados Unidos", anoReconhecimento: 1966, soltaPelo: true, temperamento: "Preguiçoso, brincalhão e afetuoso", imagem: "./fotos/exotic_shorthair.jpg" },
  { raca: "Munchkin", origem: "Estados Unidos", anoReconhecimento: 2003, soltaPelo: true, temperamento: "Pernas curtas, veloz e muito dócil", imagem: "./fotos/munchkin.jpg" },
  { raca: "Devon Rex", origem: "Reino Unido", anoReconhecimento: 1979, soltaPelo: false, temperamento: "Travesso, palhaço e apegado", imagem: "./fotos/devon_rex.jpg" },
  { raca: "Abissínio", origem: "Etiópia", anoReconhecimento: 1882, soltaPelo: true, temperamento: "Super ativo, atlético e expressivo", imagem: "./fotos/abyssinian.jpg" },
  { raca: "Ocicat", origem: "Estados Unidos", anoReconhecimento: 1987, soltaPelo: true, temperamento: "Aparência selvagem, sociável e treinável", imagem: "./fotos/ocicat.jpg" },
  { raca: "Egyptian Mau", origem: "Egito", anoReconhecimento: 1956, soltaPelo: true, temperamento: "Rápido, leal e independente", imagem: "./fotos/egyptian_mau.jpg" },
  { raca: "Savannah", origem: "Estados Unidos", anoReconhecimento: 2001, soltaPelo: true, temperamento: "Extremamente alto, ativo e inteligente", imagem: "./fotos/savannah.jpg" },
  { raca: "Toyger", origem: "Estados Unidos", anoReconhecimento: 2007, soltaPelo: true, temperamento: "Parece um tigre, amigável e focado", imagem: "./fotos/toyger.jpg" },
  { raca: "Burmese", origem: "Mianmar", anoReconhecimento: 1936, soltaPelo: true, temperamento: "Sociável, brincalhão e confiante", imagem: "./fotos/burmese.jpg" },
  { raca: "Birmanês", origem: "França", anoReconhecimento: 1925, soltaPelo: true, temperamento: "Doce, gentil e curioso", imagem: "./fotos/birman.jpg" },
  { raca: "Singapura", origem: "Singapura", anoReconhecimento: 1982, soltaPelo: true, temperamento: "Pequeno, curioso e muito ativo", imagem: "./fotos/singapura.jpg" },
  { raca: "Korat", origem: "Tailândia", anoReconhecimento: 1965, soltaPelo: true, temperamento: "Observador, apegado ao dono e calmo", imagem: "./fotos/korat.jpg" },
  { raca: "Bobtail Japonês", origem: "Japão", anoReconhecimento: 1976, soltaPelo: true, temperamento: "Rabo curto, expressivo e ativo", imagem: "./fotos/japanese_bobtail.jpg" },
  { raca: "Russian Blue", origem: "Rússia", anoReconhecimento: 1912, soltaPelo: true, temperamento: "Tímido, inteligente e reservado", imagem: "./fotos/russian_blue.jpg" },
  { raca: "Norueguês da Floresta", origem: "Noruega", anoReconhecimento: 1977, soltaPelo: true, temperamento: "Independente, amigável e robusto", imagem: "./fotos/norwegian_forest_cat.jpg" },
  { raca: "Chartreux", origem: "França", anoReconhecimento: 1928, soltaPelo: true, temperamento: "Gentil, silencioso e excelente caçador", imagem: "./fotos/chartreux.jpg" },
  { raca: "Siberiano", origem: "Rússia", anoReconhecimento: 1990, soltaPelo: true, temperamento: "Pelagem tripla, brincalhão e hipoalergênico", imagem: "./fotos/siberian.jpg" },
  { raca: "Bombaim", origem: "Estados Unidos", anoReconhecimento: 1970, soltaPelo: true, temperamento: "Alerta, amigável e miado baixo", imagem: "./fotos/bombay.jpg" },
  { raca: "Manx", origem: "Ilha de Man", anoReconhecimento: 1920, soltaPelo: true, temperamento: "Sem cauda, brincalhão e inteligente", imagem: "./fotos/manx.jpg" },
  { raca: "Turco de Van", origem: "Turquia", anoReconhecimento: 1969, soltaPelo: true, temperamento: "Gosta de água, energético e inteligente", imagem: "./fotos/turkish_van.jpg" },
  { raca: "Havana Brown", origem: "Reino Unido", anoReconhecimento: 1958, soltaPelo: true, temperamento: "Exigente por atenção, brincalhão e dócil", imagem: "./fotos/havana_brown.jpg" },
];

const fotosTodos = [
  "abyssinian.jpg",
  "aegean.jpg",
  "american_bobtail.jpg",
  "american_curl.jpg",
  "american_shorthair.jpg",
  "american_wirehair.jpg",
  "arabian_mau.jpg",
  "australian_mist.jpg",
  "balinese.jpg",
  "bambino.jpg",
  "bengal.jpg",
  "birman.jpg",
  "bombay.jpg",
  "british_longhair.jpg",
  "british_shorthair.jpg",
  "burmese.jpg",
  "burmilla.jpg",
  "california_spangled.jpg",
  "chantilly_tiffany.jpg",
  "chartreux.jpg",
  "chausie.jpg",
  "cheetoh.jpg",
  "colorpoint_shorthair.jpg",
  "cornish_rex.jpg",
  "cymric.jpg",
  "cyprus.jpg",
  "devon_rex.jpg",
  "donskoy.jpg",
  "dragon_li.jpg",
  "egyptian_mau.jpg",
  "exotic_shorthair.jpg",
  "havana_brown.jpg",
  "himalayan.jpg",
  "japanese_bobtail.jpg",
  "javanese.jpg",
  "khao_manee.jpg",
  "korat.jpg",
  "kurilian.jpg",
  "laperm.jpg",
  "maine_coon.jpg",
  "manx.jpg",
  "munchkin.jpg",
  "nebelung.jpg",
  "norwegian_forest_cat.jpg",
  "ocicat.jpg",
  "oriental.jpg",
  "persian.jpg",
  "pixie_bob.jpg",
  "ragamuffin.jpg",
  "ragdoll.jpg",
  "russian_blue.jpg",
  "savannah.jpg",
  "scottish_fold.jpg",
  "selkirk_rex.jpg",
  "siamese.jpg",
  "siberian.jpg",
  "singapura.jpg",
  "snowshoe.jpg",
  "somali.jpg",
  "sphynx.jpg",
  "tonkinese.jpg",
  "toyger.jpg",
  "turkish_angora.jpg",
  "turkish_van.jpg",
  "york_chocolate.jpg",
];

const imagensConhecidas = new Set(catCatalog.map(g => g.imagem.replace(/^.*\//, '')));

fotosTodos.forEach((arquivo) => {
  if (!imagensConhecidas.has(arquivo)) {
    const raca = arquivo
      .replace(/\.jpg$/, '')
      .replace(/_/g, ' ')
      .replace(/\b\w/g, (c) => c.toUpperCase());

    catCatalog.push({
      raca,
      origem: 'Desconhecido',
      anoReconhecimento: 0,
      soltaPelo: false,
      temperamento: 'Não disponível',
      imagem: `fotos/${arquivo}`,
    });
  }
});

// ── 1 & 2: Renderizar os cards ──────────────────────────────────────────────
const divGatos = document.getElementById('gatos');

catCatalog.forEach((gato, index) => {
  const card = document.createElement('div');
  card.classList.add('gato-card');
  card.dataset.index = index;

  const img = document.createElement('img');
  img.src = new URL(gato.imagem, document.baseURI).href;
  img.alt = gato.raca;
  img.onerror = () => {
    console.warn('Falha ao carregar imagem:', gato.imagem, '=>', img.src);
    img.src = `https://placehold.co/200x200/221f1a/c9a84c?text=${encodeURIComponent(gato.raca)}`;
  };

  const nome = document.createElement('div');
  nome.classList.add('nome');
  nome.textContent = gato.raca;

  // ── 3: Alert com detalhes ao clicar ──────────────────────────────────────
  card.addEventListener('click', () => {
    alert(
      ` ${gato.raca}\n\n` +
      ` Origem: ${gato.origem}\n` +
      ` Ano de reconhecimento: ${gato.anoReconhecimento}\n` +
      ` Temperamento: ${gato.temperamento}`
    );
  });

  card.appendChild(img);
  card.appendChild(nome);
  divGatos.appendChild(card);
});

// helper: pegar todos os cards
const todosCards = () => divGatos.querySelectorAll('.gato-card');

// helper: limpar todas as classes de highlight
function limparHighlights() {
  todosCards().forEach(c => c.classList.remove('pelo', 'usa', 'busca'));
}

// ── 4: Botão vermelho — soltam pelo ──────────────────────────────────────────
document.getElementById('btn-pelo').addEventListener('click', () => {
  limparHighlights();
  todosCards().forEach((card, i) => {
    if (catCatalog[i].soltaPelo) card.classList.add('pelo');
  });
});

// ── 5: Botão azul — origem EUA ───────────────────────────────────────────────
document.getElementById('btn-usa').addEventListener('click', () => {
  limparHighlights();
  todosCards().forEach((card, i) => {
    if (catCatalog[i].origem === 'Estados Unidos') card.classList.add('usa');
  });
});

// ── 6: Filtro por texto — roxo ────────────────────────────────────────────────
document.getElementById('btn-filtrar').addEventListener('click', () => {
  const termo = document.getElementById('campo-busca').value.toLowerCase();
  if (!termo) return;
  limparHighlights();
  todosCards().forEach((card, i) => {
    const g = catCatalog[i];
    const corresponde =
      g.raca.toLowerCase().includes(termo) ||
      g.origem.toLowerCase().includes(termo) ||
      g.temperamento.toLowerCase().includes(termo);
    if (corresponde) card.classList.add('busca');
  });
});

// Enter no campo também filtra
document.getElementById('campo-busca').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') document.getElementById('btn-filtrar').click();
});

// Limpar highlights
document.getElementById('btn-limpar').addEventListener('click', () => {
  limparHighlights();
  document.getElementById('campo-busca').value = '';
});

// ── Exercícios 7–10 no console ────────────────────────────────────────────────
document.getElementById('btn-console').addEventListener('click', () => {
  console.clear();
  console.log('Exercícios 7–10');

  // 7: Gatos reconhecidos depois de 2000
  const apos2000 = catCatalog.filter(g => g.anoReconhecimento > 2000);
  console.log('\n7. Gatos reconhecidos depois de 2000:');
  apos2000.forEach(g => console.log(`- ${g.raca} (${g.anoReconhecimento})`));

  // 8: Média dos anos de reconhecimento
  const somaAnos = catCatalog.reduce((acc, g) => acc + g.anoReconhecimento, 0);
  const media = somaAnos / catCatalog.length;
  console.log('\n8. Média dos anos de reconhecimento:');
  console.log(media.toFixed(2));

  // 9: Gatos não EUA que não soltam pelo
  const naoEuaNaoPelo = catCatalog.filter(
    g => g.origem !== 'Estados Unidos' && !g.soltaPelo
  );
  console.log('\n9. Gatos fora dos EUA que não soltam pelo:');
  console.log(`Quantidade: ${naoEuaNaoPelo.length}`);
  naoEuaNaoPelo.forEach(g => console.log(`- ${g.raca} (${g.origem})`));

  // 10: Redirecionar para imagem da raça escolhida
  const racaDigitada = prompt('Qual raça de gato você quer ver?\n\nExemplo: Persa, Siamês, Bengal...');
  if (racaDigitada !== null && racaDigitada.trim() !== '') {
    const encontrado = catCatalog.find(
      g => g.raca.toLowerCase() === racaDigitada.trim().toLowerCase()
    );
    if (encontrado) {
      console.log(`%c\n10. Redirecionando para a imagem de: ${encontrado.raca}`, 'font-weight:bold; color:#7ec8e3');
      console.log(`   Caminho: ${encontrado.imagem}`);
      window.open(encontrado.imagem, '_blank');
    } else {
      console.log(`%c\n10. Raça "${racaDigitada}" não encontrada no catálogo.`, 'color:red');
      console.log('   Raças disponíveis:', catCatalog.map(g => g.raca).join(', '));
    }
  }
});


