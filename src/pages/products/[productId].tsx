import React from 'react';
import { useRouter } from 'next/router';
import { productsData } from '@/components/productsData';
import { Navbar } from '@/components';

const Product_details = () => {
    const router = useRouter();
    const productId = router.query.productId;
  return (
    <>
  <div className="container mx-auto p-5">
        <Navbar />
  {productsData.map((product:any,key:number) => {
    if(product.id === productId){
      return <h1 key={key}>{product}</h1>
    }})}
        </div>
  </>
  )
}

export default Product_details;