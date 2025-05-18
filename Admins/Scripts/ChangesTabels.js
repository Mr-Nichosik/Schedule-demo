
document.addEventListener('DOMContentLoaded', function ()
{

    const createButton = document.getElementById('CreateChangesTableBtn');
    const blankChangesBlock = document.getElementById('BlankChanges');
    
    // Кнопка "Создать"
    if (createButton)
    {
        createButton.addEventListener('click', function ()
        {
            const MainContentBlock = document.querySelector('.MainContent');
            if (MainContentBlock)
            {
                // Создаем новый блок на основе шаблона
                const newTabContent = document.createElement('div');
                newTabContent.className = 'TabContent';
                newTabContent.id = "Changes_" + Date.now(); // Уникальный ID

                // HTML-структура нового блока
                newTabContent.innerHTML =
                `
                <div id = "ChangesTable_${Date.now()}" class = "Classestables">
                    <p id = "ClassestablesTitle">Изменения в расписании</p>

                    <div class = "ChangesTableInputs">
                        <input class = "ChangesTableInputs" type = "text" name = "ChangesClass_${Date.now()}" placeholder = "Класс"/>
                        <input class = "ChangesTableInputs" type = "text" name = "ChangesDate_${Date.now()}" placeholder = "Дата"/>
                    </div>

                    <table>
                        <tr>
                            <th>№</th>
                            <th>Понедельник</th>
                            <th>Вторник</th>
                            <th>Среда</th>
                            <th>Четверг</th>
                            <th>Пятница</th>
                        </tr>
                        <tr>
                            <th>1</th>
                            <td><a class = "ClassButton" id = "Monday1Changes_${Date.now()}">Предмет</a></td>
                            <td><a class = "ClassButton" id = "Tuesday1Changes_${Date.now()}">Предмет</a></td>
                            <td><a class = "ClassButton" id = "Wednesday1Changes_${Date.now()}">Предмет</a></td>
                            <td><a class = "ClassButton" id = "Thursday1Changes_${Date.now()}">Предмет</a></td>
                            <td><a class = "ClassButton" id = "Friday1Changes_${Date.now()}">Предмет</a></td>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td><a class = "ClassButton" id = "Monday2Changes_${Date.now()}">Предмет</a></td>
                            <td><a class = "ClassButton" id = "Tuesday2Changes_${Date.now()}">Предмет</a></td>
                            <td><a class = "ClassButton" id = "Wednesday2Changes_${Date.now()}">Предмет</a></td>
                            <td><a class = "ClassButton" id = "Thursday2Changes_${Date.now()}">Предмет</a></td>
                            <td><a class = "ClassButton" id = "Friday2Changes_${Date.now()}">Предмет</a></td>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td><a class = "ClassButton" id = "Monday3Changes_${Date.now()}">Предмет</a></td>
                            <td><a class = "ClassButton" id = "Tuesday3Changes_${Date.now()}">Предмет</a></td>
                            <td><a class = "ClassButton" id = "Wednesday3Changes_${Date.now()}">Предмет</a></td>
                            <td><a class = "ClassButton" id = "Thursday3Changes_${Date.now()}">Предмет</a></td>
                            <td><a class = "ClassButton" id = "Friday3Changes_${Date.now()}">Предмет</a></td>
                        </tr>
                        <tr>
                            <th>4</th>
                            <td><a class = "ClassButton" id = "Monday4Changes_${Date.now()}">Предмет</a></td>
                            <td><a class = "ClassButton" id = "Tuesday4Changes_${Date.now()}">Предмет</a></td>
                            <td><a class = "ClassButton" id = "Wednesday4Changes_${Date.now()}">Предмет</a></td>
                            <td><a class = "ClassButton" id = "Thursday4Changes_${Date.now()}">Предмет</a></td>
                            <td><a class = "ClassButton" id = "Friday4Changes_${Date.now()}">Предмет</a></td>
                        </tr>
                        <tr>
                            <th>5</th>
                            <td><a class = "ClassButton" id = "Monday5Changes_${Date.now()}">Предмет</a></td>
                            <td><a class = "ClassButton" id = "Tuesday5Changes_${Date.now()}">Предмет</a></td>
                            <td><a class = "ClassButton" id = "Wednesday5Changes_${Date.now()}">Предмет</a></td>
                            <td><a class = "ClassButton" id = "Thursday5Changes_${Date.now()}">Предмет</a></td>
                            <td><a class = "ClassButton" id = "Friday5Changes_${Date.now()}">Предмет</a></td>
                        </tr>
                        <tr>
                            <th>6</th>
                            <td><a class = "ClassButton" id = "Monday6Changes_${Date.now()}">Предмет</a></td>
                            <td><a class = "ClassButton" id = "Tuesday6Changes_${Date.now()}">Предмет</a></td>
                            <td><a class = "ClassButton" id = "Wednesday6Changes_${Date.now()}">Предмет</a></td>
                            <td><a class = "ClassButton" id = "Thursday6Changes_${Date.now()}">Предмет</a></td>
                            <td><a class = "ClassButton" id = "Friday6Changes_${Date.now()}">Предмет</a></td>
                        </tr>
                        <tr>
                            <th>7</th>
                            <td><a class = "ClassButton" id = "Monday7Changes_${Date.now()}">Предмет</a></td>
                            <td><a class = "ClassButton" id = "Tuesday7Changes_${Date.now()}">Предмет</a></td>
                            <td><a class = "ClassButton" id = "Wednesday7Changes_${Date.now()}">Предмет</a></td>
                            <td><a class = "ClassButton" id = "Thursday7Changes_${Date.now()}">Предмет</a></td>
                            <td><a class = "ClassButton" id = "Friday7Changes_${Date.now()}">Предмет</a></td>
                        </tr>
                        <tr>
                            <th>8</th>
                            <td><a class = "ClassButton" id = "Monday8Changes_${Date.now()}">Предмет</a></td>
                            <td><a class = "ClassButton" id = "Tuesday8Changes_${Date.now()}">Предмет</a></td>
                            <td><a class = "ClassButton" id = "Wednesday8Changes_${Date.now()}">Предмет</a></td>
                            <td><a class = "ClassButton" id = "Thursday8Changes_${Date.now()}">Предмет</a></td>
                            <td><a class = "ClassButton" id = "Friday8Changes_${Date.now()}">Предмет</a></td>
                        </tr>
                    </table>

                    <div class = "ChangesTableDelete">
                        <a class = "Button" id = "DeleteChangesTableBtn"><p class = ButtonText>Удалить</p></a>
                    </div>
                </div>
                `;

                // Добавляем новый блок в конец MainContentBlock
                MainContentBlock.appendChild(newTabContent);
                blankChangesBlock.parentNode.insertBefore(newTabContent, blankChangesBlock);

                // Корректируем новые кнопки
                window.ButtonFunctions.AddEffect();

                // Назначаем обработчик для кнопки "Удалить" в новом блоке
                const deleteButton = newTabContent.querySelector('#DeleteChangesTableBtn');
                if (deleteButton)
                {
                    deleteButton.addEventListener('click', function ()
                    {
                        newTabContent.remove();
                    });
                }
            }
        });
    }

    // Обработчики для существующих кнопок "Удалить"
    const deleteButtons = document.querySelectorAll('#DeleteTChangesTableBtn');
    deleteButtons.forEach(function (button)
    {
        button.addEventListener('click', function ()
        {
            const profileBlock = button.closest('.TabContent');
            if (profileBlock)
            {
                profileBlock.remove();
            }
        });
    });
});