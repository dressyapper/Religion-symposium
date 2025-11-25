let current_tab = "main"
let questions = [
    ["The amazon produces approximately 6 - 9% of oxygen on earth.", true],
    ["The amazon is located in Africa.", false],
    ["Metal is a good substitution for wood.", false],
    ["The name of the organisation is The Rainforest Community.", false],
    ["23.7 million hectares have been lost to deforestation in the last 5 years", true],
    ["The amazon covers 40% of the brazil territory", true],
    ["The Rainforest Alliance plants shade trees that prevent biodversity", false],
    ["The Amazon Conservation helps the amazon by monitoring the environment", true],
    ["You can plant two trees for every tree you cut down as an efficent way to restore trees generally", false],
    ["The amazon was formed from 56 million to 33 million years ago", true],
    ["The first human sightings in the amazon happened between 32 000 years to 39 000 years ago", true],
    ["The amazon was formed during the Econene era", true],
    ["We can keep littering as there is no way for it to reach the amazon", false],
    ["The rainforest alliance makes coffee and tea farms", true]
]
let correctquestions = 0

let question = questions[Math.floor(Math.random() * questions.length)]
document.getElementById("correctornot").innerText = ""

let text = document.getElementById("content")
let title = document.getElementById("title")
let truebutton = document.getElementById("true")
let falsebutton = document.getElementById("false")

tabchange("main")
function tabchange(tab) {
    if (tab == "main") {
        title.innerText = "The Problem"
        text.innerText = "The Amazon rainforest is a beautiful place full of wonderful trees that generate approximately 6 to 9% of all oxygen on earth but recently Deforestation is one of the biggest worldwide problems known to us and it has been for many years. The amazon is constantly losing trees due to us cutting them down for wood so we can make wooden objects and buildings. "
    }
    else if (tab == "location") {
        title.innerText = "The Location"
        text.innerText = "The Amazon rainforest is located in South America, primarily within the Amazon basin, and spans across parts of nine countries. It extends from the Andes Mountains in the west to the Atlantic Ocean in the east. Specifically, it covers about 40% of Brazil's territory and is also found in Bolivia, Peru, Ecuador, Colombia, Venezuela, Guyana, Suriname, and French Guiana."
    }
    else if (tab == "solution") {
        title.innerText = "The Solution"
        text.innerText = "There are way better materials that can be substituted for wood and are better to the environment but all of them have their pros and cons. Bamboo is one material that can replace wood as it is a strong and durable material and can be easily and quickly harvested as it takes 3 years to grow bamboo while it takes 25 years to grow a tree meaning bamboo can be more mass harvested than trees. Another action we can do is plant more trees. One good way we can efficiently put this into action is by planting 2 more trees for every tree we cut down. This can help reproduce more trees than we cut down making us have trees while also having a good supply of wood."
    }
    else if (tab == "impacts") {
        title.innerText = "The Impacts"
        text.innerText = "In the last 5 years the Amazon has lost 23.7 million hectares of forest to deforestation, the building of houses, shops and more. It is theorized that in 5 years, the Amazon may lose up to half of what in lost in the last 20 years, showing the increasing percent of deforestation. Deforestation is mainly impacting climate stability, as well as the quality and quantity of water, deforestation is also strongly connected to processes such as forest fires, this increases the amount of greenhouse gasses inside of earth's atmosphere, which affect the climate. Things like gold mining, coca farming and livestock farming are increasing the amount of deforestation. Deforestation has affects many animals, such as: jaguars, dolphins, otters, monkeys, macaw, tapir and frogs by taking away these animals habitats and homes."
    }
    else if (tab == "government") {
        title.innerText = "What the government is doing about this problem"
        text.innerText = "The Brazilian government is actively working to combat deforestation in the Amazon through various measures, including strengthened law enforcement, sustainable development initiatives, and international cooperation. The current government of Brazil, led by their President Lula, has promised to eliminate deforestation by 2030 and has already seen a decrease in deforestation rates since taking office in 2023. The government of Brazil has been trying to combat illegal activity such as mining and hunting, and logging within certain parameters, and areas."
    }
    else if (tab == "stewards") {
        title.innerText = "Are we good stewards of creation?"
        text.innerText = "We are a bit in the middle as we are doing good and bad. The reason I say this is because many people are trying to help stop deforestation but at the same time, many other people are causing deforestation. One example of an organization preventing the loss of trees is the Amazon Conservation who have been helping for over 25 years. They help by monitoring the environment and deciding where to act,based on the information discovered. They act by making conservation areas, building resilience to the wildlife and environment, etc."
    }
    else if (tab == "aid") {
        title.innerText = "Organisations that are helping"
        text.innerText = "The Rainforest Alliance is an organization that protects forest that partners with local communities and creates sustainable programs. They encourage planting shade trees that preserve biodiversity and increase the health of the soil. They focus on changing how the world deals with agriculture by using a certification model that partners with local communities and raise awareness for sustainable practices. They create coffee farms and tea farms with their goal being to protect forests and make earth sustainable"
    }
    else if (tab == "present") {
        title.innerText = "What do we do now?"
        text.innerText = "To help stop God's creation from being destroyed, we can stop littering and we can strengthen law and put more penalties on deforestation in the amazon. We can also promote healthy and sustainable farming. This will help people not destroy the beauty of the amazon forest and help keep the trees of the amazon stay healthy and thrive, providing earth with oxygen and removing carbon dioxide (a greenhouse gas) from the atmosphere."
    }
}

function getquestion() {
    let falsebutton = document.getElementById("false")
    let truebutton = document.getElementById("true")
    let rng = Math.floor(Math.random() * questions.length)
    let prev = question
    question = questions[rng]

    if (question == prev) {
        getquestion()
    }

    document.getElementById("question").innerText = question[0]

    return question




}

function trueorfalse(question, answer) {
    console.log(question, answer)
    if (question[1] == answer) {
        correctquestions++;
        console.log("Correct")
        document.getElementById("correctornot").innerText = "Correct!"
        document.getElementById("points").innerText = "Correct: "+correctquestions
    }
    else {
        console.log("Wrong")
        document.getElementById("correctornot").innerText = "Wrong!"
    }

    getquestion()

}
document.getElementById("main-tab").addEventListener("click", function() {tabchange("main")})
document.getElementById("solution-tab").addEventListener("click", function() {tabchange("solution")})
document.getElementById("location-tab").addEventListener("click", function() {tabchange("location")})
document.getElementById("impacts-tab").addEventListener("click", function() {tabchange("impacts")})
document.getElementById("government-tab").addEventListener("click", function() {tabchange("government")})
document.getElementById("stewards-tab").addEventListener("click", function() {tabchange("stewards")})
document.getElementById("aid-tab").addEventListener("click", function() {tabchange("aid")})
document.getElementById("present-tab").addEventListener("click", function() {tabchange("present")})


falsebutton.addEventListener("click", function() {trueorfalse(question, false)})
truebutton.addEventListener("click", function() {trueorfalse(question, true)})
getquestion()


document.getElementById("main-tab").addEventListener("mouseenter", function() {
    document.getElementById("main-tab").style.animationName = "hover"
    document.getElementById("main-tab").style.animationDuration = "500ms"
    document.getElementById("main-tab").style.animationFillMode = "forwards"
})

document.getElementById("main-tab").addEventListener("mouseout", function() {
    document.getElementById("main-tab").style.animationName = "unhover"
    document.getElementById("main-tab").style.animationDuration = "500ms"
    document.getElementById("main-tab").style.animationFillMode = "forwards"
})

document.getElementById("solution-tab").addEventListener("mouseenter", function() {
    document.getElementById("solution-tab").style.animationName = "hover"
    document.getElementById("solution-tab").style.animationDuration = "500ms"
    document.getElementById("solution-tab").style.animationFillMode = "forwards"
})

document.getElementById("solution-tab").addEventListener("mouseout", function() {
    document.getElementById("solution-tab").style.animationName = "unhover"
    document.getElementById("solution-tab").style.animationDuration = "500ms"
    document.getElementById("solution-tab").style.animationFillMode = "forwards"
})

document.getElementById("location-tab").addEventListener("mouseenter", function() {
    document.getElementById("location-tab").style.animationName = "hover"
    document.getElementById("location-tab").style.animationDuration = "500ms"
    document.getElementById("location-tab").style.animationFillMode = "forwards"
})

document.getElementById("location-tab").addEventListener("mouseout", function() {
    document.getElementById("location-tab").style.animationName = "unhover"
    document.getElementById("location-tab").style.animationDuration = "500ms"
    document.getElementById("location-tab").style.animationFillMode = "forwards"
})

document.getElementById("impacts-tab").addEventListener("mouseenter", function() {
    document.getElementById("impacts-tab").style.animationName = "hover"
    document.getElementById("impacts-tab").style.animationDuration = "500ms"
    document.getElementById("impacts-tab").style.animationFillMode = "forwards"
})

document.getElementById("impacts-tab").addEventListener("mouseout", function() {
    document.getElementById("impacts-tab").style.animationName = "unhover"
    document.getElementById("impacts-tab").style.animationDuration = "500ms"
    document.getElementById("impacts-tab").style.animationFillMode = "forwards"
})

document.getElementById("government-tab").addEventListener("mouseenter", function() {
    document.getElementById("government-tab").style.animationName = "hover"
    document.getElementById("government-tab").style.animationDuration = "500ms"
    document.getElementById("government-tab").style.animationFillMode = "forwards"
})

document.getElementById("government-tab").addEventListener("mouseout", function() {
    document.getElementById("government-tab").style.animationName = "unhover"
    document.getElementById("government-tab").style.animationDuration = "500ms"
    document.getElementById("government-tab").style.animationFillMode = "forwards"
})

document.getElementById("stewards-tab").addEventListener("mouseenter", function() {
    document.getElementById("stewards-tab").style.animationName = "hover"
    document.getElementById("stewards-tab").style.animationDuration = "500ms"
    document.getElementById("stewards-tab").style.animationFillMode = "forwards"
})

document.getElementById("stewards-tab").addEventListener("mouseout", function() {
    document.getElementById("stewards-tab").style.animationName = "unhover"
    document.getElementById("stewards-tab").style.animationDuration = "500ms"
    document.getElementById("stewards-tab").style.animationFillMode = "forwards"
})

document.getElementById("aid-tab").addEventListener("mouseenter", function() {
    document.getElementById("aid-tab").style.animationName = "hover"
    document.getElementById("aid-tab").style.animationDuration = "500ms"
    document.getElementById("aid-tab").style.animationFillMode = "forwards"
})

document.getElementById("aid-tab").addEventListener("mouseout", function() {
    document.getElementById("aid-tab").style.animationName = "unhover"
    document.getElementById("aid-tab").style.animationDuration = "500ms"
    document.getElementById("aid-tab").style.animationFillMode = "forwards"
})

document.getElementById("present-tab").addEventListener("mouseenter", function() {
    document.getElementById("present-tab").style.animationName = "hover"
    document.getElementById("present-tab").style.animationDuration = "500ms"
    document.getElementById("present-tab").style.animationFillMode = "forwards"
})

document.getElementById("present-tab").addEventListener("mouseout", function() {
    document.getElementById("present-tab").style.animationName = "unhover"
    document.getElementById("present-tab").style.animationDuration = "500ms"
    document.getElementById("present-tab").style.animationFillMode = "forwards"
})
