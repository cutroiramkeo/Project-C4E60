let bxh = [
    {
        'Position': '1',
        'Club': 'Liverpool',
        'Played': '18',
        'Won': '17',
        'Drawn': '1',
        'Lost': '0',
        'GF': '46',
        'GA': '14',
        'GD': '32',
        'Points': '52',
    },
    {
        'Position': '2',
        'Club': 'Leicester City',
        'Played': '19',
        'Won': '12',
        'Drawn': '3',
        'Lost': '4',
        'GF': '41',
        'GA': '18',
        'GD': '23',
        'Points': '39',
    },
    {
        'Position': '3',
        'Club': 'Manchester City',
        'Played': '19',
        'Won': '12',
        'Drawn': '2',
        'Lost': '5',
        'GF': '52',
        'GA': '23',
        'GD': '29',
        'Points': '38',
    }
    
];



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
