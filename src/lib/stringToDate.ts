export default function stringToDate(dataStringDdMmYyyy: string) {
  if(dataStringDdMmYyyy === "") {
    return ""
  }
  if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dataStringDdMmYyyy)) {
    throw new Error("Formato de data inválido.");
  }

  // 1. Divide a string original em dia, mês e ano
  const partes = dataStringDdMmYyyy.split('/');
  const dia = partes[0];
  const mes = partes[1];
  const ano = partes[2];

  // 2. (Opcional mas recomendado) Validação básica dos componentes
  // Esta validação não verifica se o dia é válido para o mês (ex: 31/02)
  // Isso geralmente é melhor tratado no backend ou com bibliotecas de data mais robustas
  const diaNum = parseInt(dia, 10);
  const mesNum = parseInt(mes, 10);
  const anoNum = parseInt(ano, 10);

  if (isNaN(diaNum) || isNaN(mesNum) || isNaN(anoNum) ||
      diaNum < 1 || diaNum > 31 ||
      mesNum < 1 || mesNum > 12 ||
      anoNum < 1000 || anoNum > 9999) { // Limites de ano arbitrários, ajuste se necessário
    throw new Error("Valores de data inválidos");
  }


  // 3. Formata para YYYY-MM-DD
  // Garantir que dia e mês tenham dois dígitos (padStart adiciona '0' à esquerda se necessário)
  const diaFormatado = String(diaNum).padStart(2, '0');
  const mesFormatado = String(mesNum).padStart(2, '0');

  return `${ano}-${mesFormatado}-${diaFormatado}`;
}