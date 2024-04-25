import "./singlepost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt="" 
          className="singlePostImg"

        />
        <h1 className="singlePostTitle">
            Lorem ipsum dolor sit amet.
            <div className="singlePostEdit"><i className="singlePostIcon fa-solid fa-pen-to-square"></i>
            <i className=" singlePostIcon  fa-solid fa-trash"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>Ankit</b></span>
            <span className="singlePostDate">1hr ago</span>
        </div>
        <p className="singlePostDesc">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.this is random txt for demo
             Unde quam voluptatem incidunt molestias. Nihil recusandae animi fugiat, eum soluta 
             doloremque beatae nisi similique commodi rerum cumque , praesentium at temporibus.
             Lorem ipsum dolor sit amet, consectetur adipisicing elit.this is random txt for demo
             Unde quam voluptatem incidunt molestias. Nihil recusandae animi fugiat, eum soluta 
             doloremque beatae nisi similique commodi rerum cumque , praesentium at temporibus.
             Lorem ipsum dolor sit amet, consectetur adipisicing elit.this is random txt for demo
             Unde quam voluptatem incidunt molestias. Nihil recusandae animi fugiat, eum soluta 
             doloremque beatae nisi similique commodi rerum cumque , praesentium at temporibus.
             </p>
      </div>
    </div>
  )
}
