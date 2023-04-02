
import "./index.css"

import React, {useEffect} from "react";
import TuitItem from "./TuitItem";
import {findTuitsThunk}
    from "../../services/tuits-thunks";
import {useDispatch, useSelector} from "react-redux";
const TuitList = () => {

    const {tuits, loading} = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

    return(
        <ul className="list-group">
            {
                loading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }

            {
                tuits.map((post, id) =>

                    <TuitItem
                        key={id} tuit={post}/> )
            }
        </ul>
    );

}




export default TuitList;