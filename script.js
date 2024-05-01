function addBlock() {
    const name = document.getElementById('nameInput').value;
    const color = document.getElementById('colorSelect').value;

    const block = document.createElement('div');
    block.classList.add('block');
    block.textContent = `Я ${name} и мой любимый цвет ${document.getElementById('colorSelect').options[document.getElementById('colorSelect').selectedIndex].text}`;

    const editButton = document.createElement('button');
    editButton.classList.add('editButton');
    editButton.textContent = 'Изменить';
    editButton.addEventListener('click', function() {
        const newName = prompt('Введите новое имя:');
        if (newName) {
            let newColorValue;
            do {
                newColorValue = prompt('Выберите новый цвет:\nкрасный, синий, зеленый, желтый, фиолетовый');
            } while (!isValidColor(newColorValue));

            const newColorSelect = document.getElementById('colorSelect');
            for (let i = 0; i < newColorSelect.options.length; i++) {
                if (newColorSelect.options[i].text.toLowerCase() === newColorValue.toLowerCase()) {
                    newColorSelect.selectedIndex = i;
                    break;
                }
            }
            block.textContent = `Я ${newName} и мой любимый цвет ${newColorValue}`;
        }
    });

    const deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteButton');
    deleteButton.textContent = 'Удалить';
    deleteButton.addEventListener('click', function() {
        block.remove();
    });

    block.appendChild(editButton);
    block.appendChild(deleteButton);
    document.getElementById('blocksContainer').appendChild(block);
}

function isValidColor(color) {
    const validColors = ['красный', 'синий', 'зеленый', 'желтый', 'фиолетовый'];
    return validColors.includes(color.toLowerCase());
}