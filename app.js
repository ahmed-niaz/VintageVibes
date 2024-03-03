const post = async () => {
  try {
    const resp = await fetch(
      `https://openapi.programming-hero.com/api/retro-forum/posts`
    );
    const data = await resp.json();
    const reviews = data.posts;
    // console.log(reviews);
    displayPost(reviews);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

const displayPost = (reviews) => {
  const informationCard = document.getElementById(`information-card`);
  // console.log(reviews);
  reviews.forEach((review) => {
    console.log(review);
    const cardContainer = document.createElement(`div`);
    cardContainer.innerHTML = `
        <div class="card bg-[#F3F3F5] mb-5">
              <div class="card-body" >
                <div class="flex">
                  <div class="basis-1/5">
                    <div class="avatar online">
                      <div class="w-24 rounded-full">
                        <img
                          src="${review.image}"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="basis-4/5">
                    <div class="flex">
                      <p>#${review.category}</p>
                      <p>Author:${review.author.name}</p>
                    </div>
                    <h4 class="mt-4 font-extrabold">${review.title}</h4>
                    <h6 class="mt-2">
                      ${review.description}
                    </h6>
                    <p class="border-t-2 border-dashed w-full border-[#12132D40] mt-2"></p>
                    <div class="flex justify-between mt-6">
                      <div class="flex gap-16">
                        <div class="flex gap-4">
                          <img src="./assets/icons/text.svg" alt="Text" />
                          <p>${review.comment_count}</p>
                        </div>
                        <div class="flex gap-4">
                          <img src="./assets/icons/watch.svg" alt="watch" />
                          <p>${review.view_count}</p>
                        </div>
                        <div class="flex gap-4">
                          <img src="./assets/icons/time.svg" alt="time" />
                          <p>${review.posted_time}min</p>
                        </div>
                      </div>
                      <div>
                        <img src="./assets/icons/mail-box.svg" alt="" />
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

post();
