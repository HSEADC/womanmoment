const resultLinks = [
  { name: 'История 8 марта', href: '/historyofmart.html' },
  { name: 'Семиотика кухни', href: '/artpieces/artpiece1.html' },
  { name: 'Бетти Фридан', href: '/activity.html' },
  { name: 'Смелая', href: '/book2.html' },
  { name: 'Загадка женственности', href: '/book1.html' },
  { name: 'Fem Talks', href: '/podcast.html' },
  { name: 'Революция и феминизм', href: '/revolution.html' },
  { name: 'Абигейл Смит Адамс', href: '/adams.html' },
  { name: 'Суфражизм', href: '/sufragette.html' },
  { name: 'Ана Мендиета', href: '/ana-mendieta.html' },
  { name: 'Арт-феминизм', href: '/art-feminism.html' },
  { name: 'Яеи Кусама', href: '/kusama.html' },
  { name: 'Кэроли Шнееманн', href: '/sheeman.html' },
  { name: 'Работы Синди Шерман', href: '/sherman.html' }
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
