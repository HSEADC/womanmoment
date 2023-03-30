// чтобы поиск открывался при нажатии на инпут
function openDiv() {
  var linksList = document.querySelector('.list');
  linksList.classList.remove('hiddenList');
}

function liveSearch() {
  // Получаем значение поискового поля
  var input = document.querySelector('.search_input');
  var filteredInput = input.value.toUpperCase(); // Получаем элементы для поиска

  var items = document.querySelectorAll('.searchable'); // Проходимся циклом по всем элементам

  for (var i = 0; i < items.length; i++) {
    var item = items[i]; // Получаем текст элемента

    var text = item.textContent || item.innerText; // Проверяем, содержит ли текст значение поискового поля

    if (text.toUpperCase().indexOf(filteredInput) > -1) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  }
} // Добавляем обработчик события на ввод текста в поисковое поле


document.querySelector('.search_input').addEventListener('input', liveSearch); // чтобы поиск скрывался при нажатии на другой блок

function focusOut() {
  var linksList = document.querySelector('.list');
  linksList.classList.add('hiddenList');
}