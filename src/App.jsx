import { useState, useEffect } from 'react'

//styles
import '../dist/css/app.css'

//React component imports
import Lightbox from './components/Lightbox'

//image imports
import avatar from './images/image-avatar.png'
import firstPreview from './images/image-product-1.jpg'
import secondPreview from './images/image-product-2.jpg'
import thirdPreview from './images/image-product-3.jpg'
import fourthPreview from './images/image-product-4.jpg'
import openMenu from './images/icon-menu.svg'
import closeMenu from './images/icon-close.svg'
import logo from './images/logo.svg'
import cart from './images/icon-cart.svg'
import whiteCart from './images/icon-cart-white.svg'
import plusPic from './images/icon-plus.svg'
import minusPic from './images/icon-minus.svg'
import remove from './images/icon-delete.svg'

export default function App() {

  const [navIsOpen, setNavIsOpen] = useState(false)
  const [cartIsOpen, setCartIsOpen] = useState(false)
  const [lightboxIsOpen, setLightboxIsOpen] = useState(false)

  //select amount of item wanted
  const [amount, setAmount] = useState(0)
  //confirm amount and add to basket
  const [confirmAmount, setConfirmAmount] = useState(0)

  //Array of pictures available for preview

  const [sneakerPics, setSneakerPics] = useState([
    firstPreview,
    secondPreview,
    thirdPreview,
    fourthPreview])

  //count variable used for cycling through preview & lightbox pics

  const [lightboxCount, setLightboxCount] = useState(0)
  const [previewCount, setPreviewCount] = useState(0)

  // open lightbox from large preview pic and set 
  // current preview pic to large lightbox pic

  function openLightbox() {
    setLightboxIsOpen(prev => !prev)
    setLightboxCount(previewCount)
  }

  //cycle through lightbox pics

  function nextPic() {
    if (lightboxCount === sneakerPics.length - 1) {
      setLightboxCount(0)
    } else {
      setLightboxCount(prevCount => prevCount + 1)
    }
  }

  function prevPic() {
    if (lightboxCount === 0) {
      setLightboxCount(3)
    } else {
      setLightboxCount(prevCount => prevCount - 1)
    }
  }

  //add and subtract from amount

  function add() {
    setAmount(prev => prev + 1)
  }

  function minus() {
    if (amount > 0) {
      setAmount(prev => prev - 1)
    }
  }

  // confirm amount of item wanted and add to basket (includes items currently in basket)
  function confirm() {
    setConfirmAmount(prevAmount => prevAmount + amount)
    setAmount(0)
  }

  // close cart when nav is opened

  useEffect(() => {
    if (cartIsOpen) {
      setCartIsOpen(prev => !prev)
    }
  }, [navIsOpen])


  return (
    <>
      <div className={navIsOpen ? 'overlay' : ''}>
        <header className='header'>
          <button
            className='header__hamburger'
            onClick={() => setNavIsOpen(prev => !prev)}>
            {navIsOpen ? <img src={closeMenu} alt="close menu" /> : <img src={openMenu} alt="open menu" />}
          </button>
          <a className="header__logo" href="#"><img src={logo} alt="sneakers" /></a>
          <nav className={
            navIsOpen
              ? "header__nav nav nav-open"
              : "header__nav nav"}>
            <ul className="nav__list">
              <li className="nav__list-item"><a href="#">Collections</a></li>
              <li className="nav__list-item"><a href="#">Men</a></li>
              <li className="nav__list-item"><a href="#">Women</a></li>
              <li className="nav__list-item"><a href="#">About</a></li>
              <li className="nav__list-item"><a href="#">Contact</a></li>
            </ul>
          </nav>
          <div className={confirmAmount > 0 ? 'inCart-open' : 'inCart'}>{confirmAmount > 0 ? confirmAmount : ''}</div>
          <button className='header__cart' onClick={() => setCartIsOpen(prev => !prev)}><img src={cart} alt="cart" /></button>
          <div className={cartIsOpen ? 'cart cart-open' : 'cart'}>
            <h2 className='cart__heading'>Cart</h2>
            {confirmAmount > 0
              ?
              <div>
                <div className='cart__grid'>
                  <img className='cart__img' src={sneakerPics[0]} alt="Fall limited edition sneaker" />
                  <p className='cart__title'>Autumn Limited Edition...</p>
                  {confirmAmount > 1
                    ? <p className='cart__price'>$125.00 x {confirmAmount}<b>&nbsp;${confirmAmount * 125}.00</b></p>
                    : <p className='cart__price'>$125.00</p>}
                  <button className='cart__delete' onClick={() => setConfirmAmount(0)}><img src={remove} alt="" /></button>
                </div>
                <div className='cart__btnDiv'><button className='cart__btn'>Checkout</button></div>
              </div>
              :
              <div className='cart__empty'>Your cart is empty</div>}
          </div>
          <img className='header__avatar' src={avatar} alt="avatar" />
        </header>
        <main className='main'>
          <Lightbox
            lightboxIsOpen={lightboxIsOpen}
            lightboxCount={lightboxCount}
            sneakerPics={sneakerPics}
            setLightboxCount={setLightboxCount}
            setLightboxIsOpen={setLightboxIsOpen}
            prevPic={prevPic}
            nextPic={nextPic}
          />
          <div className='main__productImg productImg'>
            <div className='main__productImg__large' onClick={() => openLightbox()}>
              <img src={sneakerPics[previewCount]} alt="Fall limited edition sneaker" />
            </div>
            <div className='main__productImg__small'>
              <div className={sneakerPics[previewCount] === sneakerPics[0] ? "main__productImg__small-current" : "main__productImg__small-overlay"} onClick={() => setPreviewCount(0)}><img src={sneakerPics[0]} alt="Fall limited edition sneaker" /></div>
              <div className={sneakerPics[previewCount] === sneakerPics[1] ? "main__productImg__small-current" : "main__productImg__small-overlay"} onClick={() => setPreviewCount(1)}><img src={sneakerPics[1]} alt="Fall limited edition sneaker" /></div>
              <div className={sneakerPics[previewCount] === sneakerPics[2] ? "main__productImg__small-current" : "main__productImg__small-overlay"} onClick={() => setPreviewCount(2)}><img src={sneakerPics[2]} alt="Fall limited edition sneaker" /></div>
              <div className={sneakerPics[previewCount] === sneakerPics[3] ? "main__productImg__small-current" : "main__productImg__small-overlay"} onClick={() => setPreviewCount(3)}><img src={sneakerPics[3]} alt="Fall limited edition sneaker" /></div>
            </div>
          </div>
          <div className='main__productInfo'>
            <h1 className='main__productInfo__company'>sneaker company</h1>
            <h2 className='main__productInfo__product'>Fall Limited Edition Sneakers</h2>
            <p className='main__productInfo__description'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
            <div className='main__productInfo__price'>
              <p className='main__productInfo__price__current'>$125.00</p>
              <p className='main__productInfo__price__discount'>50%</p>
              <p className='main__productInfo__price__original'>$250.00</p>
            </div>
            <div className='main__productInfo__btnDiv'>
              <div className='main__productInfo__amount'>
                <button className='main__productInfo__amount__minus' onClick={() => minus()}><img src={minusPic} /></button>
                <p className='main__productInfo__amount__number'>{amount}</p>
                <button className='main__productInfo__amount__plus' onClick={() => add()}><img src={plusPic} /></button>
              </div>
              <button className='main__productInfo__addToCart' onClick={confirm}><img src={whiteCart} />Add to cart</button>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}


