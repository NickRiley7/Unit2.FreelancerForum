

let freelancers = [
{
    name: "Alice",
    occupation: "Writer",
    startingPrice: "$30",
},
{
    name: "Bob",
    occupation: "Teacher",
    startingPrice: "$50",
},
{
    name: "Carol",
    occupation: "Programmer",
    startingPrice: "$70",
},
];

function renderFreelancers() {
    let forumPage = document.getElementById('freelancerForum')

    for (let i = 0; i < freelancers.length; i++) {
        let currentFreelancers = freelancers[i]
    
    let forumDiv = document.createElement('div')
    forumDiv.className = 'freelancers'

    forumDiv.innerHTML = `<h3>${currentFreelancers.name}</h3>
                          <h3>${currentFreelancers.occupation}</h3>
                          <h3>${currentFreelancers.startingPrice}</h3>`
    
    freelancerForum.appendChild(forumDiv)
  }
}

renderFreelancers()





