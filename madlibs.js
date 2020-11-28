const ejs = require('ejs');

const generate = (obj) => {
    const template = ejs.compile(obj.text);
    const result = template(obj.questions);
    return result;
}

const pizza = {
    "questions": {
        "question1": {
            "type": "adjective",
            "answer": ""
        }
    },
    "text": "Pizza was invented by a <%= question1.answer %>"
}

const examples = {
    "adjective": [
        "happy", "sad", "fat", "skinny", "tall", "short"
    ]
}

module.exports = {
    examples,
    pizza,
    generate
}