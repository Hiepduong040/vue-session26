<template>
  <div>
    <h1>header </h1>
    <p>Giá trị của count: {{ store.state.count }}</p>
    <button @click="increaseCount">increase</button>
    <button @click="handleClick">increase after 1 second</button>
    <p>Giá trị count lấy theo getter là: {{ store.getters.getCount }}</p>
    <ul>
        <li v-for="todo in store.state.todos" :key="todo.id">
            {{ todo.name }}
        </li>
    </ul>
    
    <ul>
        <li v-for="todo in doneTodos" :key="todo.id">
            {{ todo.name }}
        </li>
    </ul>
    
    <ul>
        <li v-for="user in store.state.users" :key="user.id">
            {{ user.name }}
        </li>
    </ul>
    
    <button @click="getDoneTodo">lấy ra các công việc đã hoàn thành</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from 'vuex';
const doneTodos = ref([]);
const store = useStore();
console.log("Giá trị của store",store);
const getDoneTodo =()=>{
    console.log("các công việc đã hoàn thành",store.getters.doneTodo);
    doneTodos.value = store.getters.doneTodo
}
// hàm tăng count
const increaseCount =()=>{
    store.commit("increment",{
        amount:5
    })
}

const handleClick=()=>{
    store.dispatch("incrementAsync")
}

</script>

<style>

</style>