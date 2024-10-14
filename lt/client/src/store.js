import { createStore } from "vuex";

const store = createStore({
  state: {
    count: 0,
    todos: [
      {
        id: 1,
        status: true,
        name: "code",
      },
      {
        id: 2,
        status: false,
        name: "đá bóng",
      },
      {
        id: 3,
        status: true,
        name: "cầu lông",
      },
    ],
    users:[]
  },
  getters: {
    getCount: (state) => {
      return state.count;
    },
    doneTodo: (a) => {
      return a.todos.filter((item) => item.status);
    },
  },
  mutations: {
    // đi định nghĩa các phương thức để tương tác với state, chính là dữ liệu
    increment: (a, paynoad) => {
      console.log("giá trị nhận về là:", paynoad);
      a.users = paynoad.amount
    },
  },
  actions: {
    incrementAsync({ commit }) {
      // console.log("commit",commit);

      //   setTimeout(() => {
      //     commit("increment",{
      //         amount:6
      //     });
      //   }, 3000);
      // lấy data từ api
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => {
          console.log(data),
            commit("increment", {
              amount: data,
            });
        })
        .catch((err) => console.log("bug", err));
    },
  },
});

export default store;
