let btnModal = document.getElementById("btnModal")

// let miModal = document.getElementById("miModal")
// El Javascript que hemos importado de bootstrap me trae un objeto llamado bootstrap 
let miModal = new bootstrap.Modal(document.getElementById("miModal"))

//4.6
//5!!!!!!!!!!!!!

btnModal.addEventListener("click", function(){
    miModal.show()
},2000)