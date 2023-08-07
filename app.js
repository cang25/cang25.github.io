const {reviewData} = window; 

//for debugging 
console.log("REVIEWS");

function displayReviews(reviewData){
    var reviewPage = document.getElementById("reviewsDis");
    reviewData.forEach((review)=>{
        var card = document.createElement("div");
        var cardHeader = document.createElement("div");
        
        var name = document.createElement("h5");
        var date = document.createElement("p");
        var rate = document.createElement("p");
        var reviewContent = document.createElement("p");


        name.textContent = review.name; 
        date.textContent = review.date;
        rate.textContent = review.rating; 
        reviewContent.textContent = review.text;
     
        card.className = "card";
        cardHeader.className = "review";

        cardHeader.appendChild(name);
        cardHeader.appendChild(date);
        cardHeader.appendChild(rate);
        cardHeader.appendChild(reviewContent);
        card.appendChild(cardHeader);
        reviewPage.appendChild(card);
        
    });
   
}

function resetReviews(){
    var reviewPage = document.getElementById("reviewsDis");
    reviewPage.innerHTML = "";
}

function addReview() {
    var form = document.getElementById("newRev");
    form.addEventListener("submit", (event) =>{
        event.preventDefault();
        
        var name = document.getElementById("name").value;
        var dateToday = new Date().toLocaleDateString();
        var rate = document.getElementById("rating").value;
        var content = document.getElementById("postReview").value;

        var newReview = {
            name: name, 
            date: dateToday,
            rating: rate,
            text: content,
           
        };

        reviewData.push(newReview);

        console.log(reviewData);
        resetReviews();
        form.reset();
        displayReviews(reviewData);
    })
}

function ValidEmail() {
    
    var form = document.getElementById("newletter-sign-up");

    form.addEventListener('submit', (event) =>{
            event.preventDefault();
      
});   
}

function onLoad(){
    console.log("Loaded");
    displayReviews(reviewData); 
    addReview();
}

window.addEventListener("load", onLoad);
