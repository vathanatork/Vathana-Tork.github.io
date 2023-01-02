
const detailText = document.getElementById('detail__text');
const detailGallary = document.getElementById('detail__gallary');
let detailData = JSON.parse(localStorage.getItem("data")) || [];


function renderDetail(){
    detailData.forEach((x) => {
        detailText.innerHTML =`
        <h1 class="detail__text-title">${x.Title}</h1>
        <p class="detail__text-disc-general">${x.description1}</p>
        <p class="detail__text-disc-specific">${x.description2}</p>
        <p class="detail__text-disc-howToGo">How to get to ${x.Title}</p>
        <p class="detail__text-disc-howToGo-disc">${x.howTogo}</p>
       `;
    });

    detailData.forEach((x)=>{
        detailGallary.innerHTML =`
        <!-- button  -->
        <div class="detail__gallary-button">
            <div class="detail__gallary-button-gallary" >Gallary</div>
            <div class="detail__gallary-button-map" >Map</div>
        </div>
        <!-- gallary -->
        <div class="detail__gallary-camera">
            <div class="detail__gallary-camera-gallary">
                        <div class="detail__gallary-camera-gallary-big"><img src="${x.cardDetail1}" alt="image"></div>
                        <div class="detail__gallary-camera-gallary-small detail__gallary-camera-gallary-small1"><img src="${x.cardDetail2}" alt="image"></div>
                        <div class="detail__gallary-camera-gallary-small detail__gallary-camera-gallary-small2"><img src="${x.cardDetail3}" alt="image"></div>
                        <div class="detail__gallary-camera-gallary-small detail__gallary-camera-gallary-small3"><img src="${x.cardDetail4}" alt="image"></div>
                        <div class="detail__gallary-camera-gallary-small detail__gallary-camera-gallary-small4"><img src="${x.cardDetail5}" alt="image"></div>
            </div>
            <div class="detail__gallary-camera-map">
                <div class="detail__gallary-camera-map-wrap">
                    <iframe src="${x.map}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </div>
        </div>
        `;
    });
    
}

renderDetail();
