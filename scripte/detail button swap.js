
const gallaryButton = document.querySelector('.detail__gallary-button-gallary');
const mapButton = document.querySelector('.detail__gallary-button-map');
const gallaryCamera = document.querySelector('.detail__gallary-camera-gallary');
const mapCamera = document.querySelector('.detail__gallary-camera-map');

mapButton.addEventListener('click',()=>{
    gallaryCamera.classList.add("detail__gallary-camera-gallary-mapButtonclick");
    mapCamera.classList.add("detail__gallary-camera-map-mapButtonclick");
    mapButton.classList.add("detail__gallary-button-map-mapButtonclick");
    gallaryButton.classList.add("detail__gallary-button-gallary-mapButtonclick");
})

gallaryButton.addEventListener('click',()=>{
    gallaryCamera.classList.remove("detail__gallary-camera-gallary-mapButtonclick");
    mapCamera.classList.remove("detail__gallary-camera-map-mapButtonclick");
    mapButton.classList.remove("detail__gallary-button-map-mapButtonclick");
    gallaryButton.classList.remove("detail__gallary-button-gallary-mapButtonclick");
})