let input = document.getElementById('textField')
let listColor = []

// Função para criar item. 
function newItem() {
    let list = document.getElementById('list')
    let inputText = document.getElementById('textField').value
    let item = document.createTextNode(inputText.trim())

    let span = document.createElement('span')
    span.className = 'del'
    span.innerHTML = '&times'
    span.setAttribute('onclick', 'del(this)')

    let li = document.createElement('li')
    li.setAttribute('onclick', 'check(this)')
    li.appendChild(item)

    if(li.innerText === ""){
        document.getElementById('textField').placeholder = 'É necessário escrever algo!'
    }else{
        listColor.push(li)
        color()
        li.appendChild(span)
        list.appendChild(li)
        input.value = ''
        document.getElementById('textField').placeholder = 'Inserir item...'
    }
    listColor.forEach(e => e.style.display = 'flex')
}

// Funções para adicionar item.
document.getElementById('btnAdd').onclick = function(){newItem()}
input.addEventListener('keypress', function(e){
    if(e.key === 'Enter'){
        e.preventDefault();
        newItem();
    }
})

// Função para marcar item. 
function check(e){
    !e.classList.contains('checked') ? e.classList.add('checked') : e.classList.remove('checked')
}

// Função para deletar item. 
function del(e){
    const parent = e.closest('li')
    parent.remove()
      
    let liAll = document.querySelectorAll('li') 
    listColor = Array.from(liAll)
    color()
}

// Função que controla a cor da tag 'li'
function color(){
    listColor.forEach(function(value,index) {
        if(index%2 === 0){
            value.style.backgroundColor = '#ddd'
        }else{
            value.style.backgroundColor = '#eee'
        }
    })
}

// Função pesquisar
function search(){
    let word = input.value.toLowerCase()
    let itens = document.querySelectorAll('li')

    for(let i=0; i<itens.length; i++){
        if(!itens[i].innerHTML.toLowerCase().includes(word)){
            itens[i].style.display = 'none'
        }else{
            itens[i].style.display = 'flex'
        }
    }
}