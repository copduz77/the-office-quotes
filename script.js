// TO DO: DD THE REST OF THE QUOTES, FIX THE BUTTON POSITION


'use strict';


// EVENT LISTENER
const button = document.querySelector("button")
button.addEventListener("click", e => {
    generateNumber()
})

function generateNumber() {
    const randomNumber = Math.floor(Math.random() * 39) + 1;
    console.log(randomNumber);
    const randomQuote = arrayOfQuotes[randomNumber].quote;
    const randomAuthor = arrayOfQuotes[randomNumber].author;

    imgSwitch(randomAuthor)
    document.querySelector(".quote").innerHTML = `<i>` + randomQuote + `</i>`;
    document.querySelector(".signature").innerHTML = randomAuthor;
}



// FUNCTION TO SWITCH IMAGE ACCORDING TO CHARACTER
function imgSwitch(randomAuthor) {
    switch (randomAuthor) {
        case 'Michael Scott':
            document.getElementById("char-img").src = "images/Michael.PNG"
            break;
        case 'Dwight Schrute':
            document.getElementById("char-img").src = "images/Dwight-the-office.jpg"
            break;
        case 'Kelly Kapoor':
            document.getElementById("char-img").src = "images/Kelly.PNG"
            break;
        case 'Pam Beasley':
            document.getElementById("char-img").src = "images/Pam.jpg"
            break;
        case 'Andy Bernard':
            document.getElementById("char-img").src = "images/Andy.PNG"
            break;
        case 'Jim Halpert':
            document.getElementById("char-img").src = "images/Jim.PNG"
            break;
        case 'Angela Martin':
            document.getElementById("char-img").src = "images/Angela.PNG"
            break;
        case 'Ryan Howard':
            document.getElementById("char-img").src = "images/Ryan.PNG"
            break;

        case 'Oscar Martinez':
            document.getElementById("char-img").src = "images/Oscar.jpeg"
            break;
        case 'Erin Hannon':
            document.getElementById("char-img").src = "images/Erin.PNG"
            break;

        case 'Gabe Lewis':
            document.getElementById("char-img").src = "images/Gabe.PNG"
            break;
        case 'Kevin Malone':
            document.getElementById("char-img").src = "images/Kevin.PNG"
            break;
        case 'Phyllis Lapin':
            document.getElementById("char-img").src = "images/Phyllis.PNG"
            break;

        case 'Stanley Hudson':
            document.getElementById("char-img").src = "images/Stanley.PNG"
            break;
        case 'Nellie Bertram':
            document.getElementById("char-img").src = "images/Nellie.PNG"
            break;
        default:
            document.getElementById("char-img").src = "images/Michael.PNG"
            break;
    }
}

const arrayOfQuotes = [{
        'author': 'Michael Scott',
        'quote': 'You know what Toby? When the son of the deposed king of Nigeria emails you directly -- asking you for help you help. His father ran the freaking country ok?'
    },
    {
        'author': 'Michael Scott',
        'quote': 'If I had a gun with two bullets and I was in a room with Hitler, Bin Laden, and Toby, I would shoot Toby twice.'
    },
    {
        'author': 'Michael Scott',
        'quote': 'It\'s Britney, bitch.'
    },
    {
        'author': 'Michael Scott',
        'quote': 'Dwight, you ignorant slut!'
    },

    {
        'author': 'Jim Halpert',
        'quote': 'Plan A was marrying her a long time ago. Pretty much the day I met her.'
    },

    {
        'author': 'Ryan Howard',
        'quote': 'Last year, Creed asked me how to set up a blog. Wanting to protect the world from being exposed to Creed\'s brain, I opened up a Word document on his computer and put an address at the top. I\'ve read some of it. Even for the Internet, it\'s... pretty shocking.'
    },

    {
        'author': 'Stanley Hudson',
        'quote': 'Did I stutter?'
    },
    {
        'author': 'Jim Halpert',
        'quote': 'I had feelings today for a coworker that I haven\'t had in years... In my defense he was grabbing my crotch fairly aggressively at the time.'
    },
    {
        'author': 'Ryan Howard',
        'quote': 'I\'m not saying I had a meteoric rise, but I did.'
    },
    {
        'author': 'Gabe Lewis',
        'quote': 'Shut up about the sun. SHUT UP ABOUT THE SUN!'
    },
    {
        'author': 'Gabe Lewis',
        'quote': 'I have two relationships with Andy. I have a personal relationship, and I have a professional relationship. Personally, yeah, I think he\'s a rat, and I think he\'s responsible for the demise of my relationship with Erin. Professionally... he broke up the happiest couple in this office!'
    },
    {
        'author': 'Gabe Lewis',
        'quote': 'I give great hugs. I\'ve been with plenty of women and that\'s basically all they want to do.'
    },
    {
        'author': 'Stanley Hudson',
        'quote': 'I wake up every morning in a bed that\'s too small, drive my daughter to a school that\'s too expensive, and then I go to work to a job for which I get paid too little. But on pretzel day? Well, I like pretzel day.'
    },
    {
        'author': 'Andy Bernard',
        'quote': 'Sorry I annoyed you with my friendship.'
    },
    {
        'author': 'Andy Bernard',
        'quote': 'Andy Bernard does not lose contests. He wins them. Or he quits them. Because they\'re unfair.'
    },
    {
        'author': 'Andy Bernard',
        'quote': 'When I got the nickname Bonerchamp, that\'s when I became me.'
    },
    {
        'author': 'Andy Bernard',
        'quote': 'Every little boy fantasizes about his fairytale wedding.'
    },
    {
        'author': 'Andy Bernard',
        'quote': 'You give me a gift? Bam! Thank You note. You invite me somewhere? Pow! RSVP. You do me a favor? Wham! Favor returned. Do not test my politeness.'
    },
    {
        'author': 'Dwight Schrute',
        'quote': 'It has to be official, and it has to be urine.'
    },
    {
        'author': 'Dwight Schrute',
        'quote': 'Today, smoking is going to save lives.'
    },
    {
        'author': 'Dwight Schrute',
        'quote': 'Jim is my enemy. But it turns out that Jim is also his own worst enemy. And the enemy of my enemy is my friend. So Jim is actually my friend. But, because he is his own worst enemy, the enemy of my friend is my enemy, so actually, Jim is my enemy..'
    },
    {
        'author': 'Dwight Schrute',
        'quote': 'Through concentration, I can raise and lower my cholesterol at will.'
    },
    {
        'author': 'Angela Martin',
        'quote': 'If you pray enough, you can change yourself into a cat person.'
    },
    {
        'author': 'Angela Martin',
        'quote': 'I\'m very sensitive about my petite figure.'
    },
    {
        'author': 'Oscar Martinez',
        'quote': 'I didn\'t realize how many of Angela\'s opinions I agreed with...until she tried to have my knee caps shattered for sleeping with her husband.'
    },
    {
        'author': 'Oscar Martinez',
        'quote': 'I would say the Finer Things Club is the gayest thing about me.'
    },
    {
        'author': 'Oscar Martinez',
        'quote': 'I consider myself a good person, but I\'m going to make him cry.'
    },
    // 27 FINO A QUI
    {
        'author': 'Pam Beesly',
        'quote': 'It\'s performance review day, company-wide. Last year, my performance review started with Michael asking me what my hopes and dreams were, and it ended with him telling me he could bench-press 190 pounds. So, I don\'t really know what to expect.'
    },
    {
        'author': 'Pam Beesly',
        'quote': 'Once every hour, someone is involved in an internet scam. That man is Michael Scott.'
    },
    {
        'author': 'Kelly Kapoor',
        'quote': 'Ultimatums are key. Basically nobody does anything for me anymore unless I threaten to kill myself.'
    },
    {
        'author': 'Kelly Kapoor',
        'quote': 'I have a lot of questions. Number one, how dare you?'
    },
    {
        'author': 'Kevin Malone',
        'quote': 'Whenever I try to make a taco, I get too excited and crush it.'
    },
    {
        'author': 'Kevin Malone',
        'quote': 'I Wanna Be Wined and Dined and...Sixty-Nined'
    },
    {
        'author': 'Nellie Bertram',
        'quote': 'Don\'t think a woman can be a leader? You poor, simple boy. Expected a man, did you? Strong, powerful. Huge, whopping penis? Well, sorry to disappoint, but my huge, whopping penis is right here, [points to her head] and I\'m not afraid to use it. So stop looking at my breasts, and start looking at my penis.'
    },
    {
        'author': 'Nellie Bertram',
        'quote': '[to Dwight] I have, uh, written down a few questions. One, have you ever killed a woman? How many women have you killed? Please, sir, will you not kill me?'
    },
    {
        'author': 'Nellie Bertram',
        'quote': '[to Gabe] Oh shut up, skeleton man!'
    },
    {
        'author': 'Erin Hannon',
        'quote': 'I boiled some Gatorade.'
    },
    {
        'author': 'Erin Hannon',
        'quote': 'Whenever I\'m sick, it goes away within a few hours. Except that once when I was in the hospital from age three to six.'
    },
    {
        'author': 'Erin Hannon',
        'quote': 'Talk to me that way again and I\'ll cut your face.'
    },
];

// MOSTRARE LA TOTALITA DEI DATI
/*fetch(api_url)
.then(res => res.json())
.then(content => console.log(content)) */


// MOSTRARE LA TOTALITA DEI DATI (2)
/*
fetch(api_url)
.then(res => res.json())
.then(response => {
    console.log(response)
}) */

// API URL AFTER CORS PROXY CONVERSION
/*const api_url = "http://localhost:8010/proxy/quotes/random"; */

// FETCH QUOTE FROM API AND DISPLAY IT
/* function generateQuoteApi() {
    fetch(api_url)
        .then(function (data) {
            return data.json();
        })
        .then(function (data) {
            let character = data.data.character.firstname;
            imgSwitch(character);

            document.querySelector(".quote").innerHTML = `<div><i>${JSON.stringify(data.data.content)}<i></div>`;
            document.querySelector(".signature").innerHTML = `<div>${JSON.stringify(data.data.character.firstname + " " + data.data.character.lastname)}</div>`;
        })
        .catch(function (err) {
            console.log(err);
        });
} */