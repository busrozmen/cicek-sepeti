import React from 'react'
import { Container, Row, Col, Button } from 'reactstrap';
import cargo from '../../assets/images/cargo.png'
import gift from '../../assets/images/gift.png'
import stationery from '../../assets/images/stationery.png'
import './Footer.css'
const TopFooter = () => {
  
    return (
      <div className='footer__top'>
        <Container>
          <Row>
            <Col xs="12" sm="4" className='footer__top-cargo'>
              <div className='info-wrapper'>
                <img src={cargo} alt='cargo'/>
                <div>
                  <p>75 TL Üzerine Teslimat Ücreti Bizden</p>
                  <Button className='rounded-pill'>Detaylı Bilgi</Button>
                </div>
              </div>
            </Col>
            <Col xs="12" sm="4" className='footer__top-gift'>
              <div className='info-wrapper'>
                <img src={gift} alt='gift'/>
                <div>
                  <p>Hediye Kategorisi için Sepette %15 İndirim</p>
                  <Button className='rounded-pill'>Hediye Ürünleri</Button>
                </div>

              </div>
            </Col>
            <Col xs="12" sm="4" className='footer__top-stationery'>
              <div className='info-wrapper'>
                <img src={stationery} alt='stationery'/>
                <div>
                  <p>Kırtasiye Kategorisi için Sepette %15 İndirim</p>
                  <Button className='rounded-pill'>Detaylı Bilgi</Button> 
                </div>
              </div>
            </Col>
          </Row>
        </Container>  
      </div>
    )
}

export default TopFooter