// Calculadora de Concentração Molar
function calcularConcentracaoMolar() {
  let quantidadeSoluto = parseFloat(document.getElementById('quantidade-soluto').value);
  let volumeSolucao = parseFloat(document.getElementById('volume-solucao').value);

  if (!isNaN(quantidadeSoluto) && !isNaN(volumeSolucao)) {
    let concentracaoMolar = quantidadeSoluto / volumeSolucao;
    document.getElementById('resultadoMolar').innerHTML = `Concentração Molar: ${concentracaoMolar.toFixed(2)} mol/L`;
    document.getElementById('resultadoMolar').classList.remove('hidden');
  } else {
    alert('Por favor, insira valores válidos para a quantidade de soluto e volume da solução.');
  }
}
  // Calculadora de Variação de Entalpia
  function calcularVariacaoEntalpia() {
    let calorReacao = parseFloat(document.getElementById('calor-reacao').value);
    let quantidadeSubstancia = parseFloat(document.getElementById('quantidade-substancia').value);
  
    if (!isNaN(calorReacao) && !isNaN(quantidadeSubstancia)) {
      let variacaoEntalpia = calorReacao / quantidadeSubstancia;
      document.getElementById('resultadoEntalpia').innerHTML = `Variação da Entalpia: ${variacaoEntalpia.toFixed(2)} J/mol`;
      document.getElementById('resultadoEntalpia').classList.remove('hidden');
    } else {
      alert('Por favor, insira valores válidos para o calor da reação e quantidade de substância.');
    }
  }
  
  // Calculadora de Distribuição Iônica
  function calcularDistribuicaoIonica() {
    let concentracaoSal = parseFloat(document.getElementById('concentracao-sal').value);
    let volumeSolucao = parseFloat(document.getElementById('volume-solucao-distribuicao').value);
  
    if (!isNaN(concentracaoSal) && !isNaN(volumeSolucao)) {
      let concentracaoIonica = concentracaoSal * volumeSolucao; // Simulação do cálculo, ajuste conforme necessário
      document.getElementById('resultadoDistribuicao').innerHTML = `Distribuição Iônica: ${concentracaoIonica.toFixed(2)} mol/L`;
      document.getElementById('resultadoDistribuicao').classList.remove('hidden');
    } else {
      alert('Por favor, insira valores válidos para a concentração do sal e volume da solução.');
    }
  }
  