function addBlock() {
    const block = document.createElement('div');
    block.classList.add('block');
    
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.placeholder = 'Имя';
    
    const colorSelect = document.createElement('select');
    const colors = ['красный', 'синий', 'зеленый', 'желтый', 'фиолетовый'];
    colors.forEach(color => {
        const option = document.createElement('option');
        option.value = color;
        option.textContent = color;
        colorSelect.appendChild(option);
    });
    
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteButton');
    deleteButton.textContent = 'Удалить';
    deleteButton.addEventListener('click', function() {
        block.remove();
    });

    const saveButton = document.createElement('button');
    saveButton.textContent = 'Сохранить';
    saveButton.addEventListener('click', function() {
        const name = nameInput.value;
        const color = colorSelect.value;
        updateBlockText(name, color);
    });
    
    function isValidColor(color) {
        const russianColors = ['красный', 'синий', 'зеленый', 'желтый', 'фиолетовый'];
        return russianColors.includes(color.toLowerCase());
    }
    
    function updateBlockText(name, color) {
        block.textContent = `Я ${name} и мой любимый цвет ${color}`;
        block.appendChild(nameInput);
        block.appendChild(colorSelect);
        block.appendChild(deleteButton);
        block.appendChild(saveButton);
    }
    
    updateBlockText('', '');
    document.getElementById('blocksContainer').appendChild(block);
}