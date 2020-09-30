const btnAddTask = document.querySelector('#adicionar-tarefa');
btnAddTask.addEventListener('click', createTask);
const inputTask = document.querySelector('#tarefa-digitada');
const divTask = document.querySelector('#tarefas');

function createTask() {
  if (inputTask.value.trim() === '') {
    alert('Digite alguma Tarefa');
    return;
  }
  let task = `
  <div class="col-md-4">
    <div class="card-tarefa">
      <div class="texto-tarefa">${inputTask.value}</div>
      <div class="botao-tarefa">
        <img
          src="img/check.png"
          width="32"
          alt="Botão para finalizar tarefa"
          title="Botão para finalizar tarefa"
        />
      </div>
    </div>
  </div>
`;

  divTask.innerHTML += task;
  cleanInputTask();
  closedTask();
}

inputTask.addEventListener('keyup', function (e) {
  if (e.key === 'Enter') return createTask();
});

function cleanInputTask() {
  inputTask.value = '';
}

function closedTask() {
  const btnFinishTask = document.querySelectorAll('.botao-tarefa');
  btnFinishTask.forEach((value) => {
    value.addEventListener('click', (e) => {
      if (confirm('Deseja finalizar tarefa?')) {
        value.parentElement.parentElement.remove();
      }
    });
  });
}
