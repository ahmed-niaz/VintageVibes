const post = async () => {
  try {
    const resp = await fetch(
      `https://openapi.programming-hero.com/api/retro-forum/posts`
    );
    const data = await resp.json();
    const reviews = data.posts;
    //  console.log(reviews);
    displayPost(reviews);
    markAsRead(reviews);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const displayPost = (reviews) => {
  const informationCard = document.getElementById(`information-card`);
  // console.log(reviews);
  reviews.forEach((review) => {
    // console.log(review);
    const cardContainer = document.createElement(`div`);
    cardContainer.innerHTML = `
        <div class="card bg-[#F3F3F5] mb-5">
              <div class="card-body" >
                <div class="flex flex-col lg:flex-row justify-center items-center
                ">
                  <div class="basis-1/5 px-6">
                    <div class="avatar ${review.isActive ? 'online': 'offline'}">
                      <div class="w-24 rounded-2xl">
                        <img
                          src="${review.image}"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="basis-4/5">
                    <div class="flex">
                      <p class="font-bold">#${review.category}</p>
                      <p class="font-bold">Author:${review.author.name}</p>
                    </div>
                    <h4 class="mt-4 font-extrabold ">${review.title}</h4>
                    <h6 class="mt-2">
                      ${review.description}
                    </h6>
                    <p class="border-t-2 border-dashed w-full border-[#12132D40] mt-2"></p>
                    <div class="flex justify-between mt-6">
                      <div class="flex gap-16">
                        <div class="flex gap-4 items-center flex-col lg:flex-row">
                          <img src="./assets/icons/text.svg" alt="Text" />
                          <p>${review.comment_count}</p>
                        </div>
                        <div class="flex gap-4 items-center flex-col lg:flex-row">
                          <img src="./assets/icons/watch.svg" alt="watch" />
                          <p>${review.view_count}</p>
                        </div>
                        <div class="flex gap-4 items-center flex-col lg:flex-row">
                          <img src="./assets/icons/time.svg" alt="time" />
                          <p>${review.posted_time}min</p>
                        </div>
                      </div>
                      <div>
                      <button onclick="markAsRead()" id='markAsBtn'>
                      <img src="./assets/icons/mail-box.svg" alt="" />
                      </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        `;
    informationCard.appendChild(cardContainer);
  });
  
};


const markAsRead = (reviews) =>{
  const markAsReadContainer = document.getElementById(`mark-as-read`);
  reviews.forEach(review => {
    // console.log(review);
    const markAsReadDynamic = document.createElement(`div`);
    markAsReadDynamic.innerHTML = `
      <div class="card bg-white text-black mb-8">
        <div class="card-body">
          <div class="flex justify-between items-center">
            <div>
              <h2 class='font-bold'>${review.title}</h2>
            </div>
            <div class="flex gap-6 flex-col lg:flex-row">
              <img src="./assets/icons/watch.svg" alt="watch" />
              <p>${review.view_count}</p>
            </div>
          </div>
        </div>
      </div>
    `;
    markAsReadContainer.appendChild(markAsReadDynamic);
  });
}


const latestPost = async () => {
  try {
    const resp = await fetch(
      `https://openapi.programming-hero.com/api/retro-forum/latest-posts`
    );
    const data = await resp.json();
    const profiles = data;
    //  console.log(profiles);
    displayLatestPost(profiles);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const displayLatestPost = (profiles) => {
  const latestPostCard = document.getElementById(`latest-post`);
  profiles.forEach((profile) => {
    console.log(profile);
    const latestPostContainer = document.createElement(`div`);
    latestPostContainer.innerHTML = `
    <div class="card w-full bg-base-100 shadow-xl pb-5">
            <figure class="px-10 pt-10">
              <img
                src="${profile.cover_image}"
                class="rounded-xl"
              />
            </figure>
            <div class="flex gap-4 pl-10 mt-4">
              <img src="./assets/icons/calendar.svg" alt="calendar" />
              <p>${profile.author.posted_date || "No publish Date"}</p>
            </div>
            <h2 class="pl-4 lg:pl-10 w-full lg:w-3/4 mt-4 font-extrabold">
             ${profile.title}
            </h2>
            <p class=" lg:pl-10 w-11/12 mt-4 mx-auto lg:mx-0">
              ${profile.description}
            </p>
            <div class="pl-10 flex gap-4 mt-8 lg:mt-4">
              <div class="avatar">
                <div
                  class="w-12 rounded-full"
                >
                  <img
                    src="${profile.profile_image}"
                  />
                </div>
              </div>
              <div >
                <h2 class="font-extrabold">${profile.author.name}</h2>
                <h4>${profile.author.designation  || "unknown"}</h4>
              </div>
            </div>
          </div>
    `;
    latestPostCard.appendChild(latestPostContainer);
  });
};

post();
latestPost();

