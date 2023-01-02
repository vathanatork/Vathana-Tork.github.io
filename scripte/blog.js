

let blogCard = document.getElementById('blog__card-wrap');
let blogText = document.getElementById('blog__text');

function renderText(){
    provincesDescription.forEach((x)=>{
        blogText.innerHTML=`
        <h1 class="blog__text-title">${x.provinceName} Tourist Attractions</h1>
        <p class="blog__text-paragraph">${x.description}</p>
        `
    })
}

renderText();

function generateBlogCard () {
    blogCardItem.forEach((blogCardItem)=>{
        blogCard.innerHTML +=`
        <div class="blog__card-item">
            <div class="blog__card-img-wrap">
                <!-- card image -->
                <img src="${blogCardItem.cardBlog}" alt="${blogCardItem.Title}">
            </div>
            <div class="blog__card-text-wrap">
                <!-- card title -->
                <h2 class="blog__card-text-title">${blogCardItem.Title}</h2>
                <!-- card description -->
                <p class="blog__card-text-sub-title">${blogCardItem.description1}</p>
                    <!-- read more link -->
                <a href="../detial.html">
                    <div class="blog__card-text-button" onclick="addToDetail(${blogCardItem.id})">Read more<i class="fa-sharp fa-solid fa-chevron-right"></i></div>
                </a>
            </div>
        </div>
        `
    });
};

generateBlogCard ();

let detailItem =[];

function addToDetail(id){
   const forDetail = blogCardItem.find((blogCardItem)=> blogCardItem.id === id);
   detailItem.push(forDetail);
   localStorage.setItem("data",JSON.stringify(detailItem));
};


let detailData = JSON.parse(localStorage.getItem("data")) || [];
