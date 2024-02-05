const bodyContainer = document.querySelector('.gridContainer'); 
let color = 'black'


function createGrid(numberOfSlots) {
    for (let i = 0; i < numberOfSlots; i++) {
        let column = document.createElement('div');
        column.classList.add('columns');
        bodyContainer.append(column);

        for (let j = 0; j < numberOfSlots; j++) {
            let row = document.createElement('div');
            row.classList.add('row');
            column.append(row);

            row.addEventListener('mouseover', () =>{
                changeColor(row,color)
            })
        }
    }
}

function changeColor(slot,color){
    slot.style.backgroundColor = color;
}



createGrid(10);

