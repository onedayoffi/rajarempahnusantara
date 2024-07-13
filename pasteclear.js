function pasteText() {
    navigator.clipboard.readText()
        .then(text => {
            document.getElementById('inputText').value = text;
        })
        .catch(err => {
            console.error('Failed to read clipboard contents: ', err);
        });
}

function clearText() {
    document.getElementById('inputText').value = "";
}