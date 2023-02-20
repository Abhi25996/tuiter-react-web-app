const PostSummaryItem = (post) => {
    return (`            
            <div class="list-group-item">
                    <img class="wd-image" src="${post.image}">
                    <div class="wd-light-topic">  ${post.topic}</div>
                    <div >
                        <span class="wd-bold-topic"> ${post.userName} <i class=" fa-solid fa-circle-check"></i> </span>
                        <span class="wd-light-topic">- ${post.time}</span>
                    </div>
                    <div class="wd-bold-topic">${post.title}</div>
                </div>
    `);
}
export default PostSummaryItem;