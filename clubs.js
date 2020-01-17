function getDefaultClubs() {
    return {
        'Name': "",
        'Logo': "",
        'Stadium': "",
        'Coach': "",
        'SeeClubs': "",
        
    };
}

let Clubs = [];

// bỏ hết data mẫu bên trên

let listClubs = JSON.parse(localStorage.getItem("AllClubs"));
console.log(listClubs);
Clubs = listClubs;





function displaylistclubs(listclubs) {



    let body = document.getElementById("list-clubs");
    let s = '';
    for (let i = 0; i < listclubs.length; i++) {
        const CLBs = listclubs[i];
        let tr =
            `<div class="col md-4"><div class="card"> 
     <img class="card-img-top" height ="240px" src="${CLBs.Logo}" alt="Card image">
     <div class="card-body" >
         <h4 >${CLBs.Name}</h4>
         <p >${CLBs.Stadium}</p>
         <p >${CLBs.Coach}</p>
         <a  href="${CLBs.SeeClubs}" target="blank" class="btn btn-primary"> Clubs
                        Profile</a>

     </div>
     </div> 
     </div>`;
        s += tr;


    }


    body.innerHTML = s;

}
displaylistclubs(Clubs);









