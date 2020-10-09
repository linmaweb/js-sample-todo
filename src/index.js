import { renderTodos } from "./views";
import { setFilters } from "./filters";
import { createTodo, loadTodos } from "./todos";
import { searchTextEl, newToDoEl, hideCompletedEl } from './variables';

renderTodos();

searchTextEl.addEventListener("input", (e) => {
  setFilters({
    searchText: e.target.value,
  });
  renderTodos();
});

newToDoEl.addEventListener("submit", (e) => {
  const text = e.target.elements.text.value.trim();
  e.preventDefault();

  if (text.length > 0) {
    createTodo(text);
    renderTodos();
    e.target.elements.text.value = "";
  }
});

hideCompletedEl.addEventListener("change", (e) => {
  setFilters({
    hideCompleted: e.target.checked,
  });
  renderTodos();
});

window.addEventListener("storage", (e) => {
  if (e.key === "todos") {
    loadTodos();
    renderTodos();
  }
});
