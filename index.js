const keyboard = document.querySelector("#keyboard");
const keyboardLetters = [
["q","w","e","r","t","y","u","i","o","p"],
["a","s","d","f","g","h","j","k","l",],
["enter","z","x","c","v","b","n","m","delete"],

];



const listElement = [];

const answer = [];

const secretWord = ["p","l","a","t","z","i",];

const positions= [];

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

if(answer.length===6){
    if(answer.join("") === secretWord.join("")){
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
    
        console.log(positions)
    }


}else{

    alert(`tu respuesta tiene ${answer.length} caracteres`)
}



}


const deleteWord = () =>{

    if(answer.length===0){
        alert("no tienes nada escrito")
    }

   answer.pop
   console.log(answer);
}

const pressletter = () =>{

    const button = event.target

    if(answer.length<6){
        answer.push(button.id);


    }

    console.log(answer);

}


const array = ["p","l","a","t","z","i"];

for (let i = 0; i < array.length; i++) {
     
    const palabra = array[i]+array[i];

    console.log(palabra);
    
}