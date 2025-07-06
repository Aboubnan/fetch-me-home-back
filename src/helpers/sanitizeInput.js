import sanitizeHtml from 'sanitize-html'; // pour la désinfection des input

function sanitizeInput(obj) {
    for(let x of Object.keys(obj)) {
        if (typeof(obj[x]) === "boolean" || typeof(obj[x]) === "object" || typeof(obj[x]) === "number") {    //obj[x] === true || obj[x] === false
            continue;
        } else {
            obj[x] = sanitizeHtml(obj[x]);
        }
    }
}

export default sanitizeInput;