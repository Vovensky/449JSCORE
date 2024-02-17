function addRepository(object, node, delCallBack) {
    let keys = ['name', 'stargazers_count', 'owner']
    let li = document.createElement('li');
    li.classList.add('repositoriesItem');
    let divWrapper = document.createElement('div');
    divWrapper.classList.add('divWrapper');
    let closeButton = document.createElement('button')
    closeButton.classList.add('closeButton');
    li.appendChild(divWrapper)
    li.appendChild(closeButton);

    for(let i=0; i<3; i++) {
      let value;
      value = keys[i] == 'owner' ? object[keys[i]].login : object[keys[i]]
      let divText = document.createElement('div');
      divText.classList.add('repositoriesText');
      divText.textContent = `${keys[i]}: ${value}`;
      divWrapper.appendChild(divText)
    }

    closeButton.addEventListener('click', (event) => {
        delCallBack(event);
    })
    node.appendChild(li)
}