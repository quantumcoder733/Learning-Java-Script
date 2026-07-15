function formatViews(views){

    if(views >= 1000000){
        return (views/1000000).toFixed(1) + "M";
    }

    else if(views >= 1000){
        return (views/1000).toFixed(0) + "K";
    }

    else{
        return views;
    }

}

function createCard(video){

    let html = `
    <div class="card">

        <img src="${video.thumbnail}">

        <div class="info">
            <h2>${video.title}</h2>

            <div class="meta">
                ${video.channel} •
                ${formatViews(video.views)} views •
                ${video.monthsOld} months ago
            </div>

        </div>

    </div>
    `;

    document.querySelector(".container").innerHTML += html;
}
let videos = [

{
title:"JavaScript",
channel:"CodeWithHarry",
views:727000,
monthsOld:2,
thumbnail:"1.jpg"
},

{
title:"React",
channel:"CodeWithHarry",
views:1400000,
monthsOld:12,
thumbnail:"2.jpg"
},

{
title:"NodeJS",
channel:"CodeWithHarry",
views:420000,
monthsOld:5,
thumbnail:"3.jpg"
}

];
videos.forEach(video => {
    createCard(video);
});

videos.push({
    title:"Python",
    channel:"CodeWithHarry",
    views:500000,
    monthsOld:4,
    thumbnail:"python.jpg"
});
createCard(videos[videos.length - 1]);

videos.push({
    title:"C++",
    channel:"CodeWithHarry",
    views:100000,
    monthsOld:1,
    thumbnail:"c++.jpg"
});
createCard(videos[videos.length - 1]);