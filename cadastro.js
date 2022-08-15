const estados = [
    { value: 'AC', nome: 'Acre' },
    { value: 'AL', nome: 'Alagoas' },
    { value: 'AP', nome: 'Amapá' },
    { value: 'AM', nome: 'Amazonas' },
    { value: 'BA', nome: 'Bahia' },
    { value: 'CE', nome: 'Ceara' },
    { value: 'DF', nome: 'Distrito Federal' },
    { value: 'ES', nome: 'Espírito Santo' },
    { value: 'GO', nome: 'Goiás' },
    { value: 'MA', nome: 'Maranhão' },
    { value: 'MT', nome: 'Mato Grosso' },
    { value: 'MS', nome: 'Mato Grosso do Sul' },
    { value: 'MG', nome: 'Minas Gerais' },
    { value: 'PA', nome: 'Pará' },
    { value: 'PB', nome: 'Paraíba' },
    { value: 'PR', nome: 'Paraná' },
    { value: 'PE', nome: 'Pernambuco' },
    { value: 'PI', nome: 'Piauí' },
    { value: 'RJ', nome: 'Rio de Janeiro' },
    { value: 'RN', nome: 'Rio Grande do Norte' },
    { value: 'RS', nome: 'Rio Grande do Sul' },
    { value: 'RO', nome: 'Rondônia' },
    { value: 'RR', nome: 'Roraima' },
    { value: 'SC', nome: 'Santa Catarina' },
    { value: 'SP', nome: 'São Paulo' },
    { value: 'SE', nome: 'Sergipe' },
    { value: 'TO', nome: 'Tocantins' },
  ];
  
  estados.forEach((estado) => {
    document.getElementById(
      'estado'
    ).innerHTML += `<option value="${estado.value}">${estado.nome}</option>`;
  });
  
  const btnEnviar = document.getElementById('enviar');
  
  btnEnviar.addEventListener('click', (event) => {
    event.preventDefault();
  
    let nome = document.getElementById('nome').value;
    let endereco = document.getElementById('endereco').value;
    let cidade = document.getElementById('cidade').value;
    let estado = document.getElementById('estado').value;
    let miniCurriculo = document.getElementById('mini-curriculo').value;
    let listAreaInteresses = document.querySelectorAll('input[name="area"]:checked');
    let cargo = document.querySelector('input[name="cargo"]:checked').value;
  
    if (nome === '' || endereco === '' || cidade === '' || estado === 'selecione') {
      alert('Dados pessoais são obrigatórios!');
      return;
    }
  
    if (listAreaInteresses.length === 0) {
      alert('Deve selecionar ao menos uma área de interesse');
      return;
    }
  
    let areaInteresse = [];
  
    listAreaInteresses.forEach((interesse) => {
      areaInteresse.push(interesse.value);
    });
  
    let dadosUsuario = {
      nome,
      endereco,
      cidade,
      estado,
      cargo,
      areaInteresse,
      miniCurriculo,
    };
    console.log('sem for in', dadosUsuario);
    imprimirDados(dadosUsuario);
  
    resetDados();
  });
  
  function imprimirDados(dados) {
    for (const key in dados) {
      console.log(`${key}: ${dados[key]}`);
    }
  }
  
  function resetDados() {
    document.getElementById('nome').value = '';
    document.getElementById('endereco').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
    document.getElementById('mini-curriculo').value = '';
  }
  