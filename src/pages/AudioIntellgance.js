import React, { useEffect } from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import ProductHeader from '../sections/productHeader'
import ProductPowerful from '../sections/productPowerful';
import ProductUsecase from '../sections/productUsecase';
import ProductOptimizedUseCase from '../sections/productOptimizedUseCase';
import ProductRate from '../sections/productRate';
import HeaderAi from '@/components/HeaderAi';

function AudioIntellgance() {
  useEffect(() => {
    const arsFont = document.getElementsByTagName("body");
    arsFont[0].classList.add("ar-font");
  }, []);
  return (

    <Layout>
      <SEO
        title="Hams.AI"
        description="حول النص للصوت, افضل ذكاء أصطناعي بالغة العربية, حول جميع مكلماتك لذكاء اصطناعي"
      />
      <HeaderAi />
      <ProductPowerful />
      <ProductRate />
      {/* <ProductUsecase/> */}
      <ProductOptimizedUseCase />

    </Layout>




  )
}

export default AudioIntellgance