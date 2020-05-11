const data = [
  {
    'folder': true,
    'title': 'Pictures',
    'children': [
      {
        'title': 'logo.png'
      },
      {
        'folder': true,
        'title': 'Vacations',
        'children': [
          {
            'title': 'spain.jpeg'
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Desktop',
    'children': [
      {
        'folder': true,
        'title': 'screenshots',
        'children': null
      }
    ]
  },
  {
    'folder': true,
    'title': 'Downloads',
    'children': [
      {
        'folder': true,
        'title': 'JS',
        'children': null
      },
      {
        'title': 'nvm-setup.exe'
      },
      {
        'title': 'node.exe'
      }
    ]
  },
  {
    'title': 'credentials.txt'
  }
];

const rootNode = document.getElementById('root');

function createTree(container, data) {
    let ul = document.createElement('ul');
    for (let obj of data) {
        let li = document.createElement('li');
        if (obj.folder) {
            li.className = 'folder';
            li.innerHTML = '<i class="material-icons folder_icon" id="open">folder</i>' + obj.title;
        } else {
            li.innerHTML = '<i class="material-icons insert_drive_file">insert_drive_file</i>' + obj.title;
        }
        ul.append(li);
        if (obj.children) {
            createTree(ul, obj.children);
        }
        if (obj.folder === true && !obj.children) {
            let p = document.createElement('p');
            p.className = 'closed';
            p.innerHTML = '<i>Folder is empty!</i>';
            ul.append(p);
        }
    }
    container.append(ul);
    if (ul.parentElement.tagName === 'UL') {
        ul.classList.toggle('closed');
    }
}

createTree(rootNode, data);

let elem = document.getElementsByClassName('folder');
for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener('click', openFolder);
}

function openFolder() {
    if (event.target.nextSibling.classList.contains('closed')) {
        event.target.nextSibling.classList.remove('closed');
        event.target.nextSibling.classList.toggle('open');
        event.target.firstChild.innerHTML = 'folder_open';
    } else {
        event.target.nextSibling.classList.remove('open');
        event.target.nextSibling.classList.toggle('closed');
        event.target.firstChild.innerHTML = 'folder';
    }
}

rootNode.setAttribute('class', 'right-click-area');

  let context = document.createElement('ul');
  context.innerHTML =
    '<ul class="right-click-menu">'+
     ' <li id="l1">Rename</li>'+
      '<li id="l2">Delete item</li>'+
    '</ul>';

const menuArea = document.querySelector('.right-click-area');
const menu = document.querySelector('.right-click-menu');

menuArea.addEventListener( 'contextmenu', event => {
    event.preventDefault();
    menu.style.top = `${event.clientY}px`;
    menu.style.left = `${event.clientX}px`;
    menu.classList.add('active');
}, false);

const leftMouse = 2;
document.addEventListener('click', event => {
    if (event.button !== leftMouse) {
        menu.classList.remove('active');
    }
}, false);

menu.addEventListener('click', event => {
    event.stopPropagation();
}, false);

document.querySelector('#l1').addEventListener('click', () => {
    alert('Доделать Переименовать');
}, false);
document.querySelector('#l2').addEventListener('click', () => {
    alert('Доделать Удалить');
}, false);
