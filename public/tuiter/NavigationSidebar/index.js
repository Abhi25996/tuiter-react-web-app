
const NavigationSidebar = (active) => {

    return (`
   <div id = "sidebar" class=" list-group">
     <a class="list-group-item" href="/public"><i class="fab fa-twitter"></i></a>
     <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action d-none d-xl-block ${active == 'home' ? 'active' : ''}"><i class="fa-solid fa-house-chimney"></i> Home</a>
     <a href="../exploreScreen/index.html" class="list-group-item list-group-item-action d-none d-xl-block ${active == 'explore' ? 'active' : ''}"> <i class="fa-solid fa-hashtag"></i> Explore</a>
     <a  class="list-group-item list-group-item-action d-none d-xl-block ${active == 'notification' ? 'active' : ''}"> <i class="fa-solid fa-bell"></i> Notifications</a>
     <a  class="list-group-item list-group-item-action d-none d-xl-block ${active == 'message' ? 'active' : ''}" > <i class="fa-solid fa-envelope"></i> Messages</a>

     <a  class="list-group-item list-group-item-action d-none d-xl-block ${active == 'bookmark' ? 'active' : ''}" tabindex="-1" > <i class="fa-solid fa-bookmark"></i> Bookmarks</a>

     <a  class="list-group-item list-group-item-action d-none d-xl-block ${active == 'list' ? 'active' : ''}" tabindex="-1" > <i class="fa-solid fa-list"></i> Lists</a>

     <a  class="list-group-item list-group-item-action d-none d-xl-block ${active == 'profile' ? 'active' : ''}" tabindex="-1" > <i class="fa-solid fa-user"></i> Profile</a>

     <a  class="list-group-item list-group-item-action d-none d-xl-block ${active == 'more' ? 'active' : ''}" tabindex="-1" > <i class=" fa-solid fa-ellipsis-h"></i> More</a>
            
            
             
    <a href="../HomeScreen/index.html" class="list-group-item list-group-item-action border-bottom-0 d-block d-xl-none ${active == 'home' ? 'active' : ''}"><i
            class="fa-solid  fa-house-chimney"></i> </a>
    <a href="../exploreScreen/index.html" class="list-group-item list-group-item-action border-bottom-0 fw-bold d-block d-xl-none ${active == 'explore' ? 'active' : ''}"> <i
            class="fa-solid fa-hashtag"></i> </a>
    <a class="list-group-item list-group-item-action border-bottom-0  d-block d-xl-none ${active == 'notification' ? 'active' : ''}"> <i
            class="fa-regular fa-bell"></i> </a>
    <a class="list-group-item list-group-item-action  border-bottom-0  d-block d-xl-none ${active == 'message' ? 'active' : ''}"> <i
            class="fa-regular fa-envelope"></i> </a>
    <a class="list-group-item list-group-item-action border-bottom-0  d-block d-xl-none ${active == 'bookmark' ? 'active' : ''}" tabindex="-1"> <i
            class="fa-regular fa-bookmark"></i> </a>
    <a class="list-group-item list-group-item-action border-bottom-0 d-block d-xl-none ${active == 'list' ? 'active' : ''}" tabindex="-1"> <i
            class="fa-solid fa-fire"></i> </a>
    <a class="list-group-item list-group-item-action border-bottom-0 d-block d-xl-none ${active == 'profile' ? 'active' : ''}" tabindex="-1"> <i
            class="fa-regular fa-user"></i> </a>
    <a class="list-group-item list-group-item-action border-bottom-0 d-block d-xl-none ${active == 'more' ? 'active' : ''}" tabindex="-1"> <i
            class=" fa-solid fa-ellipsis-h"></i> </a>

      
      
      
      
      
      
      
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);

}
export default NavigationSidebar;