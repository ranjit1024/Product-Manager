const open = document.querySelector(".add-button");
const model = document.querySelector(".model-container");
const close = document.querySelector("#close");
const Products = document.querySelectorAll("li");
const addProducts = document.querySelector("ul");
const modelInput = document.querySelector(".model input");
const blankError = document.querySelector("#error");
const milk = document.getElementById("milk");
const exit = document.querySelector("#exit");


open.addEventListener("click", (e) => {
    model.classList.add("show");
})

close.addEventListener("click", (e) => {
    let productValue = modelInput.value;
    if (productValue == "") {
        blankError.classList.add("visible")
        modelInput.style.borderColor = "red";

    } else {
        model.classList.remove("show");
        const newLi = document.createElement("li");
        //main event programming 
        {
            const newLi = document.createElement("li");
            newLi.textContent = `${productValue}`;
            addProducts.appendChild(newLi);
        }
        blankError.classList.remove("visible");
        blankError.classList.add("hide");
        modelInput.style.borderColor = "black";
        modelInput.value = "";
    }
})

exit.addEventListener("click", (e) => {
    model.classList.remove("show");
    blankError.classList.remove("visible");
    blankError.classList.add("hide");
    modelInput.style.borderColor = "black";
    modelInput.value = "";
})
// Model adding funcion done

addProducts.addEventListener("click", (event) => {
    if (event.target.tagName === "LI") {
        event.target.remove();
    }
    console.log("ok")
})

