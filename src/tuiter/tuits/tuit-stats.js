import {useState} from "react";
import {useDispatch} from "react-redux";
import {updateTuitThunk} from "../../services/tuits-thunks";

const TuitStats = (
    {
        tuit = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "../../images/spacex.png",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"

        }
    }
) =>{
    const [likes, setLikes] = useState(tuit.likes)
    const [liked, setLiked] = useState(tuit.liked)
    const dispatch = useDispatch()
    const UpdateLikes =() =>{
        if(liked){
            dispatch(updateTuitThunk({
                ...tuit,
                likes: tuit.likes - 1
            }))
            setLikes(likes-1);
        }
        else{
            dispatch(updateTuitThunk({
                ...tuit,
                likes: tuit.likes + 1
            }))
            setLikes(likes+1);
        }
        setLiked(!liked)
    }
    return (
        <nav>
            <a href="" className="wd-icon-gray">
                <i className="bi bi-chat"></i>
                <span className="wd-text">{tuit.replies}</span>
            </a>
            <a href="" className="wd-icon-gray">
                <i className="bi bi-arrow-repeat"></i>
                <span className="wd-text">{tuit.retuits}</span>
            </a>
            <a className="wd-icon-gray">
                <i className= {liked? "bi bi-heart-fill text-danger":"bi bi-heart"} onClick={UpdateLikes}></i>
                <span className="wd-text">{likes}</span>
            </a>
            <a href="" className="wd-icon-gray">
                <i className="bi bi-arrow-bar-up"></i>
                <span className="wd-text"></span>
            </a>
        </nav>
    );

}

export default TuitStats