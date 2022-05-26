import React from 'react';
import { Link } from "react-router-dom";

function Home() {


  const styles = {
      homeLayout: {
        margin:30
      },
      homeText: {
        textAlign:'center'
      }
    
  }

  return (
      <>
        <div style={styles.homeLayout}>
          <h2 style={styles.homeText}>
          Coming soon
          </h2>
          <Link to="/profile">Go to Profile</Link>
          </div>
        
    </>
  )
}


export default Home