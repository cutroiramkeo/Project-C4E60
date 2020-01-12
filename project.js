// let bxh = [
//     {
//         'Position': '1',
//         'Club': 'Liverpool',
//         'Played': '21',
//         'Won': '20',
//         'Drawn': '1',
//         'Lost': '0',
//         'GF': '50',
//         'GA': '14',
//         'GD': '+36',
//         'Points': '61',
//     },
//     {
//         'Position': '2',
//         'Club': 'Leicester City',
//         'Played': '22',
//         'Won': '14',
//         'Drawn': '3',
//         'Lost': '5',
//         'GF': '47',
//         'GA': '21',
//         'GD': '+26',
//         'Points': '45',
//     },
//     {
//         'Position': '3',
//         'Club': 'Manchester City',
//         'Played': '21',
//         'Won': '14',
//         'Drawn': '2',
//         'Lost': '5',
//         'GF': '56',
//         'GA': '24',
//         'GD': '+32',
//         'Points': '44',
//     },
//     {
//         'Position': '4',
//         'Club': 'Chealsea',
//         'Played': '22',
//         'Won': '12',
//         'Drawn': '3',
//         'Lost': '7',
//         'GF': '39',
//         'GA': '29',
//         'GD': '+10',
//         'Points': '39',
//     },
//     {
//         'Position': '5',
//         'Club': 'Manchester United',
//         'Played': '22',
//         'Won': '9',
//         'Drawn': '7',
//         'Lost': '6',
//         'GF': '36',
//         'GA': '25',
//         'GD': '+11',
//         'Points': '34',
//     },
//     {
//         'Position': '6',
//         'Club': 'Sheffield',
//         'Played': '22',
//         'Won': '8',
//         'Drawn': '8',
//         'Lost': '6',
//         'GF': '24',
//         'GA': '21',
//         'GD': '+3',
//         'Points': '32',
//     },
//     {
//         'Position': '7',
//         'Club': 'Wolverhampton Wanderers',
//         'Played': '22',
//         'Won': '7',
//         'Drawn': '10',
//         'Lost': '5',
//         'GF': '31',
//         'GA': '28',
//         'GD': '+3',
//         'Points': '31',
//     },
//     {
//         'Position': '8',
//         'Club': 'Liverpool',
//         'Played': '18',
//         'Won': '17',
//         'Drawn': '1',
//         'Lost': '0',
//         'GF': '46',
//         'GA': '14',
//         'GD': '32',
//         'Points': '52',
//     },
//     {
//         'Position': '1',
//         'Club': 'Liverpool',
//         'Played': '18',
//         'Won': '17',
//         'Drawn': '1',
//         'Lost': '0',
//         'GF': '46',
//         'GA': '14',
//         'GD': '32',
//         'Points': '52',
//     },
//     {
//         'Position': '1',
//         'Club': 'Liverpool',
//         'Played': '18',
//         'Won': '17',
//         'Drawn': '1',
//         'Lost': '0',
//         'GF': '46',
//         'GA': '14',
//         'GD': '32',
//         'Points': '52',
//     },
//     {
//         'Position': '1',
//         'Club': 'Liverpool',
//         'Played': '18',
//         'Won': '17',
//         'Drawn': '1',
//         'Lost': '0',
//         'GF': '46',
//         'GA': '14',
//         'GD': '32',
//         'Points': '52',
//     },
//     {
//         'Position': '1',
//         'Club': 'Liverpool',
//         'Played': '18',
//         'Won': '17',
//         'Drawn': '1',
//         'Lost': '0',
//         'GF': '46',
//         'GA': '14',
//         'GD': '32',
//         'Points': '52',
//     },
//     {
//         'Position': '1',
//         'Club': 'Liverpool',
//         'Played': '18',
//         'Won': '17',
//         'Drawn': '1',
//         'Lost': '0',
//         'GF': '46',
//         'GA': '14',
//         'GD': '32',
//         'Points': '52',
//     },
//     {
//         'Position': '1',
//         'Club': 'Liverpool',
//         'Played': '18',
//         'Won': '17',
//         'Drawn': '1',
//         'Lost': '0',
//         'GF': '46',
//         'GA': '14',
//         'GD': '32',
//         'Points': '52',
//     },
//     {
//         'Position': '1',
//         'Club': 'Liverpool',
//         'Played': '18',
//         'Won': '17',
//         'Drawn': '1',
//         'Lost': '0',
//         'GF': '46',
//         'GA': '14',
//         'GD': '32',
//         'Points': '52',
//     },

    
// ]
function getDefaultBXH() {
    return{
        'Position': '',
        'Club': '',
        'Played': '',
        'Won': '',
        'Drawn': '',
        'Lost': '',
        'GF': '',
        'GA': '',
        'GD': '',
        'Points': '',
    };
}
let bxh = [];
let bxh1 = getDefaultBXH();
bxh1.Position = "1";
bxh1.Club = "Liverpool";
bxh1.Played = "21";
bxh1.Won = "20";
bxh1.Drawn = "1";
bxh1.Lost = "0";
bxh1.GF = "50";
bxh1.GA = "14";
bxh1.GD = "+36";
bxh1.Points = "61";
bxh.push(bxh1);
let bxh2 = getDefaultBXH();
bxh2.Position = "2";
bxh2.Club = "Leicester City";
bxh2.Played = "22";
bxh2.Won = "14";
bxh2.Drawn = "3";
bxh2.Lost = "5";
bxh2.GF = "47";
bxh2.GA = "21";
bxh2.GD = "+26";
bxh2.Points = "45";
bxh.push(bxh2);
let bxh3 = getDefaultBXH();
bxh3.Position = "3";
bxh3.Club = "Manchester City";
bxh3.Played = "21";
bxh3.Won = "14";
bxh3.Drawn = "2";
bxh3.Lost = "5";
bxh3.GF = "56";
bxh3.GA = "24";
bxh3.GD = "+32";
bxh3.Points = "44";
bxh.push(bxh3);
let bxh4 = getDefaultBXH();
bxh4.Position = "4";
bxh4.Club = "Chealsea";
bxh4.Played = "22";
bxh4.Won = "12";
bxh4.Drawn = "3";
bxh4.Lost = "7";
bxh4.GF = "39";
bxh4.GA = "29";
bxh4.GD = "+10";
bxh4.Points = "39";
bxh.push(bxh4);
let bxh5 = getDefaultBXH();
bxh5.Position = "5";
bxh5.Club = "Manchester United";
bxh5.Played = "22";
bxh5.Won = "9";
bxh5.Drawn = "7";
bxh5.Lost = "6";
bxh5.GF = "36";
bxh5.GA = "25";
bxh5.GD = "+11";
bxh5.Points = "34";
bxh.push(bxh5);
let bxh6 = getDefaultBXH();
bxh6.Position = "6";
bxh6.Club = "Sheffield United";
bxh6.Played = 22;
bxh6.Won = "8";
bxh6.Drawn = "8";
bxh6.Lost = "6";
bxh6.GF = "24";
bxh6.GA = "21";
bxh6.GD = "+3";
bxh6.Points = "32";
bxh.push(bxh6);
let bxh7 = getDefaultBXH();
bxh7.Position = "7";
bxh7.Club = "Wolverhampton Wanderers";
bxh7.Played = "22";
bxh7.Won = "7";
bxh7.Drawn = "10";
bxh7.Lost = "5";
bxh7.GF = "31";
bxh7.GA = "28";
bxh7.GD = "+3";
bxh7.Points = "31";
bxh.push(bxh7);
let bxh8 = getDefaultBXH();
bxh8.Position = "8";
bxh8.Club = "Tottenham Hostpur";
bxh8.Played = "22";
bxh8.Won = "8";
bxh8.Drawn = "6";
bxh8.Lost = "8";
bxh8.GF = "36";
bxh8.GA = "31";
bxh8.GD = "+5";
bxh8.Points = "30";
bxh.push(bxh8);
let bxh9 = getDefaultBXH();
bxh9.Position = "9";
bxh9.Club = "Crystal Palace";
bxh9.Played = "22";
bxh9.Won = "7";
bxh9.Drawn = "8";
bxh9.Lost = "7";
bxh9.GF = "20";
bxh9.GA = "24";
bxh9.GD = "-4";
bxh9.Points = "29";
bxh.push(bxh9);
let bxh10 = getDefaultBXH();
bxh10.Position = "10";
bxh10.Club = "Arsenal";
bxh10.Played = "22";
bxh10.Won = "6";
bxh10.Drawn = "10";
bxh10.Lost = "6";
bxh10.GF = "29";
bxh10.GA = "31";
bxh10.GD = "-2";
bxh10.Points = "28";
bxh.push(bxh10);
let bxh11= getDefaultBXH();
bxh11.Position = "11";
bxh11.Club = "Everton";
bxh11.Played = "22";
bxh11.Won = "8";
bxh11.Drawn = "4";
bxh11.Lost = "10";
bxh11.GF = "25";
bxh11.GA = "32";
bxh11.GD = "-7";
bxh11.Points = "28";
bxh.push(bxh11);
let bxh12 = getDefaultBXH();
bxh12.Position = "12";
bxh12.Club = "Southampton";
bxh12.Played = "22";
bxh12.Won = "8";
bxh12.Drawn = "4";
bxh12.Lost = "10";
bxh12.GF = "27";
bxh12.GA = "39";
bxh12.GD = "-12";
bxh12.Points = "28";
bxh.push(bxh12);
let bxh13 = getDefaultBXH();
bxh13.Position = "13";
bxh13.Club = "Newcastle United";
bxh13.Played = "22";
bxh13.Won = "7";
bxh13.Drawn = "5";
bxh13.Lost = "10";
bxh13.GF = "21";
bxh13.GA = "34";
bxh13.GD = "-13";
bxh13.Points = "26";
bxh.push(bxh13);
let bxh14 = getDefaultBXH();
bxh14.Position = "14";
bxh14.Club = "Brighton and Hove Albion";
bxh14.Played = "22";
bxh14.Won = "6";
bxh14.Drawn = "6";
bxh14.Lost = "10";
bxh14.GF = "25";
bxh14.GA = "30";
bxh14.GD = "-5";
bxh14.Points = "24";
bxh.push(bxh14);
let bxh15 = getDefaultBXH();
bxh15.Position = "15";
bxh15.Club = "Burnley";
bxh15.Played = "22";
bxh15.Won = "7";
bxh15.Drawn = "3";
bxh15.Lost = "12";
bxh15.GF = "24";
bxh15.GA = "37";
bxh15.GD = "-13";
bxh15.Points = "24";
bxh.push(bxh15);
let bxh16 = getDefaultBXH();
bxh16.Position = "16";
bxh16.Club = "West Ham United";
bxh16.Played = "21";
bxh16.Won = "6";
bxh16.Drawn = "4";
bxh16.Lost = "11";
bxh16.GF = "25";
bxh16.GA = "33";
bxh16.GD = "-8";
bxh16.Points = "22";
bxh.push(bxh16);
let bxh17 = getDefaultBXH();
bxh17.Position = "17";
bxh17.Club = "Aston Villa";
bxh17.Played = "21";
bxh17.Won = "6";
bxh17.Drawn = "3";
bxh17.Lost = "12";
bxh17.GF = "27";
bxh17.GA = "37";
bxh17.GD = "-10";
bxh17.Points = "21";
bxh.push(bxh17);
let bxh18 = getDefaultBXH();
bxh18.Position = "18";
bxh18.Club = "Bournemouth";
bxh18.Played = "21";
bxh18.Won = "5";
bxh18.Drawn = "5";
bxh18.Lost = "11";
bxh18.GF = "20";
bxh18.GA = "32";
bxh18.GD = "-12";
bxh18.Points = "20";
bxh.push(bxh18);
let bxh19 = getDefaultBXH();
bxh19.Position = "19";
bxh19.Club = "Watford";
bxh19.Played = "21";
bxh19.Won = "4";
bxh19.Drawn = "7";
bxh19.Lost = "10";
bxh19.GF = "17";
bxh19.GA = "34";
bxh19.GD = "-17";
bxh19.Points = "19";
bxh.push(bxh19);
let bxh20 = getDefaultBXH();
bxh20.Position = "20";
bxh20.Club = "Norwich City";
bxh20.Played = "22";
bxh20.Won = "3";
bxh20.Drawn = "5";
bxh20.Lost = "14";
bxh20.GF = "22";
bxh20.GA = "45";
bxh20.GD = "-23";
bxh20.Points = "14";
bxh.push(bxh20);
function a() {
    let sumtr = '';
    for (let i = 0; i < bxh.length; i++) {
        const team = bxh[i];

        sumtr += `<tr style="text-align: center;">
        <td>${team.Position}</td>
        <td>${team.Club}</td>
        <td>${team.Played}</td>
        <td>${team.Won}</td>
        <td>${team.Drawn}</td>
        <td>${team.Lost}</td>
        <td>${team.GF}</td>
        <td>${team.GA}</td>
        <td>${team.GD}</td>
        <td>${team.Points}</td>
    <tr>`;
    }


    document.getElementById('hello').innerHTML = sumtr;
}


a();

let players=[
    {
        'Name': 'Mohamed Salah',
        'Position' : 'Forward',
        'Nationality': 'Egypt',
        'Image' : 'https://haircutsz.com/wp-content/gallery/sergio-aguero/Sergio-Aguero-2018.png',
        'link': 'https://vi.wikipedia.org/wiki/Sergio_Ag%C3%BCero'
    },
    {
        'Name' : 'Sergio Aguero',
        'Position' :'Forward',
        'Nationality' : 'Argentina'
    }
]


