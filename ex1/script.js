const btn = document.getElementById("btn");
const body = document.querySelector("body");

const fetchAndLog = async () => {
    const response = await fetch('becode.json');
    const json = await response.json();

    const list = document.createElement("ul");
    
    document.querySelector('.ligen').appendChild(list);

    for (var i = 0; i < json.length; i++) {
        var item = document.createElement('li');
        item.appendChild(document.createTextNode(json[i]));
        list.appendChild(item);
    }
}

btn.addEventListener('click', fetchAndLog);