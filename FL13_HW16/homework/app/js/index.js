const baseUrl = 'http://localhost:3000';
const appContainer = document.getElementById('app-container');


document.forms.create.onsubmit = function() {
  let newUser = {
    name: this.name.value,
    username: this.userName.value
  }
  createNewUser(newUser);
  return false;
};

function createNewUser(newUser) {
  let name = newUser.name;
  let username = newUser.username;

  let table = document.querySelector('tbody');
  let tableRow = document.createElement('tr');
  table.appendChild(tableRow);
  tableRow.innerHTML = `<td><span></span></td>
                        <td><input type="text" id="listName" name="Name"></td>
                        <td><input type="text" id="listNickname" name="Username"></td>
                        <td><input type="submit" value="Update"></td>
                        <td><input type="submit" value="Delete"></td>`;

  let userNameInput = document.getElementById('listName');
  userNameInput.setAttribute('value', name);

  let userNicnameInput = document.getElementById('listNickname');
  userNicnameInput.setAttribute('value', username);
}
