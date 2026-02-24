function Navbar({goLogin}){

return(

<div style={styles.nav}>

<h2>LuxeStay</h2>

<div>

<button onClick={goLogin}>
Se connecter
</button>

</div>

</div>

)

}

const styles={

nav:{
display:"flex",
justifyContent:"space-between",
padding:"20px",
background:"#eee"
}

}

export default Navbar;