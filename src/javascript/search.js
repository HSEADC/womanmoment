const resultLinks = [
  { name: 'История 8 марта', href: '/historyofmart.html' },
  { name: 'Семиотика кухни', href: '/semiotickitchen.html' },
  { name: 'Бетти Фридан', href: '/activity.html' },
  { name: 'Смелая', href: '/book2.html' },
  // массив
]

async function liveSearch() {
  const linksList = document.querySelector('.list')
  const input = document.querySelector('.search_input')

  if (input.value.length < 1 || !input.value) {
    linksList.classList.add('hiddenList')
    linksList.querySelector('ul').innerHTML = '' // Очищаем содержимое списка
  } else {
    linksList.classList.remove('hiddenList')
  }

  const filteredInput = input.value.toUpperCase()
  const filteredLinks = resultLinks.filter((el) =>
    el.name.toUpperCase().includes(filteredInput)
  )

  const listElement = linksList.querySelector('ul')
  listElement.innerHTML = '' // Очищаем содержимое списка перед добавлением новых элементов

  filteredLinks.forEach((el) => {
    const listItem = document.createElement('li')
    const link = document.createElement('a')
    link.href = el.href
    link.textContent = el.name
    link.className = 'links'
    listItem.appendChild(link)
    listElement.appendChild(listItem)
  })
}

document.querySelector('.search_input').addEventListener('input', liveSearch)
