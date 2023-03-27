
import "./index.css"

import React from "react";
import TuitItem from "./TuitItem";
import {useSelector} from "react-redux";
const TuitList = () => {
    const tuitArray = useSelector(state => state.tuits)
    return(
        <ul className="list-group">
            {
                tuitArray.map((post, id) =>

                    <TuitItem
                        key={id} tuit={post}/> )
            }
        </ul>
    );

}




export default TuitList;