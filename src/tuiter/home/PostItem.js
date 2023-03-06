const PostItem = (
    {
        post = {
            "handle": "elonmusk",
            "userName": "Elon Musk",
            "tuit": "Amazing show about @Inspiration4x mission!",
            "time": "23h",
            "link": "netflix.com",
            "contentimage": "../images/helmet.png",
            "dpimage": "../images/elondp.png",
            "linktitle": "Watch Countdown: Inspiration4 Mission to Space | Netflix Official Site",
            "linktext": "From training to launch to landing, this all-access docuseries rides along with the Inspiration4 crew on the first all-civilian orbital space mission.",
            "comments": "4.2K",
            "retuits": "3.5K",
            "likes": "37.5"
        }
    }
) =>
{
    console.log(post)

    return (

            <div class="wd-post">
                {console.log("INDEX",post)}
            <img class="wd-avatar-image" src={post.dpimage}/>
            <div class="wd-left-padding">
                <div>
                    <div class="wd-author-name">
                        <span> {post.userName} </span>
                        <i class="fa-solid fa-circle-check"></i>
                        <span class="wd-author-handle">@{post.handle} · {post.time}</span>
                        <span class="wd-three-dots"> <i class="fa-solid fa-ellipsis"></i> </span>
                    </div>
                </div>
            <div>
                <div class="wd-main-content">{post.tuit}</div>
            </div>
            <div class="wd-image-text">
                {console.log(post.linktext)}
                <img class={post.linktext.length>0 || post.linktext.length>0 ? 'wd-content-top-corner-image': 'wd-content-all-corners-image'} src={post.contentimage}/>
                <div class={post.linktitle.length>0 && post.linktext.length>0? 'wd-second-content-title  ps-3 pt-3': 'wd-second-content-title '}> {post.linktitle}</div>
            <div class={post.linktitle.length>0 && post.linktext.length>0? 'wd-second-content-text  ps-3 ': ''}>{post.linktext}</div>
                <div class={post.link.length>0? 'ps-3 ': ''}>
                    <i class={post.link.length>0? 'fa-solid fa-link': ''}></i> {post.link}
                </div>
            </div>
        <nav>
            <a href="" class="wd-icon-gray">
                <i class="bi bi-chat"></i>
                <span class="wd-text">{post.comments}</span>
            </a>
            <a href="" class="wd-icon-gray">
                <i class="bi bi-arrow-repeat"></i>
                <span class="wd-text">{post.retuits}</span>
            </a>
            <a class="wd-icon-gray">
                <i class="bi bi-heart"></i>
                <span class="wd-text">{post.likes}</span>
            </a>
            <a href="" class="wd-icon-gray">
                <i class="bi bi-arrow-bar-up"></i>
                <span class="wd-text"></span>
            </a>
        </nav>
        </div>
        </div>
        );
}
export default PostItem;


