import PostItem from "./PostItem";
import postArray from "./Homeposts.json"
import "./index.css"

import React from "react";
const HomeComponent = () => {
    console.log("Recahed home")
    return(
      <ul className="list-group">
            {
                postArray.map((post, id) =>

                    <PostItem
                        key={id} post={post}/> )
            }
        </ul>
   );

}




export default HomeComponent;