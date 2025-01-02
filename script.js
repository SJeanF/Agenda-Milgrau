const form = document.getElementById('form')
const elementGrupo = document.getElementById('classificacao')
const elementNome = document.getElementById('nome')
const elementTel = document.getElementById('telefone')
let qntddContatos = 0
let linhas = ''
let pessoas = []
let telefones = []

form.addEventListener('submit', function(e) {
    e.preventDefault()
    
    
    if (!verificaCustomClass()){
        atualizaTabela(adicionaLinha())
        atualizaContatosSalvos()
    }
})


function verificaCustomClass() {
    const indiceSelecionado = elementGrupo.value;

    if (indiceSelecionado === 'custom') {
        novoGrupo()
        return true
    }
}

function novoGrupo() {
    const newGroupName = prompt('Como deseja que seja o nome do grupo que deseja criar')
    let opcoesSelect = `<option value="" hidden disabled selected></option><option value="Amigo" >Amigos</option><option value="Trabalho">Trabalho</option><option value="Familia">Familia</option><option value="Urgencia">Urgencia</option><option value="custon">Outro</option>`
    const elementSelect = document.querySelector('select')
    
    opcoesSelect += `<option value"${newGroupName}">${newGroupName}</option>`
    elementSelect.innerHTML = opcoesSelect

    elementNome.value = ''
    elementTel.value = ''
    elementGrupo.selectedIndex = 0
    alert(`Classificação "${newGroupName}" foi adicionada com sucesso`)
}

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