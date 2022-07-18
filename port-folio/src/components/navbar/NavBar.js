import React from 'react'
import './NavBar.css'


const NavBar = ({isScrolling}) => {
  return (
    <nav className={`navbar ${isScrolling > 120 ? 'scrolling' : null}`}>
            <div className='container'>
              <div className='wraper'>
                  <div className='logo-container'>
                    <p>Julian</p>
                    <p>Almada</p>
                  </div>

                  <ul className='menu'>
                    <i className='item'>
                      <a className='item-link'>
                        <span className='icon'><ion-icon name="home-outline"></ion-icon></span>
                        <span className='title'>Home</span>
                      </a>
                    </i>

                    <i className='item'>
                      <a className='item-link'>
                        <span className='icon'><ion-icon name="person-outline"></ion-icon></span>
                        <span className='title'>About</span>
                      </a>
                    </i>

                    <i className='item'>
                      <a className='item-link'>
                        <span><ion-icon name="code-slash-outline"></ion-icon></span>
                        <span className='title'>Proyects</span>
                      </a>
                    </i>

                    <i className='item'>
                      <a className='item-link'>
                        <span className='icon'><a className='item-link'><ion-icon name="information-circle-outline">
                        </ion-icon></a></span>
                        <span className='title'>Info</span>
                      </a>
                    </i>

                    <i className='item'>
                      <a className='item-link'>
                        <span><ion-icon name="chatbox-outline">
                        </ion-icon></span>
                        <span className='title'>Contact</span>
                      </a>
                    </i>
                    
                    <i className='item'>
                      <a className='item-link'>
                        <span><ion-icon name="settings-outline">
                        </ion-icon></span>
                        <span className='title'>Settings</span>
                      </a>
                    </i>

                    

                    
                  </ul>

                  
              </div>
            </div>

            

    </nav>
  )
}

export default NavBar