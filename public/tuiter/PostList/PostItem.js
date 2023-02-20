const PostItem = (post) => {
    return (`            
            <div class="wd-post">
    <img class="wd-avatar-image" src="${post.dpimage}">
    <div class="wd-left-padding">
        <div>
            <div class="wd-author-name">
                <span> ${post.userName} </span>
                <i class="fa-solid fa-circle-check"></i>
                <span class="wd-author-handle">@${post.handle} · ${post.time}</span>
                <span class="wd-three-dots"> <i class="fa-solid fa-ellipsis"></i> </span>
            </div>
        </div>
        <div>
        <div class="wd-main-content">
            ${post.tuit}
        </div>
        </div>
        <div class="wd-image-text">
            <img class=" ${(post.linktitle.length>0 || post.linktext.length>0) ? 'wd-content-top-corner-image': 'wd-content-all-corners-image'}" src="${post.contentimage}">

            <div class="wd-second-content-title ${post.linktitle.length>0 && post.linktext.length>0>0? 'ps-3 pt-3': ''}">
                ${post.linktitle}
            </div>
            <div class="wd-second-content-text ${post.linktitle.length>0 && post.linktext.length>0? 'ps-3 ': ''}"">
                ${post.linktext} 
            </div>
                <div class="${post.link.length>0? 'ps-3 ': ''}">
                <i class="${post.link.length>0? 'fa-solid fa-link': ''}"></i>
                ${post.link} 
                </div>
            
            
        </div>
        <nav>
            <a href="" class="wd-icon-gray">
                <i class="fa-regular fa-comment"></i>
                <span class="wd-text">${post.comments}</span>
            </a>
            <a href="" class="wd-icon-gray">
                <i class="fa-solid fa-retweet"></i>
                <span class="wd-text">${post.retuits}</span>
            </a>
            <a>
                <i class="fa-regular fa-heart"></i>
                <span class="wd-text">${post.likes}</span>
            </a>
            <a href="" class="wd-icon-gray">
                <i class="fa-solid fa-arrow-up-from-bracket"></i>
                <span class="wd-text"></span>
            </a>

        </nav>




    </div>
</div>
    `);
}
export default PostItem;