const form = document.getElementById('form')
const elementGrupo = document.getElementById('classificacao')
const elementNome = document.getElementById('nome')
const elementTel = document.getElementById('telefone')
let qntddContatos = 0
let linhas = ''
let opcoesSelect = `<option value="" hidden disabled selected></option><option value="Amigo" >Amigos</option><option value="Trabalho">Trabalho</option><option value="Familia">Familia</option><option value="Urgencia">Urgencia</option><option value="custom">Outro</option>`
let grupos = ['Amigo', 'Trabalho', 'Familia', 'Urgencia']


form.addEventListener('submit', function(e) {
    e.preventDefault()
    
    
    if (verificaCustomClass()){} else {
        atualizaTabela(adicionaLinha())
        atualizaContatosSalvos()
    }

    elementNome.value = ''
    elementTel.value = ''
    elementGrupo.selectedIndex = 0

})


function verificaCustomClass() {
    const valorSelect = elementGrupo.value;

    if (valorSelect === 'custom') {
        novoGrupo()
        return true
    } else {
        return false
    }
}

function novoGrupo() {
    const newGroupName = prompt('Como deseja que seja o nome do grupo que deseja criar')
    
    if (grupos.includes(newGroupName)) {
        alert('Essa classificação jé está cadastrada')
    } else {
    const elementSelect = document.querySelector('select')
    
    opcoesSelect += `<option value"${newGroupName}">${newGroupName}</option>`
    elementSelect.innerHTML = opcoesSelect
    alert(`Classificação "${newGroupName}" foi adicionada com sucesso`)
    grupos.push(newGroupName)
}}

function adicionaLinha(){

    let linha = '<tr>'; 
    linha += `<td>${elementNome.value}</td>`
    linha += `<td>${elementTel.value}</td>`
    linha += `<td>${elementGrupo.value}`
    linha += '<tr>'

    linhas += linha
    return linhas
}

function atualizaTabela(novaLinha) {
    
    const tabela = document.querySelector('tbody')
    tabela.innerHTML = novaLinha
}

function atualizaContatosSalvos() {
    qntddContatos ++

    const elementQNTDDContatosSalvos = document.getElementById('qntdd-contatos-salvos')
    elementQNTDDContatosSalvos.innerHTML = qntddContatos
}