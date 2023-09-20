import React from 'react'
import './Footer.css'
function Footer() {
    return (
        <div className='footerExplain'>
            <div className='footerJoongbu'>    
                <div>
                    중부대학교 정보보호학전공
                </div>
                <div>
                    copyright 2023 한번해보조 Co. All rights reserved.
                </div>
            </div>

            <div>
                <img className="footerJOONGBUImg" src="image/중부대.png" alt='중부대로고' />            
            </div>
        </div>
    )
}

export default Footer
