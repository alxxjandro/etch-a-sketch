
const gridContainer = document.querySelector('#gridContainer');

//You give que amount of slots per-column
function createColumn(numberOfSlots){

    //gets saved on a div of each own 
    const rowContainer = document.createElement('div');
    gridContainer.append(rowContainer);

    //generate each cube-slot
    for (let i = 0; i < numberOfSlots; i++){
        const cube = document.createElement('div');
        cube.classList.add('gridCube');
        rowContainer.append(cube);
    }
}

//generate a row using the columns function multiple times
function createGrid(numberOfSlots){
    for (let i = 0; i < numberOfSlots; i++){
        createColumn(numberOfSlots);
    }
}

createGrid(16);




