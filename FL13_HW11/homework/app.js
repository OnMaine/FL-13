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

// тут, с горем пополам, сделал дерево. Что-то спиздил, что-то достроил... Вроде збс.

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


// TODO закинь это в функцию как createTree, например назови attachListeners
// Что за elem? Переменная должна сразу говорить что в ней. Например folderElements
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


// Дальше треш который я пытался припаять)

rootNode.setAttribute('class', 'right-click-area'); //  это скорее всего- дичь. Ставлю арею на весь блок.

// тут создаю меню инером ( п.с.  не понимейшен куда его сувать, если припаять rootNode(вместо context), то получу меню, но пропадет дерево). АХхахахаха
// по идее задавать область '.right-click-area' елементам на которых должно юзаться, либо создать обертку в которой это будет активно. Я тупой...
// да и скорее всего оно рагульное, бикоз комуниздил код где все к елементам в хтмл конектилось, а тут через DOM пришлось паять, а я не особо кампутарщик.
const contextMenu = document.createElement('div');
contextMenu.classList.add('right-click-menu')
contextMenu.innerHTML =
  '<ul>'+
    '<li id="rename-btn">Rename</li>'+
    '<li id="delete-btn">Delete item</li>'+
  '</ul>';
rootNode.appendChild(contextMenu)


// тут как бы условия для менюшки. Какой кнопкой что делает, где какая область и т.п.
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
// тут потом доделаю удаление и переименование ( но я рагуль, потому что по идее нужно было как-то по другому саму менюшку делать.
// В чате киберкотлеты там вообще ракеты строят, а у меня код - "Петровичь" ( алкаш с 3-го падика))
document.querySelector('#rename-btn').addEventListener('click', () => {
    alert('Доделать Переименовать');
}, false);
document.querySelector('#delete-btn').addEventListener('click', () => {
    alert('Доделать Удалить');
}, false);
