const cards = document.querySelectorAll(".price-card");
const priceSwitch = document.querySelector("#price-mode");
const annualPrice = document.querySelectorAll(".annual-price");
const monthlyPrice = document.querySelectorAll(".monthly-price");

cards.forEach(card => {
    card.addEventListener("click", function(e){
        cards.forEach(cardsu => {
            if(!e.currentTarget.classList.contains("active"))
            { 
                console.log(e.currentTarget);
                console.log(cardsu);
                console.log("tihuana");
                cardsu.classList.remove("active");
            }
        });
        card.classList.add("active");
    });
});

priceSwitch.addEventListener("change", function(){
    if(priceSwitch.checked)
    {
        monthlyPrice.forEach(mprice => {
            mprice.classList.add("hide");
        });
        annualPrice.forEach(aprice => {
            aprice.classList.remove("hide");
        });
    }
    else
    {
        monthlyPrice.forEach(mprice => {
            mprice.classList.remove("hide");
        });
        annualPrice.forEach(aprice => {
            aprice.classList.add("hide");
        });
    }
})