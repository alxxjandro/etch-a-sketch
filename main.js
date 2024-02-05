const bodyContainer = document.querySelector('.gridContainer'); 


function createGrid(numberOfSlots) {
    for (let i = 0; i < numberOfSlots; i++) {
        let column = document.createElement('div');
        column.classList.add('columns');
        bodyContainer.append(column);

        for (let j = 0; j < numberOfSlots; j++) {
            let row = document.createElement('div');
            row.classList.add('row');
            column.append(row);
        }
    }
}


createGrid(16);
