function btnClicking() {
    // console.log("Hey")

    document.querySelector("#dec-btn").addEventListener("click", function () {


        document.querySelector("#decryption").style.display = "block"
        document.querySelector("#encryption").style.display = "none"
        document.querySelector("#dec-btn").style.backgroundColor= "#333"
        document.querySelector("#enc-btn").style.backgroundColor= "#222"
        document.querySelector("#main > h1 span img").style.rotate ="270deg"
    })


    document.querySelector("#enc-btn").addEventListener("click", function () {


        document.querySelector("#encryption").style.display = "block"
        document.querySelector("#decryption").style.display = "none"

        document.querySelector("#enc-btn").style.backgroundColor= "#333"
        document.querySelector("#dec-btn").style.backgroundColor= "#222"
        document.querySelector("#main > h1 span img").style.rotate ="90deg"

    })

}

btnClicking()

