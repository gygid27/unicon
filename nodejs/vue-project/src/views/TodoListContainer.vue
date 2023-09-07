<template>
  <TodoListNew />
  <section class="container">
    <div class="row justify-content-center m-2">
      <TodoListMain />
    </div>
  </section>
</template>

<script>
import { ref, readonly, provide } from 'vue'
import { useStorage } from '../stores/storage'
import TodoListMain from '../components/TodoListMain.vue'
import TodoListNew from '../components/TodoListNew.vue'
export default {
  name: 'TodoListContainer',
  components: {
    TodoListNew,
    TodoListMain
  },
  setup() {
    const todos = ref([])
    const { loadTodos, saveTodos, storage_id } = useStorage()
    provide('todos', readonly(todos))

    const initTodos = (init_todos) => {
      todos.value = init_todos
    }
    const addTodo = (job, date) => {
      //새로운 할일 등록
      todos.value.push({
        id: storage_id.value++,
        job: job,
        date: date,
        completed: false
      })
      console.log('멍충이' + todos.value[todos.value.length - 1].id)
      saveTodos(todos)
    }
    const removeTodo = (id) => {
      todos.value.splice(id, 1)
      todos.value.forEach((todo, idx) => {
        todo.id = idx
      })
      saveTodos(todos)
    }
    const completeTodo = (id) => {
      todos.value.filter((todo) => todo.id == id).completed = true
      saveTodos(todos)
    }
    provide('addTodo', addTodo)
    provide('removeTodo', removeTodo)
    provide('completeTodo', completeTodo)

    loadTodos(initTodos) // 할일 목록 불러오기
  }
}
</script>
<style></style>
