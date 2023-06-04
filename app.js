// Elementleri Secme
const githubForm = document.getElementById("github-form");
const nameInput = document.getElementById("githubname");
const clearLastUsers = document.getElementById("clear-last-users");
const lastUsers = document.getElementById("last-users");
const github = new Github();
const ui = new UI();

addEventListeners();

function eventListeners() {
    githubForm.addEventListener("submit", getData);
    clearLastUsers.addEventListener("click", clearAllSearched);
    document.addEventListener("DOMContentLoaded", getAllSearched);
}

function getData(e) {

    let username = nameInput.value.trim();

    if (username === "") {
        alert("Lutfen Gecerli bir kullanici adi girin.");
    }
    else {
        github.getGithubData(username)
        .then(response => {
            if(response.user.message === "Not Found") {
                // Hata Mesaji
                console.log("Hata");
            }
            else {
                ui.showUserInfo(response.user);
            }
        })
        .catch(err => console.log(err));
    }



    ui.clearInput(); // Input Temizleme

    e.preventDefault();
}

function clearAllSearched() {
    // Tum arananlari temizle
}

function getAllSearched() {
    // Arananlari Storagedan al ve UIye ekle
}