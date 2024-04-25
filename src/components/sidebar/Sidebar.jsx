import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className='sidebarall'>
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
        />

        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
            Eaque fugit minima veritatis corrupti placeat officia ratione, ad culpa amet aliquid repellendus, pariatur, laboriosam officiis totam nisi saepe eos error necessitatibus.</p>
      </div>
      <div className="sidebarItems">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
      <div className="sidebarSocial">
        <i className="sidebarIcon fa-brands fa-square-facebook"></i>
        <i className="sidebarIcon fa-brands fa-square-instagram"></i>
        <i className="sidebarIcon fa-brands fa-github"></i>
      </div>
      </div>
    </div>
  )
}
