import image from "../../image/image.webp"


const studStyle={
       backgroundColor:'red', color:'white',
       marginLeft:'30', marginRight:'10',padding:'10px' , borderRadius:"10",border:'5px solid black'
}


function Student1(props){
  return (
       <div style={{display:'flex'}}>

              {/* <img src={image}width={320} height={320} 
            style={{borderRadius:'50%'}}/> */}

             <img src="https://wallpapers.com/images/hd/cool-profile-picture-ld8f4n1qemczkrig.jpg"  width={320} height={320} 
            style={{borderRadius:'50%'}}/>
            

              <div style={{padding:'2rem'}}>
                     <h2 style={studStyle}>Name :{props.name}</h2>
                     <h2 style={studStyle}>Roll no :{props.Rollno}</h2>
                     <h2 style={studStyle}>Course:{props.course}</h2>
                     <h2 style={studStyle}>Fee :{props.fees}</h2>
                     <h2 style={studStyle}>Mob :{props.contact}</h2>
              </div>


       </div>

       

       )
}

export default Student1