var url = 'https://opensheet.elk.sh/13UjTo_VkpwIndtWCmI_kNr56LHaiLZ2PIdn0jy6u-kw/Form-Response'
fetch(url, {method: 'GET', headers: {accept: 'application/json'}})

.then((response) => response.json())
.then(function(questions) {
    console.log("Fetched!");
    let placeholder = document.querySelector("#question-data");
    let out = "";
    for(let question of questions){
        console.log(question.Question)
        out += `
        <tr>
            <td>${question["Topic"]}</td>
            <td>${question["Difficulty"]}</td>
            <td>${question["Format"]}</td>
            <td>${question["Question"]}</td>
            <td>${question["Answer"]}</td>

            </tr>

         `;
    }

    placeholder.innerHTML = out;
})

.catch(function(err){
    console.error(err)
});