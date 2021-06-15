import React, {useState, useEffect} from 'react'
import { Container, Row, Col, InputGroup, Input, Button, Badge, Progress, Nav, NavItem } from 'reactstrap';
import logo from '../../assets/images/logo.svg'
import searchIcon from '../../assets/images/search-icon.svg'
import basketIcon from '../../assets/images/basket-icon.svg'
import basketIconMobile from '../../assets/images/basket-icon-mobile.svg'
import blueLine from '../../assets/images/blue-line.png'
import flash from '../../assets/images/flash.svg'
import './Header.css'
import * as searchActions from '../../redux/actions/searchActions'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'

const Header = (props) => {
  const [totalCount, setTotalCount] = useState(0)
    const setSearch = (search) => {
      props.actions.getSearch(search)
    }
    const basket = props.basket.basket
    useEffect(()=>{
      basket.map(item => (setTotalCount(totalCount + parseFloat((item.price).replaceAll(',','.')))))
    },[basket])

    return (
      <div className='header'>
          <div className='header__top'>
          <Container>
          <Row>
            <Col sm="3" className='text-left'><img src={logo} alt='logo'/></Col>
            <Col sm="6">
            <InputGroup className='search-wrapper'>
              <img src={searchIcon} alt='search-icon'/>
              <Input placeholder="Ürün ara" type="text" className='rounded-pill' onChange={(e) => (e.target.value).length >=3 ? setSearch(e.target.value) : setSearch('')  }/>
              <Button className='rounded-pill'>Ara</Button>
            </InputGroup>
            </Col>
            <Col sm="3" className='basket-wrapper'>
              <Button className='rounded-pill'>
                <img src={basketIcon} alt='basket-icon'/> Sepetim<Badge color="danger" className='basket-count'>{basket.length}</Badge>
              </Button>
              {
                totalCount< 500 &&
                  <div className='basket-info'>
                    <img src={flash} alt='flash-icon'/>
                    <span className='price'> {parseFloat(500 - totalCount).toFixed(2)} TL</span>
                    <span> ürün daha ekleyin kargo bedava</span>
                    <Progress className='rounded-pill' value={(totalCount*100)/500} />
                  </div>
              }
            </Col>
          </Row>
          </Container>
          </div>
          <div className='header__top-mobile'>
          <Container>
            <div className='logo-wrapper'>
              <img src={logo} alt='logo' className='logo'/>
              <div className='basket-wrapper'>
                <Button className='rounded-pill'>
                  <img src={basketIconMobile} alt='basket-icon'/>
                  <Badge color="danger" className='basket-count'>
                  {basket.length}
                  </Badge>
                </Button>
              </div>     
            </div>
            <InputGroup className='search-wrapper'>
              <img src={searchIcon} alt='search-icon'/>
              <Input placeholder="Ürün ara" type="text" className='rounded-pill' onChange={(e) => (e.target.value).length >=3 ? setSearch(e.target.value) : setSearch('')}/>
              <Button className='rounded-pill'>Ara</Button>
            </InputGroup>
          </Container>
          </div>
          <div className='header__bottom' style={{ backgroundImage: `url(${blueLine})`}}>
            <Container>
              <Nav>
                <NavItem>
                  Çiçek Sepeti H1
                </NavItem>
              </Nav>
            </Container>
          </div>
      </div>
    )
}

const mapStateToProps = state =>({
    search: state.searchReducer,
    basket: state.basketReducer
})
const mapDispatchToProps = dispatch => ({ 
    actions: {
      getSearch: bindActionCreators(searchActions.getSearch, dispatch),
  }
})

export default connect (mapStateToProps, mapDispatchToProps)(Header)
