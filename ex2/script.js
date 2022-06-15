const btn = document.getElementById("btn");
const body = document.querySelector("body");

const fetchAndLog = async () => {
    var name = document.getElementById("txtname").value;
    var country = document.getElementById("pays").value;
    console.log(country)
    const response = await fetch('https://api.agify.io?name='+name+'&country_id='+country);
    const json = await response.json().catch(console.error);


    const list = document.createElement("ul");
    
    document.querySelector('.ligen').appendChild(list);

        var item = document.createElement('li');
        item.appendChild(document.createTextNode("your name is " + json.name + " the avg age of "+ json.name +" is "+ json.age +"years old and your are "+ json.count +" on " + json.country_id));
        list.appendChild(item);
}

btn.addEventListener('click', fetchAndLog);