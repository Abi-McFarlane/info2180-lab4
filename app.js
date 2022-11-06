window.onload = function(){
    let searchBtn = document.querySelector("#btn");
    let result = document.querySelector("#result");

    searchBtn.addEventListener("click", (event)=>{
        let input = document.querySelector("#NameOrAlies");
        let query = input.value ? input.value : "";
        fetch(`http://localhost/info2180-lab4/superheroes.php?query=${query.trim()}`)
        .then(response => {
            return response.text();
        })
        .then(data => {
            result.innerHTML = data;
        })
        .catch(err => {
            console.log(err);
        })
    })
}