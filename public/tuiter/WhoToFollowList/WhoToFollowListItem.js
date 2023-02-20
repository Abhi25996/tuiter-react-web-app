

const WhoToFollowListItem = (who) => {
    return (`            
            <li class="list-group-item wd-border-none bg-light">
                <div class="row wd-align-center">
                    <div class="col-2">
                        <img class="wd-round-corners"  src="../images/${who.avatarIcon}"/>
                    </div>
                    <div class="col-6 ps-3">
                        <span class="wd-display-block"><b>${who.userName} <i class="fa fa-circle-check wd-goldenrod"></i></b></span>
                        <span class="wd-display-block wd-handler" >@${who.handle}</span>
                    </div>
                    <div class="col-4">
                        <button href="#" class="btn btn-primary btn-block rounded-pill">Follow</button>
                    </div>
                </div>
            </li>
    `);
}
export default WhoToFollowListItem;


// <li className="list-group-item">
//     <div className="row">
//         <img src="../images/${who.avatarIcon}"
//              className="img-fluid wd-who-to-follow-image rounded-5 col-3 p-0 wd-acc-img"/>
//         <div className="col-6 col-xl-5">
//             <div className="fw-bold">
//                 ${who.userName}
//                 <i className="fa-solid fa-circle-check"></i>
//             </div>
//             <div>
//                 @${who.handle}
//             </div>
//         </div>
//         <div className="col">
//             <button type="button"
//                     className="btn btn-primary btn-sm rounded-pill">
//                 Follow
//             </button>
//         </div>
//     </div>
// </li>
//