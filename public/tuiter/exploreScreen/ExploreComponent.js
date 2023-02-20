import PostSummaryList
    from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
            <div class="row">
                       <!-- search field and cog -->
                       <div class="col-11 ps-2" >
                <div class="form-group has-search" >
                    <span class="fa fa-search form-control-feedback"></span>
                    <input type="text" class="form-control" placeholder="Search Twitter">
                </div>
            </div>
            <div class="col-1">
                <a href="explore-settings.html"><i class="fa fa-gear fa-2x"></i></a>
            </div>
           </div>
           <ul class="nav mb-2 nav-tabs">
                      <!-- tabs -->
                      <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For You</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.htm">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="entertainment.html">Entertainment</a>
                </li>
           </ul>
           <!-- image with overlaid text -->
           <div>
            <div class="wd-image-container">
                <img src="../images/starship.png" alt="starship" style="width:100%;">
                <div class="wd-bottom-left">SpaceX's Starship</div>
            </div>
        </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
