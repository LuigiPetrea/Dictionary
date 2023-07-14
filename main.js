window.onload = () => {
    let inputAddWords = document.getElementById('input-add-words');
    let inputSearchWords = document.getElementById('input-search-words');
    let arrWords = new Array();
    let dictionary = document.querySelector('.dictionary');
    const addWords = () => {
        let isUnique = true;
        arrWords.forEach(function (word){
            if (word === inputAddWords.value)isUnique = false;
        }
        )

        if(inputAddWords.value !== ""){
        if (isUnique){
            arrWords.push(inputAddWords.value);
                let li = document.createElement('li');    
                li.textContent = inputAddWords.value;
                li.className = "words";
                dictionary.appendChild(li);
                inputAddWords.value = "";
        }
        else alert("the word is already in the dictionary! You Can Search!");
        }else alert("You need to write something!");
    }

    const searchWord = () => {
        let words = document.querySelectorAll('.words');
        for (let i = 0; i < arrWords.length; ++i){
            words[i].style.display = "block";
            for (let j = 0; j < inputSearchWords.value.length; ++j){
                if (inputSearchWords.value[j] !== arrWords[i][j])words[i].style.display = "none";
            }
        }
        
 }
 inputSearchWords.oninput = searchWord;
 inputAddWords.onchange = addWords;
}