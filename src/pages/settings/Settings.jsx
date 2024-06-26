import "./setting.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span> 
          <span className="settingsDeleteTitle">Delete Account</span> 
        </div>
        <form className="settingsForm">
            <label>Profile Picture</label>
              <div className="settingsPP">
                <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                 alt=""/>
          <label htmlFor="fileInput">
             <i className="settingsPPIcon fa-solid fa-user"></i>
          </label>
          <input type="file" id="fileInput" style={{display:"none"}}/>
              </div>
              <label htmlFor="">Username</label>
             <input type="text" placeholder="Ankit" />
             <label htmlFor="">Email</label>
             <input type="email" placeholder="ankit@gmail.com" />
             <label htmlFor="">Password</label>
             <input type="password" />
             <button className="settingsSubmit" type="submit">Update</button>

        </form>
      </div>
      <Sidebar />
    </div>
  )
}
