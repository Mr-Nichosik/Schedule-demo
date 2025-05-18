
document.addEventListener('DOMContentLoaded', function ()
{
    // Кнопка "Создать"
    const createButton = document.getElementById('CreateProfilesModalBtn');
    if (createButton)
    {
        createButton.addEventListener('click', function ()
        {
            const profilesModalBody = document.querySelector('.ProfilesModalBody');
            if (profilesModalBody)
            {
                // Создаем новый блок на основе шаблона ProfilesModal_SomeTeacher
                const newProfileBlock = document.createElement('div');
                newProfileBlock.className = 'ProfilesModalContent';
                newProfileBlock.id = 'ProfilesModal_Teacher_' + Date.now(); // Уникальный ID

                // HTML-структура нового блока (аналогичная существующему)
                newProfileBlock.innerHTML =
                `
                    <h5 class = "ProfilesModalText" id = "ContentTitle">Преподаватель</h5>
                    <div class="ContentSubscetion">
                        <p class="ProfilesModalText" id = "LoginTitle">Фамилия, имя:</p>
                        <p class="ProfilesModalText" id = "LoginFromDB"><input class = "ProfilesModalInput" type = "text" name = "name" placeholder = "Имя"/></p>
                    </div>
                    <div class="ContentSubscetion">
                        <p class="ProfilesModalText" id = "LoginTitle">Логин:</p>
                        <p class="ProfilesModalText" id = "LoginFromDB"><input class = "ProfilesModalInput" type = "text" name = "login" placeholder = "Логин"/></p>
                    </div>
                    <div class="ContentSubscetion">
                        <p class="ProfilesModalText" id = "PasswordTitle">Пароль:</p>
                        <p class="ProfilesModalText" id = "PasswordFromDB"><input class = "ProfilesModalInput" type = "text" name = "password" placeholder = "Пароль"/></p>
                    </div>
                    <div class="ContentSubscetion">
                        <p class="ProfilesModalText" id="CabinetTitle">Кабинет:</p>
                        <p class="ProfilesModalText" id="CabinetFromDB"><ProfilesModalInput" type = "text" name = "cabinet" placeholder = "Кабинет"/></p>
                    </div>
                    <div class="ContentSubscetion" id="TeachingClasses">
                        <p class="ProfilesModalText" id="TeachingClassTitle">Предметы:</p>
                        <li class="ProfilesModalText" id="TeachingClassFromDB1">
                            <select>
                                <option class = "SelectButton" value = "ClassId_1">Русский</option>
                                <option class = "SelectButton" value = "ClassId_2">Математика</option>
                                <option class = "SelectButton" value = "ClassId_3">Музыка</option>
                            </select>
                        </li>

                        <li class="ProfilesModalText" id="TeachingClassFromDB2">
                            <select>
                                <option class = "SelectButton" value = "ClassId_1">Русский</option>
                                <option class = "SelectButton" value = "ClassId_2">Математика</option>
                                <option class = "SelectButton" value = "ClassId_3">Музыка</option>
                            </select>
                        </li>

                        <li class="ProfilesModalText" id="TeachingClassFromDB3">
                            <select>
                                <option class = "SelectButton" value = "ClassId_1">Русский</option>
                                <option class = "SelectButton" value = "ClassId_2">Математика</option>
                                <option class = "SelectButton" value = "ClassId_3">Музыка</option>
                            </select>
                        </li>
                    </div>
                    <div class = "ContentSubscetion" id ="DeleteButtonBlock">
                        <a class = "Button" id = "DeleteProfileBtn"><p class = "ButtonText">Удалить</p></a>
                    </div>
                `;

                // Добавляем новый блок в конец ProfilesModalBody
                profilesModalBody.appendChild(newProfileBlock);

                // Корректируем новые кнопки
                window.ButtonFunctions.AddEffect();

                // Назначаем обработчик для кнопки "Удалить" в новом блоке
                const deleteButton = newProfileBlock.querySelector('#DeleteProfileBtn');
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
    const deleteButtons = document.querySelectorAll('#DeleteProfileBtn');
    deleteButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            const profileBlock = button.closest('.ProfilesModalContent');
            if (profileBlock) {
                profileBlock.remove();
            }
        });
    });
});