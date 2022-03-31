let firstCakeName = document.getElementById("cake-name")
let firstCakeImage = document.getElementById("cake-image")
let firstCakeDescription = document.getElementById("cake-description")
let firstCakeReviews = document.getElementById("review-list")
let cakeList = document.getElementById("cake-list")
let descriptionForm = document.getElementById("description-form")
let reviewForm = document.getElementById("review-form")
let review = document.getElementById("review")
let description = document.getElementById("description")

const request = async () =>{
    let req= await fetch("http://localhost:3000/cakes")
    let res = await req.json()

    firstCakeName.innerHTML = res[0].name
    console.log("name", firstCakeName)
    //let img = document.createElement("img")
    firstCakeImage.src = res[0].image_url
    console.log("img", firstCakeImage)
    firstCakeDescription.innerHTML = res[0].description
    console.log("description", firstCakeDescription)
    firstCakeReviews.innerHTML = res[0].reviews
    console.log("reviews", firstCakeReviews)

    res.forEach((e)=>{
        //cakeList.innerHTML = e.name
        //console.log("cakelist",cakeList)
         let list = document.createElement("li")
         list.innerHTML = e.name
        cakeList.append(list)
        console.log("cakelist",list)
    })

    reviewForm.addEventListener("submit", (e)=>{
        e.preventDefault()
        review.innerHTML = review.value
        console.log("review", review)
        firstCakeReviews.append(review)
        console.log("reviewlist",firstCakeReviews)

        

    })

    descriptionForm.addEventListener("submit", (e)=>{
        e.preventDefault()
        description.innerHTML = description.value
        console.log("review", description)
        //descriptionForm.append(description)

        

    })


} 
request()
