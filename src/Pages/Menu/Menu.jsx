import React from 'react'
import { Helmet } from 'react-helmet-async'
import menuBg from '../../assets/menu/banner3.jpg'

import Dessert from '../../assets/menu/dessert-bg.jpeg'
import Pizza from '../../assets/menu/pizza-bg.jpg'
import Salads from '../../assets/menu/salad-bg.jpg'
import Soup from '../../assets/menu/soup-bg.jpg'
import MenuItem from '../../Components/MenuItem'
import SectionTitle from '../../Components/SectionTitle'
import Cover from '../Shared/Cover/Cover'
import useMenu from '../Shared/Custom/useMenu'
function Menu() {

  const {menu} = useMenu()
    const offered = menu.filter(item => item.category === 'offered' )
    const dessert = menu.filter(item => item.category === 'dessert' )
    const pizza = menu.filter(item => item.category === 'pizza' )
    const salad = menu.filter(item => item.category === 'salad' )
    const soup = menu.filter(item => item.category === 'soup' )


  return (
    <div className=''>
      <Helmet>
        <title>Menu | Black Castel</title>
      </Helmet>
      <section className='mb-10'>
        <Cover bannerHeignt={'h-[600px]'} img={menuBg} headingColor={'text-white/80'} heading={'OUR MENU'} title={'Would you like to try a dish?'}/>
      </section>

{/* Today offer */}
   <SectionTitle heading={'---Dont miss---'} title={"TODAY'S OFFER"} color={"text-orange-500"}
headingColor={" text-gray-500"} />
<section className='my-10 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>
{
        offered.map(item => <MenuItem item={item} key={item?._id}/>)
       }
</section>
{/* Desserts offer */}
      <section >
        <Cover bannerHeignt={'h-[440px]'} img={Dessert} headingColor={'text-white/80'} heading={'DESSERTS'} title={'Food is an essential part of our lives, not only for survival but also as a source of joy and connection. It reflects the culture, traditions, and creativity of people across the globe. From the spicy curries of India to the delicate sushi of Japan, every cuisine tells a unique story ?'}/>
      </section>
      <section className='my-10 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>
{
        dessert.map(item => <MenuItem item={item} key={item?._id}/>)
       }
</section>
{/* Pizzas offer */}
      <section >
        <Cover bannerHeignt={'h-[440px]'} img={Pizza} headingColor={'text-white/80'} heading={'PIZZA'} title={'Food also brings people together, whether through family meals, festive celebrations, or casual gatherings with friends. Beyond its taste and aroma, food nourishes our bodies and minds, providing energy and comfort. ?'}/>
      </section>
      <section className='my-10 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>
{
        pizza.map(item => <MenuItem item={item} key={item?._id}/>)
       }
</section>
{/* Salads offer */}
      <section >
        <Cover bannerHeignt={'h-[440px]'} img={Salads} headingColor={'text-white/80'} heading={'SALADS'} title={'Food is an essential part of our lives, not only for survival but also as a source of joy and connection ?'}/>
      </section>
      <section className='my-10 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>
{
        salad.map(item => <MenuItem item={item} key={item?._id}/>)
       }
</section>
{/* Soups offer */}
      <section >
        <Cover bannerHeignt={'h-[440px]'} img={Soup} headingColor={'text-white/80'} heading={'SOUPS'} title={'Food also brings people together, whether through family meals, festive celebrations, or casual gatherings with friends ?'}/>
      </section>
      <section className='my-10 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10'>
{
        soup.map(item => <MenuItem item={item} key={item?._id}/>)
       }
</section>
     
   
    </div>
  )
}

export default Menu
