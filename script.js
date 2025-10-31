const form = getElementById('todoForm')
const todo = getElementById('tugas')
const date = getElementById('tanggal')
const bersihkanBtn = getElementById('bersihkan')
const todoList = getElementById('todo-list')

form.addEventListener('submit' (e) => {
  e.preventDefault()
  
  const tugas = todo.value.trim()
  const tanggal = date.value
  if (!tugas) return 
  
  if 
  (todoList.firstElementChild.textContent === 'tugas tidak ditemukan') {
    todoList.innerHTML = ''
  }
  
  const li = document.createElement('li')
  li.textContent = `${tugas} - ${tanggal}`
  
  const delBtn = docunent.createElement('button')
  delBtn.textContent = 'hapus'
  delBtn.className = 'delete-btn'
  delBtn.onclick = () => li.remove()
 
  li.appendChild(delBtn)
  todoList.appendChild(li)
  
  todo.value = ''
  date.value = ''
})

bersihkanBtn.addEventListener('click' = () => {
  todoList.innerHTML = '<li>tugas tidak ditemukan</li>'
})