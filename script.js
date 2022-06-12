let xmlhttp = new XMLHttpRequest();
let button = document.querySelector(".button1")
 xmlhttp.onload = function(){
    if(this.readyState == 4 && this.status == 200){
        // console.log(xmlhttp.responseText);
       let  response = JSON.parse(xmlhttp.responseText);
       let title = response.title;
       let divValue1 = document.querySelector(".json-overlay");
      
        for(let i = 0; i < response.length; i++){
        // console.log(response[i].title);
        
        // divValue1 += response[i].title;
        let article = document.createElement("article");
        article.className = "json-content";
        let section = document.createElement("section");
        section.className = "json-overlay";
        let div = document.createElement("div")
        div.className = "top";
        let divContent = document.createElement("h3");
        divContent.textContent = response[i].title;
        let img = document.createElement("img");
        img.setAttribute("src", "images/icon-ellipsis.svg");
        div.appendChild(divContent);
        div.appendChild(img);
        section.appendChild(div);
        article.appendChild(section);
        // console.log(content);
        document.querySelector(".container").appendChild(article);
        let div2 = document.createElement("div");
        div2.className = "bottom";
        let divContent2 = document.createElement("h2")
        divContent2.className = "text";
        divContent2.textContent = response[i].timeframes.weekly.current;
        // let concat = 
        let div3 = document.createElement("div");
        div3.className = "timeCheck";
        let p = document.createElement("p");
        p.className = "prev";
        p.innerText = "Last Week";
        let p2 = document.createElement("p");
        p2.textContent = response[i].timeframes.weekly.previous;
        p2.className = "prevNum";
        `${p} - ${p2}`;
        div3.textContent =  `${p.textContent} - ${p2.textContent}hrs`
        divContent2.textContent = `${divContent2.textContent}hrs`;
        div2.appendChild(divContent2)
        div2.appendChild(div3);
        // div2.appendChild
        section.appendChild(div2);
  }
 }
};

xmlhttp.open("GET", "data.json", true);
xmlhttp.send();

