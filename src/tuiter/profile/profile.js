import {useSelector} from "react-redux";
import {useNavigate} from "react-router";

const Profile = () =>{
    const profileInfo = useSelector(state => state.profile)
    const nav = useNavigate();
    return (
            <div>
                <div className="row align-items-center pb-1">
                    <i className="col-1 ms-2 bi bi-arrow-left" onClick= {() => nav("/tuiter/home")} ></i>
                    <h4 className="col-9 float-left">{profileInfo.firstName} {profileInfo.lastName}</h4>
                </div>
                <div className="banner mb-4">
                    <img className="profile" src={profileInfo.profilePicture}/>
                    <button className="edit float-right btn btn-outline-dark rounded-pill" onClick={()=> nav("/tuiter/edit-profile")}><b>Edit
                        Profile</b>
                    </button>
                </div>
                <div className="mt-5 pt-4  ps-4 infoSection">
                <div style={{fontSize: "20px"}} className="fw-bold"> {profileInfo.firstName} {profileInfo.lastName}</div>
                <div className="text-secondary"> {profileInfo.handle}</div>
                <div className="mt-2">{profileInfo.bio}<a href={profileInfo.website}> {profileInfo.website} </a>
                </div>
                <div className="row mt-2 text-secondary">
                    <div className="col-4"><i className="bi bi-geo-alt "> Location : </i> {profileInfo.location}
                    </div>
                    <div className="col-4"><i className="bi bi-balloon "> Birth : </i> {profileInfo.dateOfBirth}
                    </div>
                    <div className="col-4"><i className="bi bi-calendar3 "> Joined
                        : </i> {profileInfo.dateJoined}</div>
                </div>
                <div className="row pt-2">
                    <div className="col-3"><b clas>{profileInfo.followersCount}</b><span className="text-secondary"> Followers </span></div>
                    <div className="col-3"><b>{profileInfo.followingCount}</b><span className="text-secondary">  Following</span></div>
                </div>
                </div>
            </div>

    )

}

export default Profile