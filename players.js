function getDefaultPlayers() {
    return{
    'Name': "",
    'Position': "",
    'Image': "",
    'Link': "",
    'Club': "",
};
}

let Players = [];





let listPlayers = JSON.parse(localStorage.getItem("AllPlayers"));
console.log(listPlayers);
players = listPlayers;





function displaylistplayers(listplayers) {



let body = document.getElementById("list-players");
 let s = '';
 for (let i = 0; i < listplayers.length; i++) {
     const players = listplayers[i];
     let tr = 
     `<div class="col md-4"><div class="card"> 
     <img class="card-img-top" height ="240px" src="${players.Image}" alt="Card image">
     <div class="card-body" >
         <h4 >${players.Name}</h4>
         <p >${players.Position}</p>
         <p >${players.Club}</p>
         <a  href="${players.Link}" target="blank" class="btn btn-primary"> View
                        Profile</a>
     </div>
     </div> 
     </div>`;
     s += tr;


 }


 body.innerHTML = s;

}
displaylistplayers(players);