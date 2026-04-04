const headCoach = document.getElementById("head-coach");
const team = document.getElementById("team");
const year = document.getElementById("year");
const playerCards = document.getElementById("player-cards");
const dropdown = document.getElementById("players")



const footballTeam = {
  team : "Barcelona" ,
  year : 1986,
  headCoach :  "Pep Guardilo",
  players :[{name:"messi",
  position : "forward",isCaptain : true},{name:"Neymar",
  position : "midfielder",isCaptain : false},{name:"Suraz",
  position : "defender",isCaptain : false},{name:"Kounde",
  position : "goalkeeper",isCaptain : false},],
}

headCoach.textContent = footballTeam.headCoach;
team.textContent = footballTeam.team;
year.textContent = footballTeam.year;


function displayPlayers(playerList){
  playerCards.innerHTML = playerList.map(function(player){
    return `<div class = "player-card"> 
            <h2>${player.name} ${player.isCaptain ?"(Captain)" : ""}</h2>
            <p>Position: ${player.position}</p>
            </div>`;

  }).join("");
}

displayPlayers(footballTeam.players);

dropdown.addEventListener("change", function() {
  const selected = dropdown.value;

  if(selected === "all"){
    displayPlayers(footballTeam.players)
  } else {
    const filtered = footballTeam.players.filter((player) => {
      return player.position === selected;
    })
    displayPlayers(filtered);
  }
})