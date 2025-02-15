console.log("Hi JavaScript");

const tagBasedCollection = document.getElementsByTagName('li');
// console.log(tagBasedCollection);

for(const tag of tagBasedCollection){
    // console.log(tag);  
    // console.log(tag.innerText);  
    // console.log(tag.innerHTML);
}


const placesFinds = document.getElementsByClassName('places-find');
// console.log(placesFinds);

for(const place of placesFinds){
    // console.log(place);
}

const onlyPlaceFind = document.getElementById('food1')
console.log(onlyPlaceFind);
console.log(onlyPlaceFind.innerText);