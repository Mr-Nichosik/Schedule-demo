
document.addEventListener('DOMContentLoaded', function ()
{
    // Кнопка "Создать"
    const createButton = document.getElementById('CreateClassesModalBtn');
    if (createButton)
    {
        createButton.addEventListener('click', function ()
        {
            const ClassesModalBody = document.querySelector('.ClassesModalBody');
            if (ClassesModalBody)
            {
                // Создаем новый блок на основе шаблона
                const newProfileBlock = document.createElement('div');
                newProfileBlock.className = 'ClassesModalContent';
                newProfileBlock.id = 'Class_' + Date.now(); // Уникальный ID

                // HTML-структура нового блока
                newProfileBlock.innerHTML =
                `
                <div>
                    <input class = "ClassesModalInput" type = "text" name = "class" placeholder = "Название предмета"/>
                    <div class = "ClassesModalDeleteBtnBlock">
                        <a class = "Button" id = "DeleteClassBtn"><p class = "ButtonText">Удалить</p></a>
                    </div>
                </div>
                `;

                // Добавляем новый блок в конец ClassesModalBody
                ClassesModalBody.appendChild(newProfileBlock);

                // Корректируем новые кнопки
                window.ButtonFunctions.AddEffect();

                // Назначаем обработчик для кнопки "Удалить" в новом блоке
                const deleteButton = newProfileBlock.querySelector('#DeleteClassBtn');
                if (deleteButton)
                {
                    deleteButton.addEventListener('click', function ()
                    {
                        newProfileBlock.remove();
                    });
                }
            }
        });
    }

    // Обработчики для существующих кнопок "Удалить"
    const deleteButtons = document.querySelectorAll('#DeleteClassBtn');
    deleteButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const ClassesBlock = button.closest('.ClassesModalContent');
            if (ClassesBlock) {
                ClassesBlock.remove();
            }
        });
    });
});