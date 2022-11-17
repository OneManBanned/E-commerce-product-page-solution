import React from "react";

export default function Lightbox(props) {

    return (<>

        <div className={props.lightboxIsOpen ? 'lightbox lightbox-open' : 'lightbox'}>
            <button className='lightbox__btn' onClick={() => props.setLightboxIsOpen(false)}><svg viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fillRule="evenodd" /></svg></button>
            <div className='lightbox__large'>
                <img className="lightbox__large-productImg" src={props.sneakerPics[props.lightboxCount]} alt="Fall limited edition sneaker" />
                <div className="lightbox__nextAndPrev lightbox__prev"><button onClick={() => props.prevPic()}><svg viewBox="0 0 12 18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" /></svg></button></div>
                <div className="lightbox__nextAndPrev lightbox__next"><button onClick={() => props.nextPic()}><svg viewBox="0 0 13 18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd" /></svg></button></div>
            </div>
            <div className='lightbox__small'>
                <div className={props.sneakerPics[props.lightboxCount] !== props.sneakerPics[0] ? "lightbox__small-overlay" : "lightbox__small-current"} onClick={() => props.setLightboxCount(0)}><img src={props.sneakerPics[0]} alt="Fall limited edition sneaker" /></div>
                <div className={props.sneakerPics[props.lightboxCount] !== props.sneakerPics[1] ? "lightbox__small-overlay" : "lightbox__small-current"} onClick={() => props.setLightboxCount(1)}><img src={props.sneakerPics[1]} alt="Fall limited edition sneaker" /></div>
                <div className={props.sneakerPics[props.lightboxCount] !== props.sneakerPics[2] ? "lightbox__small-overlay" : "lightbox__small-current"} onClick={() => props.setLightboxCount(2)}><img src={props.sneakerPics[2]} alt="Fall limited edition sneaker" /></div>
                <div className={props.sneakerPics[props.lightboxCount] !== props.sneakerPics[3] ? "lightbox__small-overlay" : "lightbox__small-current"} onClick={() => props.setLightboxCount(3)}><img src={props.sneakerPics[3]} alt="Fall limited edition sneaker" /></div>
            </div>
        </div>
    </>
    )
}