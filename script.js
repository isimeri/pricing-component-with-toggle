const cards = document.querySelectorAll(".price-card");
const priceSwitch = document.querySelector("#price-mode");
const annualPrice = document.querySelectorAll(".annual-price");
const monthlyPrice = document.querySelectorAll(".monthly-price");
const slider = document.querySelector(".slider");

cards.forEach(card => {
    card.addEventListener("click", function(e){
        cards.forEach(cardsu => {
            if(!e.currentTarget.classList.contains("active"))
            { 
                cardsu.classList.remove("active");
            }
        });
        card.classList.add("active");
    });
});

priceSwitch.addEventListener("change", switcharoo);
priceSwitch.addEventListener("click", switcharoo);

document.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === "Space") {
      e.preventDefault();
      slider.click();
    }
  });


  function switcharoo(){
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
}