let dadosFiltrados = [];

function processar() {
  const texto = ``;

  const textoInput = document.querySelector('#input').value;  

  let linhas = texto.split('\n');

  if(textoInput != '') {
    linhas = textoInput.split('\n');
  }

  const mes = document.getElementById('mes').value;
  const ano = document.getElementById('ano').value;
  const notaFiltro = document.getElementById('nota').value;

  const tbody = document.querySelector('#tabela tbody');
  const resumo = document.getElementById('resumo');

  tbody.innerHTML = '';
  resumo.innerHTML = '';

  let total = 0;
  let notas = {};
  dadosFiltrados = [];

  // 🔥 controle de duplicados
const registrosUnicos = new Set();

for (let i = 0; i < linhas.length; i++) {
  let nome = linhas[i]?.trim();

  // ignora linhas vazias
  if (!nome) continue;

  let notaLinha = linhas[i + 1]?.trim();
  let dataLinha = linhas[i + 2]?.trim();

  // valida nota e data
  if (!notaLinha || !dataLinha) continue;
  if (!notaLinha.match(/^\d,\d$/)) continue;
  if (!dataLinha.match(/^\d{2}\/\d{2}\/\d{4}$/)) continue;

  const nota = notaLinha.replace(',', '.');
  const [dia, mesLinha, anoLinha] = dataLinha.split('/');
  const data = dataLinha;

  // 🔥 chave única
  const chave = `${nome.toLowerCase()}-${nota}-${data}`;
  if (registrosUnicos.has(chave)) continue;
  registrosUnicos.add(chave);

  // filtros
  if (
    (mes === "todos" || mesLinha === mes) &&
    anoLinha === ano &&
    (notaFiltro === "todas" || nota === notaFiltro)
  ) {
    total++;
    notas[nota] = (notas[nota] || 0) + 1;

    dadosFiltrados.push({
      nome,
      nota,
      data,
      timestamp: new Date(anoLinha, mesLinha - 1, dia)
    });
  }

  // 🔥 pula para próxima avaliação (pelo menos 3 linhas)
  i += 2;
}

  // 🔥 ORDENAÇÃO (mais recente primeiro)
  dadosFiltrados.sort((a, b) => b.timestamp - a.timestamp);

  // render tabela
  dadosFiltrados.forEach(d => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${d.nome}</td>
      <td>${d.nota}</td>
      <td>${d.data}</td>
    `;
    tbody.appendChild(tr);
  });

  // total
  resumo.innerHTML += `
    <div class="card">
      <strong>Total:</strong><br>${total}
    </div>
  `;

  // por nota
  Object.keys(notas)
    .sort((a, b) => b - a)
    .forEach(nota => {
      const quantidade = notas[nota];
      const percentual = total > 0
        ? ((quantidade / total) * 100).toFixed(1)
        : 0;

      resumo.innerHTML += `
        <div class="card">
          <strong>Nota ${nota}:</strong><br>
          ${quantidade} avaliações<br>
          <small>${percentual}% do total</small>
        </div>
      `;
    });
}

function exportarCSV() {
  if (dadosFiltrados.length === 0) {
    alert('Nenhum dado para exportar!');
    return;
  }

  let csv = "Nome;Nota;Data\n";

  dadosFiltrados.forEach(d => {
    csv += `${d.nome};${d.nota};${d.data}\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'avaliacoes_filtradas.csv';
  a.click();
}

// 🔥 necessário se estiver usando onclick no HTML
window.processar = processar;
window.exportarCSV = exportarCSV;
