const showLoader=()=>{
  document.getElementById("loader").classList.remove("hidden");
  document.getElementById("word-container").classList.add("hidden");

}

function removeActiveClass(){
  const activeButtons = document.getElementsByClassName("active");
  for(let btn of activeButtons){
    btn.classList.remove("active");
  }
}

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
const loadCategoryWords=(id)=>{
  const url = `https://openapi.programming-hero.com/api/level/${id}`;
  console.log(url);
  fetch(url)
  .then((res)=>res.json())
  .then(data=>{
    removeActiveClass()
    const clickedButton = document.getElementById(`btn-${id}`);
    clickedButton.classList.add("active");
    // console.log(clickedButton)
    displayWords(data.data)
  })
}
const loardWordsDetails=(wordsId)=>{
  console.log(wordsId);
  const url= `https://openapi.programming-hero.com/api/word/${wordsId}`
  fetch(url)
  .then((res)=> res.json())
  .then((data)=>displayWordsDetails(data))
}
const displayWordsDetails=(word)=>{
  console.log(word);
  document.getElementById("word_details").showModal();
  const detailsContainer = document.getElementById("details-container");

  const synonymsHtml = word.data.synonyms && word.data.synonyms.length > 0
    ? word.data.synonyms.map(synonym => `<span class="synonym-tag">${synonym}</span>`).join(" ")
    : "কোন সমার্থক শব্দ পাওয়া যায়নি";

  detailsContainer.innerHTML=`
  <div class="card bg-base-100 shadow-sm">
  <div class="card-body">
    <h2 class="card-title font-bold">${word.data.word}( ${word.data.pronunciation})</h2>
    <h3 class="font-bold">Meaning</h3>
    <p>${word.data.meaning}</p>
    <h2 class="font-bold">Example</h2>
    <p>${word.data.sentence}</p>
    <h4 class="font-bold mt-3">সমার্থক শব্দ গুলো</h4>
    <p>${synonymsHtml}</p>
  </div>
</div>
  `
}
function displayData(datas){
    // console.log(datas)
    const btnContainer = document.getElementById("btn-container");
    for(let btn of datas){
        // console.log(btn);
        const newBtn = document.createElement("div");
        newBtn.innerHTML= `
        <button id="btn-${btn.level_no}" onclick="loadCategoryWords(${btn.level_no})" class="btn mr-3 btn-outline btn-primary">${btn.lessonName}</button>
        `;
        btnContainer.appendChild(newBtn);
    }
}

const displayWords=(datas)=>{
    const wordContainer = document.getElementById("word-container");
    wordContainer.innerHTML="";

    if(datas.length == 0){
      wordContainer.innerHTML=`
      <div class="col-span-full flex flex-col justify-center items-center text-center">
                <img class="w-[120px]" src="assets/alert-error.png" alt="">
                <p class="text-[#9CA2A7]">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
                <h3 class="text-2xl mt-5 font-medium">নেক্সট Lesson এ যান</h3>
              </div>
      `
    }

    datas.forEach((data)=>{
        // console.log(data);
        const videoCard = document.createElement("div");
        videoCard.innerHTML= `
        <div class="card bg-white text-center">
          <div class="card-body items-center text-center px-5">
            <h2 class="card-title">${data.word}</h2>
            <p>Meaning / Pronounciation</p>
            <p>"${data.meaning} / ${data.pronunciation}"</p>
            <div class="flex justify-between">
              <i onclick=loardWordsDetails(${data.id}) class="fa-solid fa-circle-info mr-20 cursor-pointer"></i>
              <i class="fa-solid fa-volume-high ml-20"></i>
            </div>
          </div>
        </div>
        `;
        wordContainer.appendChild(videoCard);
        
    })
}

loadCategories();
// loadWords();