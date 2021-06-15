import React from 'react'
import { Container, Row, Col, UncontrolledCollapse } from 'reactstrap';
import TopFooter from '../Footer/TopFooter'
import phones from '../../assets/images/phones.png'
import qrCode from '../../assets/images/qr-code.png'
import playStore from '../../assets/images/play-store.svg'
import appStore from '../../assets/images/app-store.svg'
import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'
import instagram from '../../assets/images/instagram.svg'
import youtube from '../../assets/images/youtube.svg'
import blog from '../../assets/images/blog.svg'
import './Footer.css'

const Footer = () => {

    return (
      <>
      <TopFooter />
      <div className='footer'>
        <Container>
          <div className='footer__store-wrapper'>
            <div className='phones-wrapper flex-item'>
              <img src={phones} alt='phones' className='phones'></img>
            </div>
            <div className='flex-item'>
              <div className='qr-wrapper'>
                <div className='qr-wrapper-item'>
                  <img src={qrCode} alt='qr-code' className='qr-code'></img>
                </div>
                <div className='qr-wrapper-item'>
                  <p className='font-weight-bold'>Çiçek Sepeti Mobil Uygulamayı İndirin</p>
                  <p>Mobil Uygulamayı QR Kod ile İndirin.</p>
                </div>
              </div>
              <div className='store-wrapper'>
                <img src={playStore} alt='play-store' className='play-store'></img>
                <img src={appStore} alt='app-store' className='app-store'></img>
              </div>
            </div>
          </div>
          <div className='footer__info-wrapper'>
            <Row>
              <Col xs='12' md='12' lg='4' className='social-part'>
                <img src={logo} alt='logo'/>
                <div className='social-part__icons'>
                <img src={facebook} alt='facebook'/>
                <img src={twitter} alt='twitter'/>
                <img src={instagram} alt='instagram'/>
                <img src={youtube} alt='youtube'/>
                <img src={blog} alt='blog'/>
                </div>
                <span>CicekSepeti.com olarak kişisel verilerinizin gizliliğini önemsiyoruz. 
                  6698 sayılı Kişisel Verilerin Korunması Kanunu kapsamında oluşturduğumuz 
                  aydınlatma metnine <a href='/#'>buradan</a> ulaşabilirsiniz.</span>
              </Col>
              <Col xs='12' md='12' lg='8' className='footer-menu'>
                <ul>
                  <li className='footer-menu__item'>
                    <a className='footer-menu__title' href='/#'>Faydalı Bilgiler</a>
                    <ul className='footer-submenu'>
                      <li><a href='/#'>Çiçek Bakımı</a></li>
                      <li><a href='/#'>Çiçek Eşliğinde Notlar</a></li>
                      <li><a href='/#'>Çiçek Anlamları</a></li>
                      <li><a href='/#'>Özel Günler</a></li>
                      <li><a href='/#'>Mevsimlere Göre Çiçekler</a></li>
                      <li><a href='/#'>BonnyFood Saklama Koşulları</a></li>
                      <li><a href='/#'>Site Haritası</a></li>
                    </ul>
                  </li>
                  <li className='footer-menu__item'>
                    <a className='footer-menu__title' href='/#'>Kurumsal</a>
                    <ul className='footer-submenu'>
                      <li><a href='/#'>Hakkımızda</a></li>
                      <li><a href='/#'>Kariyer</a></li>
                      <li><a href='/#'>ÇiçekSepeti’nde Satış Yap</a></li>
                      <li><a href='/#'>Kurumsal Müşterilerimiz</a></li>
                      <li><a href='/#'>Reklamlarımız</a></li>
                      <li><a href='/#'>Basında Biz</a></li>
                      <li><a href='/#'>Kampanyalar</a></li>
                      <li><a href='/#'>Vizyonumuz</a></li>
                    </ul>
                  </li>
                  <li className='footer-menu__item'>
                      <a className='footer-menu__title' href='/#'>İletişim</a>
                      <ul className='footer-submenu'>
                        <li><a href='/#'>Bize Ulaşın</a></li>
                        <li><a href='/#'>Sıkça Sorulan Sorular</a></li>
                      </ul>
                  </li>
                  <li className='footer-menu__item'>
                      <a className='footer-menu__title' href='/#'>Gizlilik Sözleşmesi</a>
                      <ul className='footer-submenu'>
                      <li><a href='/#'>Mesafeli Satış Sözleşmesi</a></li>
                      <li><a href='/#'>Bilgi Toplumu Hizmetleri</a></li>
                      <li><a href='/#'>Gizlilik Sözleşmesi</a></li>
                      <li><a href='/#'>Ödeme Seçenekleri</a></li>
                      <li><a href='/#'>Hesap Bilgileri</a></li>
                    </ul>
                  </li>
                </ul>     
              </Col>
              <Col xs='12' md='12' lg='8' className='footer-menu-mobile'>
                <ul>
                  <li className='footer-menu__item'>
                    <a className='footer-menu__title' id='toggler1'>Faydalı Bilgiler</a>
                    <UncontrolledCollapse toggler='#toggler1'>
                    <ul className='footer-submenu'>
                      <li><a href='/#'>Çiçek Bakımı</a></li>
                      <li><a href='/#'>Çiçek Eşliğinde Notlar</a></li>
                      <li><a href='/#'>Çiçek Anlamları</a></li>
                      <li><a href='/#'>Özel Günler</a></li>
                      <li><a href='/#'>Mevsimlere Göre Çiçekler</a></li>
                      <li><a href='/#'>BonnyFood Saklama Koşulları</a></li>
                      <li><a href='/#'>Site Haritası</a></li>
                    </ul>
                    </UncontrolledCollapse>
                  </li>
                  <li className='footer-menu__item'>
                    <a className='footer-menu__title' id='toggler2'>Kurumsal</a>
                    <UncontrolledCollapse toggler='#toggler2'>
                    <ul className='footer-submenu'>
                      <li><a href='/#'>Hakkımızda</a></li>
                      <li><a href='/#'>Kariyer</a></li>
                      <li><a href='/#'>ÇiçekSepeti’nde Satış Yap</a></li>
                      <li><a href='/#'>Kurumsal Müşterilerimiz</a></li>
                      <li><a href='/#'>Reklamlarımız</a></li>
                      <li><a href='/#'>Basında Biz</a></li>
                      <li><a href='/#'>Kampanyalar</a></li>
                      <li><a href='/#'>Vizyonumuz</a></li>
                    </ul>
                    </UncontrolledCollapse>
                  </li>
                  <li className='footer-menu__item'>
                      <a className='footer-menu__title' id='toggler3'>İletişim</a>
                      <UncontrolledCollapse toggler='#toggler3'>
                      <ul className='footer-submenu'>
                        <li><a href='/#'>Bize Ulaşın</a></li>
                        <li><a href='/#'>Sıkça Sorulan Sorular</a></li>
                      </ul>
                      </UncontrolledCollapse>
                  </li>
                  <li className='footer-menu__item'>
                      <a className='footer-menu__title' id='toggler4'>Gizlilik Sözleşmesi</a>
                      <UncontrolledCollapse toggler='#toggler4'>
                      <ul className='footer-submenu'>
                      <li><a href='/#'>Mesafeli Satış Sözleşmesi</a></li>
                      <li><a href='/#'>Bilgi Toplumu Hizmetleri</a></li>
                      <li><a href='/#'>Gizlilik Sözleşmesi</a></li>
                      <li><a href='/#'>Ödeme Seçenekleri</a></li>
                      <li><a href='/#'>Hesap Bilgileri</a></li>
                    </ul>
                    </UncontrolledCollapse>
                  </li>
                </ul>     
              </Col>
              <Col xs='12' sm='12' className='footer-description'>
                <p>Türkiyenin en büyük online çiçek sitesi ÇiçekSepeti ile sevdiklerinizi mutlu etmek çok kolay! 
                  Çiçek göndermenin ve “Mutlu etmenin adresi” Çiçek Sepeti ile sevdiklerinize özel günlerde online çiçek gönderebilirsiniz. 
                  Geniş çiçekçi ağı sayesinde çiçek siparişleriniz Türkiye’nin dört bir yanına hızlı ve sorunsuz şekilde gönderilir. 
                  Taze çiçeklerle hazırlanan mis kokulu şık çiçek aranjmanları arasından beğendiğiniz ürünü seçerek, 
                  hızlı bir şekilde online sipariş verebilirsiniz. Sevdiklerinizin doğum günü, 
                  yıldönümü gibi mutlu günlerinde onların sevincine ortak olmak için yapmanız gereken sadece birkaç tıkla sipariş vermek. 
                  Sevgililer Günü, Kadınlar Günü, Anneler Günü gibi özel günlerde de çiçek, hediye ve lezzetli bonnyFood ürünleriyle 
                  sevdiklerinizi mutlu edebilirsiniz. Çünkü mutlu etmenin adresi; ÇiçekSepeti.</p>
              </Col>
            </Row>
          </div>
        </Container>  
      </div>
      <p className='footer__copyright'>Copyright © 2019 Çiçek Sepeti İnternet Hizmetleri A.Ş</p>
      </>
    )
}

export default Footer