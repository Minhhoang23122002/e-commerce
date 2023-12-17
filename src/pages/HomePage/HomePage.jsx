import React from 'react';
import TypeProduct from '../../components/TypeProduct/TypeProduct';
import { WrapperButtonMore, WrapperProducts, WrapperTypeProduct } from './style';
import SliderComponent from '../../components/SliderComponent/SliderComponent';
import slider1 from '../../assets/images/slider1.webp';
import slider2 from '../../assets/images/slider2.webp';
import slider3 from '../../assets/images/slider3.webp';
import CardComponent from '../../components/CardComponent/CardComponent';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
  const navigate = useNavigate(); 

    const handleNavigateTypeProduct = () => {
        navigate('/type');
    }
  
  const arr = ['Iphone', 'Android', 'Oppo'];
  const productSections = {
    promotions: ['Sản phẩm 1', 'Sản phẩm 2', 'Sản phẩm 3', 'Sản phẩm 4'], 
    bestSellers: ['Sản phẩm 5', 'Sản phẩm 6', 'Sản phẩm 7', 'Sản phẩm 8'], 
    mostSearched: ['Sản phẩm 9', 'Sản phẩm 10', 'Sản phẩm 11', 'Sản phẩm 12'], 
  };

  return (
    <>
      <div style={{ width: '1270px', margin: '0 auto' }}>
        <WrapperTypeProduct>
          {arr.map((item) => (
            <TypeProduct name={item} key={item} />
          ))}
        </WrapperTypeProduct>
      </div>

      <div className='body' style={{ width: '100%' }}>
        <div id='container' style={{ width: '1270px', margin: '0 auto' }}>
          <SliderComponent arrImages={[slider1, slider2, slider3]} />
          <div key="promotions">
            <h2>Khuyến mãi</h2>
            <WrapperProducts onClick={handleNavigateTypeProduct} style={{cursor:'pointer'}}>
              {productSections.promotions.map((product, index) => (
                <CardComponent key={index} productName={product}  />
              ))}
            </WrapperProducts>
          </div>

          <div key="bestSellers">
            <h2>Bán chạy</h2>
            <WrapperProducts>
              {productSections.bestSellers.map((product, index) => (
                <CardComponent key={index} productName={product}  />
              ))}
            </WrapperProducts>
          </div>

          <div key="mostSearched">
            <h2>Tìm kiếm nhiều nhất</h2>
            <WrapperProducts>
              {productSections.mostSearched.map((product, index) => (
                <CardComponent key={index} productName={product}  />
              ))}
            </WrapperProducts>
          </div>

          <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '10px' }}>
            <WrapperButtonMore
              textButton="Xem thêm"
              type="outline"
              styleButton={{
                border: '1px solid rgb(11, 116, 229)',
                color: 'rgb(11, 116, 229)',
                width: '240px',
                height: '38px',
                borderRadius: '4px',
              }}
              textbutton={'Xem thêm'}
              styleTextButton={{ fontWeight: 500 }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
