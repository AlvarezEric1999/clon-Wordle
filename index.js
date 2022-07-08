




const grid = document.querySelector("#grid");
const keyboard = document.querySelector("#keyboard");
const keyboardLetters = [
["q","w","e","r","t","y","u","i","o","p"],
["a","s","d","f","g","h","j","k","l",],
["enter","z","x","c","v","b","n","m","delete"],

];

let attempt = 0;
const row = [];

for (let rows = 0; rows < 5 ; rows++) {
    const list = document.createElement('ul');
    list.classList.add("grid-row");
    
    for (let column = 0; column < 6; column++) {
        const item = document.createElement('li')
        item.classList.add("row-item");
        item.id= `${rows}-${column}`;
        list.appendChild(item)
    }
    
 row.push(list)
    
}

grid.append(...row)




const listElement = [];
let answer = [];
const secretWord = ["p","l","a","t","z","i",];
let positions= [];


keyboardLetters.map((letters)=>{

    const list = document.createElement("ul");
    letters.map((letter) => {
        const listItem = document.createElement("li");

        switch(letter){
            case "enter":
                listItem.innerHTML=
                `<button onclick="checkword()" id="${letter}">${letter}</button>`
            break;


            case "delete":
                listItem.innerHTML=
                `<button onclick="deleteWord()" id="${letter}">${letter}</button>`
            break;    


            default:
            listItem.innerHTML=
                `<button onclick="pressletter()" id="${letter}">${letter}</button>`


        }



        list.appendChild(listItem)

    });

listElement.push(list)

})

keyboard.append(...listElement);


const checkword =  () =>{


if(attempt===5){

    alert("ya no tienes mas intentos")
    return;
}

if(answer.length===6){


    attempt+=1;
    if(answer.join("") === secretWord.join("")){

        alert("palabra correcta")

    } else{
        for (let i = 0 ; i < 6 ;i++){
            switch(true){
                case answer[i] === secretWord[i]:
                    positions.push("green");
    
                 break;
                
                 case secretWord.includes(answer[i]):
                    positions.push("marron");
                 break;
    
                 default:
                    positions.push("gray")
                break;
            }
            
        }
        
        positions.map((color, id)=>{
    
            const item = document.getElementById(`${attempt}-1 -${id}`)
            item.classList.add(color)
    
            console.log(item);
           
        })
        
        
    }




}else{

    alert(`tu respuesta tiene ${answer.length} caracteres`)
}



};


const deleteWord = () =>{

    if(answer.length===0){
        alert("no tienes nada escrito")
    }

   answer.pop();
   console.log(answer);
}

const pressletter = () =>{

    const button = event.target

    if(answer.length<6){
        const currenItem = document.getElementById(`${attempt}-${answer.length}`)
        currenItem.textContent = button.textContent
        answer.push(button.id);


    }else{

        alert("tu palabra esta completa")
    }


}


