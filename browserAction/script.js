let form = document.getElementById('templateform').elements
form['content'].value = 'un bon test';

function setFormContent(content) {
    this.form['content'] = content;
    console.log('testos');
}

/*function SaveNewTemp() {
    console.log("The file is updated with the given data")
    let newTemp = document.getElementById("newtemp").elements;
    let fs = require('fs');

    let fInput = {
        name: newTemp['name'],
        email:newTemp['email'],
        content:newTemp['comment']
    }

    fs.writeFile('test.txt', fInput, (err) => {
        if (err) throw err;
        else{
            console.log("The file is updated with the given data")
        }
    });
}*/
