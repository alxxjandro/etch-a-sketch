const bodyContainer = document.querySelector('.gridContainer'); 
let color = 'black'

//defining the buttons
const blackInkBtn = document.querySelector('#blackInk');
const randomColorBtn = document.querySelector('#randomColor');
const resizeBtn = document.querySelector('#resizeBtn')
const resetBtn = document.querySelector('#resetBtn');



function createGrid(numberOfSlots) {

    bodyContainer.innerHTML = ''; //erase the previous grid before drawing one

    for (let i = 0; i < numberOfSlots; i++) {
        let column = document.createElement('div');
        column.classList.add('columns');
        bodyContainer.append(column);

        for (let j = 0; j < numberOfSlots; j++) {
            let row = document.createElement('div');
            row.classList.add('row');
            column.append(row);

            //pass over which row is the mouse hovering into
            row.addEventListener('mouseover', () =>{
                changeColor(row,color)
            })
        }
    }
}


//this part makes the buttons work
function changeColor(slot,color){
    slot.style.backgroundColor = color;
}

function getRandomColor(){
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

randomColorBtn.addEventListener('click', () =>{
    color = getRandomColor();
})

blackInkBtn.addEventListener('click',() =>{
    color = 'black'
})

resizeBtn.addEventListener('click',() => {
    let scale;
    do{
        scale = parseInt(prompt('Enter a number between 1 and 99 to resize the grid!'))
    } while (scale < 1 || scale > 99);
    createGrid(scale);
    
})


//reset
resetBtn.addEventListener('click', () =>{
    const gridCubes = document.querySelectorAll('.row');
    gridCubes.forEach(function(cube,index){
        cube.style.backgroundColor = 'white'
    })
})

createGrid(16);




