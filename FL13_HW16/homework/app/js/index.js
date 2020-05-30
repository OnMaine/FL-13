const baseUrl = 'http://localhost:3000';
const appContainer = document.getElementById('app-container');


document.forms.create.onsubmit = function() {
  createUser({
    name: this.name.value,
    nickname: this.nickname.value
  });
  return false;
};

function createUser({ name, nickname }) {
  // call API
  renderTable([{
    id: makeRequest('POST', baseUrl),
    name,
    nickname
  }])
}

function updateUser(id) {

  const name = document.getElementById('name-' + id).value;
  const nickname = document.getElementById('nickname-' + id).value;

  // call API
  renderTable([{
    id: makeRequest('POST', baseUrl),
    name,
    nickname
  }])
}

function renderTable(users) {
  const table = document.getElementById('table-entrypoint');
  const rows = []
  users.forEach(user => {
    rows.push(`
      <tr>
        <td><span>${user.id}</span></td>
        <td><input value="${user.name}" id="name-${user.id}"></td>
        <td><input value="${user.nickname}" id="nickname-${user.id}"></td>
        <td><button onclick="updateUser(${user.id})">Update</button></td>
        <td><button onclick="deleteUser(${user.id})">Delete</button></td>
      </tr>
    `)
  })
  table.innerHTML = rows.join('\n')
}

function makeRequest(method, url) {
  let xhr = new XMLHttpRequest();
  xhr.open(method, url);
  xhr.onload = function() {
    alert('тут походу что-то нужно вставить? ф-цию которая и должна что-то делать?');
  };
  xhr.onerror = function() {
    alert('Error. Something went wrong');
  };
  xhr.send();
}
