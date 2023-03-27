import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";
import {useForm} from "react-hook-form";
import {updateProfile} from "../profile/profile-reducer";
import "./index.css"
const EditProfile = () =>{
    const profileInfo = useSelector(state => state.profile)
    const dispatch = useDispatch()
    const nav = useNavigate()
    const {register, handleSubmit} =useForm({defaultValues:profileInfo});
    const onSubmit = (e) =>{
        dispatch(updateProfile(e));
        nav("/tuiter/profile")

    }

    return (
        <div>
            <div className="row align-items-center">
                <i className="col-1 bi bi-x-lg" onClick={()=>nav("/tuiter/profile")}></i>
                <h4 className="col-9 float-left m-0">Edit Profile</h4>
                <button className="col-2 btn btn-dark rounded-pill float-end" onClick={handleSubmit(onSubmit)}> Save
                </button>
            </div>
            <div className="mt-3 banner">

                <img className="profile" src={profileInfo.profilePicture}/>
            </div>
            <form className="mt-5 pt-4">
                <div className="m-2 p-2" style={{border: "1px solid "}}>
                    <label className="ps-3 row label" htmlFor="First Name">First Name</label>
                    <input  className="ps-2 input" id="firstName" component="input" type="text"
                            {...register("firstName")} />
                </div>
                <div className="m-2 p-2" style={{border: "1px solid "}}>
                    <label className="ps-3 row label" htmlFor="Last Name">Last Name</label>
                    <input  className="ps-2 input" id="lastName" component="input" type="text"
                            {...register("lastName")} />
                </div>
                <div className="m-2 p-2" style={{border: "1px solid "}}>
                    <label className="ps-3 row label" htmlFor="Bio">Bio</label>
                    <input  className="ps-2 input" id="bio" component="input" type="text"
                            {...register("bio")} />
                </div>
                <div className="m-2 p-2" style={{border: "1px solid "}}>
                    <label className="ps-3 row label" htmlFor="Website">Website</label>
                    <input  className="ps-2 input" id="website" component="input" type="text"
                            {...register("website")} />
                </div>
                <div className="m-2 p-2" style={{border: "1px solid "}}>
                    <label className="ps-3 row label" htmlFor="Location">Location</label>
                    <input  className="ps-2 input" id="location" component="input" type="text"
                            {...register("location")} />
                </div>

            </form>
        </div>


    );
}

export default EditProfile