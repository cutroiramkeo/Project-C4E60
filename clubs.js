
function getDefaultClubs() {
    return{
    'Name': "",
    'Logo': "",
    'Stadium': "",
    'Coach': "",
    'SeeClubs': "",
};
}

let clubs = [];
let clubs1 = getDefaultClubs();
clubs1.Name = "Arsenal";
clubs1.Logo = "https://premierleague-static-files.s3.amazonaws.com/premierleague/badges/t3.svg";
clubs1.Stadium = "Stadium: Emirates";
clubs1.Coach = "Coach: Mikel Arteta";
clubs1.SeeClubs = "https://www.arsenal.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link ";
clubs.push(clubs1);

let clubs2 = getDefaultClubs();
clubs2.Name = "Liverpool";
clubs2.Logo = "https://premierleague-static-files.s3.amazonaws.com/premierleague/badges/t14.svg";
clubs2.Stadium = "Stadium: Anfield";
clubs2.Coach = "Coach: Jürgen Klopp";
clubs2.SeeClubs = "http://www.liverpoolfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link?utm_source=premier-league-website&utm_campaign=website&utm_medium=link";
clubs.push(clubs2);

let clubs3 = getDefaultClubs();
clubs3.Name = "Man United";
clubs3.Logo = "https://premierleague-static-files.s3.amazonaws.com/premierleague/badges/t1.svg";
clubs3.Stadium = "Stadium: Old Trafford";
clubs3.Coach = "Coach: Ole Gunnar ";
clubs3.SeeClubs = "http://www.manutd.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link?utm_source=premier-league-website&utm_campaign=website&utm_medium=link";
clubs.push(clubs3);

let clubs4 = getDefaultClubs();
clubs4.Name = "Southampton";
clubs4.Logo = "https://premierleague-static-files.s3.amazonaws.com/premierleague/badges/t20.svg";
clubs4.Stadium = "Stadium: St.Mary's";
clubs4.Coach = "Coach: Ralph";
clubs4.SeeClubs = "";
clubs.push(clubs4);

let clubs5 = getDefaultClubs();
clubs5.Name = "Bournemouth";
clubs5.Logo = "https://premierleague-static-files.s3.amazonaws.com/premierleague/badges/t91.svg";
clubs5.Stadium = "Stadium: Vitality";
clubs5.Coach = "Coach: Eddie Howe ";
clubs5.SeeClubs = "http://www.afcb.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link?utm_source=premier-league-website&utm_campaign=website&utm_medium=link";
clubs.push(clubs5);

let clubs6 = getDefaultClubs();
clubs6.Name = "Norwich City";
clubs6.Logo = "https://premierleague-static-files.s3.amazonaws.com/premierleague/badges/t45.svg";
clubs6.Stadium = "Stadium: Carrow Road";
clubs6.Coach = "Coach: Daniel Farke";
clubs6.SeeClubs = "http://www.canaries.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link";
clubs.push(clubs6);

let clubs7 = getDefaultClubs();
clubs7.Name = "Leicester City";
clubs7.Logo = "https://premierleague-static-files.s3.amazonaws.com/premierleague/badges/t13.svg";
clubs7.Stadium = "Stadium: King Power";
clubs7.Coach = "Coach: Brendan Rodgers";
clubs7.SeeClubs = "http://www.lcfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link";
clubs.push(clubs7);

let clubs8 = getDefaultClubs();
clubs8.Name = "Watford";
clubs8.Logo = "https://premierleague-static-files.s3.amazonaws.com/premierleague/badges/t57.svg";
clubs8.Stadium = "Stadium: Vicarage Road";
clubs8.Coach = "Coach: Nigel Pearson";
clubs8.SeeClubs = "https://www.watfordfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link?utm_source=premier-league-website&utm_campaign=website&utm_medium=link";
clubs.push(clubs8);

let clubs9 = getDefaultClubs();
clubs9.Name = "Brighton and Hove Albion";
clubs9.Logo = "https://premierleague-static-files.s3.amazonaws.com/premierleague/badges/t36.svg";
clubs9.Stadium = "Stadium: Amex";
clubs9.Coach = "Coach: Graham Potter";
clubs9.SeeClubs = "https://www.brightonandhovealbion.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link?utm_source=premier-league-website&utm_campaign=website&utm_medium=link";
clubs.push(clubs9);

let clubs10 = getDefaultClubs();
clubs10.Name = "Crystal Place";
clubs10.Logo = "https://premierleague-static-files.s3.amazonaws.com/premierleague/badges/t31.svg";
clubs10.Stadium = "Stadium: Selhurst Park";
clubs10.Coach = "Coach: Roy Hodgson";
clubs10.SeeClubs = "http://www.cpfc.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link";
clubs.push(clubs10);

let clubs11 = getDefaultClubs();
clubs11.Name = "Aston Villa";
clubs11.Logo = "https://premierleague-static-files.s3.amazonaws.com/premierleague/badges/t7.svg";
clubs11.Stadium = "Stadium: Villa Park";
clubs11.Coach = "Coach: Dean Smith";
clubs11.SeeClubs = "https://www.avfc.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link";
clubs.push(clubs11);

let clubs12 = getDefaultClubs();
clubs12.Name = "Burnley";
clubs12.Logo = "https://premierleague-static-files.s3.amazonaws.com/premierleague/badges/t90.svg";
clubs12.Stadium = "Stadium: Turf Moor";
clubs12.Coach = "Coach: Sean Dyche";
clubs12.SeeClubs = "http://www.burnleyfootballclub.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link";
clubs.push(clubs12);

let clubs13 = getDefaultClubs();
clubs13.Name = "Man City";
clubs13.Logo = "https://premierleague-static-files.s3.amazonaws.com/premierleague/badges/t43.svg";
clubs13.Stadium = "Stadium: Etihad";
clubs13.Coach = "Coach: Pep Guardiola";
clubs13.SeeClubs = "http://www.mancity.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link?utm_source=premier-league-website&utm_campaign=website&utm_medium=link";
clubs.push(clubs13);

let clubs14 = getDefaultClubs();
clubs14.Name = "West Ham";
clubs14.Logo = "https://premierleague-static-files.s3.amazonaws.com/premierleague/badges/t21.svg";
clubs14.Stadium = "Stadium: London";
clubs14.Coach = "Coach: David Moyes";
clubs14.SeeClubs = "http://www.whufc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link?utm_source=premier-league-website&utm_campaign=website&utm_medium=link";
clubs.push(clubs14);

let clubs15 = getDefaultClubs();
clubs15.Name = "Sheffield ";
clubs15.Logo = "https://premierleague-static-files.s3.amazonaws.com/premierleague/badges/t49.svg";
clubs15.Stadium = "Stadium: Bramall Lane";
clubs15.Coach = "Coach: Chris Wilder";
clubs15.SeeClubs = "http://www.sufc.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link";
clubs.push(clubs15);

let clubs16 = getDefaultClubs();
clubs16.Name = "Chelsea";
clubs16.Logo = "https://premierleague-static-files.s3.amazonaws.com/premierleague/badges/t8.svg";
clubs16.Stadium = "Stadium: Stamford Bridge";
clubs16.Coach = "Coach: Frank Lampard";
clubs16.SeeClubs = "https://www.chelseafc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link?utm_source=premier-league-website&utm_campaign=website&utm_medium=link";
clubs.push(clubs16);

let clubs17 = getDefaultClubs();
clubs17.Name = "Tottenham Hotspur";
clubs17.Logo = "https://premierleague-static-files.s3.amazonaws.com/premierleague/badges/t6.svg";
clubs17.Stadium = "Stadium: Tottenham Hotspur";
clubs17.Coach = "Coach: J.Morinho";
clubs17.SeeClubs = "http://www.tottenhamhotspur.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link?utm_source=premier-league-website&utm_campaign=website&utm_medium=link";
clubs.push(clubs17);

let clubs18 = getDefaultClubs();
clubs18.Name = "Wolverhampton Wanderers";
clubs18.Logo = "https://premierleague-static-files.s3.amazonaws.com/premierleague/badges/t39.svg";
clubs18.Stadium = "Stadium: Molineux";
clubs18.Coach = "Coach: Nuno Espírito Santo";
clubs18.SeeClubs = "http://www.wolves.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link";
clubs.push(clubs18);

let clubs19 = getDefaultClubs();
clubs19.Name = "Newcastle United";
clubs19.Logo = "https://premierleague-static-files.s3.amazonaws.com/premierleague/badges/t4.svg";
clubs19.Stadium = "Stadium: St. James' Park";
clubs19.Coach = "Coach: Steve Bruce";
clubs19.SeeClubs = "http://www.nufc.co.uk/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link?utm_source=premier-league-website&utm_campaign=website&utm_medium=link";
clubs.push(clubs19);

let clubs20 = getDefaultClubs();
clubs20.Name = "Everton";
clubs20.Logo = "https://premierleague-static-files.s3.amazonaws.com/premierleague/badges/t11.svg";
clubs20.Stadium = "Stadium: Goodison Park";
clubs20.Coach = "Coach: Carlo Ancelotti";
clubs20.SeeClubs = "http://www.evertonfc.com/?utm_source=premier-league-website&utm_campaign=website&utm_medium=link?utm_source=premier-league-website&utm_campaign=website&utm_medium=link";
clubs.push(clubs20);






function displaylistclubs(listclubs) {



let body = document.getElementById("list-clubs");
 let s = '';
 for (let i = 0; i < listclubs.length; i++) {
     const clubs = listclubs[i];
     let tr = 
     `<div class="col md-4"><div class="card"> 
     <img class="card-img-top" height ="240px" src="${clubs.Logo}" alt="Card image">
     <div class="card-body" >
         <h4 >${clubs.Name}</h4>
         <p >${clubs.Stadium}</p>
         <p >${clubs.Coach}</p>
         <a  href="${clubs.SeeClubs}" target="blank" class="btn btn-primary"> Clubs
                        Profile</a>

     </div>
     </div> 
     </div>`;
     s += tr;


 }


 body.innerHTML = s;

}
displaylistclubs(clubs);


