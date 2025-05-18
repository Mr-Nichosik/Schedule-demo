
// Корректируем новые кнопки
window.ButtonFunctions.AddEffect();

// Modal window

const Overlay = document.getElementById("Overlay");

const ClassBtns = document.getElementsByClassName("ClassButton");
const ModalWindow = document.getElementById("ClassModal");

ForEach.call(ClassBtns, function (b)
{
  b.addEventListener("click", () => {
    
    ModalWindow.style.opacity = "1";
    ModalWindow.style.visibility = "visible";
    
    Overlay.style.opacity = "1";
    Overlay.style.visibility = "visible";
  });
});

// Bells modal window
const BellsModalWindow = document.getElementById("BellsModal");
const BellsBtns = document.getElementsByClassName("BellButton");

ForEach.call(BellsBtns, function (b)
{
  b.addEventListener("click", () => {
    
    BellsModalWindow.style.opacity = "1";
    BellsModalWindow.style.visibility = "visible";
    
    Overlay.style.opacity = "1";
    Overlay.style.visibility = "visible";

    let cellText = b.textContent;
    document.querySelector(".BellsModalInput").value = cellText;
  });
});

// Profiles button
const ProfilesBtn = document.getElementById("ProfilesLink");
const ProfilesModal = document.getElementById("ProfilesModal");

ProfilesBtn.addEventListener("click", () => {
  
  ProfilesModal.style.opacity = "1";
  ProfilesModal.style.visibility = "visible";

  Overlay.style.opacity = "1";
  Overlay.style.visibility = "visible";

});

// Close Profiles Modal button
const CloseProfilesModalBtn = document.getElementById("CloseProfilesModalBtn");

CloseProfilesModalBtn.addEventListener("click", () => {
  
  ProfilesModal.style.opacity = "0";
  ProfilesModal.style.visibility = "hidden";

  Overlay.style.opacity = "0";
  Overlay.style.visibility = "hidden";

});

// Classes button
const ClassesBtn = document.getElementById("ClassesLink");
const ClassesModal = document.getElementById("ClassesModal");

ClassesBtn.addEventListener("click", () => {
  
  ClassesModal.style.opacity = "1";
  ClassesModal.style.visibility = "visible";

  Overlay.style.opacity = "1";
  Overlay.style.visibility = "visible";

});

// Close Classes Modal button
const CloseClassesModalBtn = document.getElementById("CloseClassesModalBtn");

CloseClassesModalBtn.addEventListener("click", () => {
  
  ClassesModal.style.opacity = "0";
  ClassesModal.style.visibility = "hidden";

  Overlay.style.opacity = "0";
  Overlay.style.visibility = "hidden";

});

// Overlay listener

Overlay.addEventListener("click", () => {
  
  ProfilesModal.style.visibility = "hidden";
  ProfilesModal.style.opacity = "0";

  ModalWindow.style.visibility = "hidden";
  ModalWindow.style.opacity = "0";

  ClassesModal.style.opacity = "0";
  ClassesModal.style.visibility = "hidden";

  BellsModalWindow.style.opacity = "0";
  BellsModalWindow.style.visibility = "hidden";

  Overlay.style.visibility = "hidden";
  Overlay.style.opacity = "0";
});
