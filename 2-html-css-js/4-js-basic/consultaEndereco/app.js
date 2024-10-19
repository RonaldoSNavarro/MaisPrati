function getAddress(cep) {
    cep = cep.replace(/\D/g, '')

    if(cep.length !== 8) {

    }

    let url = 'http://viacep.com.br/ws/' + cep + '/json/'

    const xmlHttp = new XMLHttpRequest()

    if(cep.length !== 8) {
        alert('Insira um CEP válido')
        return
    }

    xmlHttp.open('GET', url, true)

    xmlHttp.onreadystatechange = () => {
      if(xmlHttp.readyState === 4) {
        if(xmlHttp.status === 200) {
          let data = JSON.parse(xmlHttp.responseText)

          document.getElementById('logradouro').value = data.logradouro

          document.getElementById('bairro').value = data.bairro

          document.getElementById('cidade').value = data.localidade

          document.getElementById('uf').value = data.uf
        }
      }
    }
    xmlHttp.send()
  }