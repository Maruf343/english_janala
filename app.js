function loadCategories(){
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((data)=>displayData(data.data));
}
function loadWords(){
    fetch("https://openapi.programming-hero.com/api/words/all")
    .then((response)=>response.json())
    .then((data)=>displayWords(data.data));
}

function displayData(datas){
    // console.log(datas)
    const btnContainer = document.getElementById("btn-container");
    for(let btn of datas){
        // console.log(btn);
        const newBtn = document.createElement("div");
        newBtn.innerHTML= `
        <button class="btn mr-3 btn-outline btn-primary">${btn.lessonName}</button>
        `;
        btnContainer.appendChild(newBtn);
    }
}
// {
//     "id": 1,
//     "level": 3,
//     "word": "Abundant",
//     "meaning": null,
//     "pronunciation": "অবানডান্ট"
// }
// {
// id: 168, 
// level: 6, 
// word: 'Tantamount',
//  meaning: 'সমান পরিমাণ', 
// pronunciation: 'ট্যান্টামাউন্ট'}////.kiy5rddddddddddddddddddddcd

const displayWords=(datas)=>{
    // console.log(datas);
    const wordContainer = document.getElementById("word-container");
    datas.forEach((data)=>{
        console.log(data);
        const videoCard = document.createElement("div");
        videoCard.innerHTML= `
        <div class="card bg-white w-96">
        <div class="card-body items-center text-center px-5">
          <h2 class="card-title">${data.word}</h2>
          <p>Meaning / Pronounciation</p>
          <p>"${data.meaning} / ${data.pronunciation}"</p>
          <div class="flex justify-between">
            <div>
            <i class="fa-solid fa-circle-info"></i></div>
            <div><i class="fa-solid fa-volume-high"></i></div>
          </div>
          
          <div class="card-actions justify-end">
          
          </div>
        </div>
      </div>
        `;
        wordContainer.appendChild(videoCard);
        
    })
}

loadCategories();
loadWords();