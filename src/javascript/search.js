// чтобы поиск открывался при нажатии на инпут
function openDiv() {
  const linksList = document.querySelector('.list')
  linksList.classList.remove('hiddenList')
}

function liveSearch() {
  // Получаем значение поискового поля
  const input = document.querySelector('.search_input')
  const filteredInput = input.value.toUpperCase()

  // Получаем элементы для поиска
  const items = document.querySelectorAll('.searchable')

  // Проходимся циклом по всем элементам
  for (let i = 0; i < items.length; i++) {
    let item = items[i]

    // Получаем текст элемента
    let text = item.textContent || item.innerText

    // Проверяем, содержит ли текст значение поискового поля
    if (text.toUpperCase().indexOf(filteredInput) > -1) {
      item.style.display = 'block'
    } else {
      item.style.display = 'none'
    }
  }
}

// Добавляем обработчик события на ввод текста в поисковое поле
document.querySelector('.search_input').addEventListener('input', liveSearch)

// чтобы поиск скрывался при нажатии на другой блок
function focusOut() {
  const linksList = document.querySelector('.list')
  linksList.classList.add('hiddenList')
}
