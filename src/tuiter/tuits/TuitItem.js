import TuitStats from "./tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "./tuits-reducer";
const TuitItem = (
    {
        tuit = {
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
    console.log(tuit)
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        console.log("Reached")
        dispatch(deleteTuit(id));
    }


    return (
        <>
        <div class="wd-post">
            <img class="col-1 wd-avatar-image" src={tuit.image}/>
            <div class="col-11 ps-2">
                <div>
                    <i className="bi bi-x-lg float-end float-right"
                       onClick={() => deleteTuitHandler(tuit._id)}></i>
                    <div class=" wd-author-name">
                        <span> {tuit.userName} </span>
                        <i className="ps-2 pe-2 bi bi-patch-check-fill text-primary"></i>
                        <span class="wd-author-handle">{tuit.handle} · {tuit.time}</span>
                    </div>
                </div>

                <div>
                    <div class="wd-main-content">{tuit.tuit}</div>
                </div>
              <TuitStats tuit={tuit}/>
            </div>

        </div>
            <hr/>
        </>

    );
}
export default TuitItem;


