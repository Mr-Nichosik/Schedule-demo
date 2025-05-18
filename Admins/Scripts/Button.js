
// Tabs
function OpenClassTable(evt, ClassN)
{
    const element = document.getElementById(ClassN);
    element?.current.scrollIntoView()
  }
  
// Button effect

const Buttons = document.getElementsByClassName("Button");
let ForEach = Array.prototype.forEach;

window.ButtonFunctions = {
AddEffect: function()
{
    ForEach.call(Buttons, function (b) {
        let isTouchEvent = false; // Флаг для отслеживания touch-событий
  
        b.addEventListener("touchstart", function (e) {
            isTouchEvent = true; // Устанавливаем флаг, что это touch-событие
            AddElement.call(this, e); // Привязываем контекст this
        },

            {
                passive: true
            }
        );
  
        b.addEventListener("mousedown", function (e) {
            if (isTouchEvent) {
                return;
            }
            AddElement.call(this, e); // Привязываем контекст this
        }
        );
    });
  
    function AddElement(e) {
        let AddDiv = document.createElement("div");
        let MValue = Math.max(this.clientWidth, this.clientHeight);
        let SDiv = AddDiv.style;
        let px = "px";
        let Rect = this.getBoundingClientRect(); // Теперь this — это корректный DOM-элемент
  
        // Определяем координаты касания или клика
        let clientX, clientY;
        if (e.touches) {
            // Для touch-событий
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        }
        else {
            // Для mouse-событий
            clientX = e.clientX;
            clientY = e.clientY;
        }
  
        SDiv.width = SDiv.height = MValue + px;
        SDiv.left = clientX - Rect.left - (MValue / 2) + px;
        SDiv.top = clientY - Rect.top - (MValue / 2) + px;
  
        AddDiv.classList.add("Pulse");
        this.appendChild(AddDiv);
  
        AddDiv.addEventListener('animationend', function () {
            this.remove(); // Удаляем элемент после завершения анимации
        });
    }
}

}

AddEffect();