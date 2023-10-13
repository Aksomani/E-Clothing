import React from 'react';
import CategoryItem from '../components/category/CategoryItem';


const categories = [
  {
    id: '1',
    title: 'Hats',
    subtitle: 'Shop Now',
    imageUrl: 'https://img.freepik.com/free-photo/fedora-hats-arrangement-studio_23-2150737116.jpg?w=360&t=st=1695994021~exp=1695994621~hmac=8322870c13632bdc18565317d243557fb30d7f10cedf59467e8c4d6e13a1d355',
    route: '/shop/hats'
  },
  {
    id: '2',
    title: 'Jackets',
    subtitle: 'Shop Now',
    imageUrl: 'https://img.freepik.com/free-photo/men39s-clothes-hanger-generative-ai_169016-29035.jpg?w=740&t=st=1695995250~exp=1695995850~hmac=6ed9258367351c03b4631cb587a21248e8e97df0f16ed5b4d9a0ae66f6a55ca0',
    route: '/shop/jackets'
  },
  {
    id: '3',
    title: 'Sneakers',
    subtitle: 'Shop Now',
    imageUrl: 'https://img.freepik.com/free-photo/modern-blue-sports-shoe-design-close-up-fashionable-generated-by-ai_188544-19682.jpg?w=1380&t=st=1695995295~exp=1695995895~hmac=845861a9d258e3b38c635771e7a6084d7e9fcca249d02c523c5eaa67a4b3dde3',
    route: '/shop/sneakers'
  },
  {
    id: '4',
    title: 'Womens',
    subtitle: 'Shop Now',
    imageUrl: 'https://img.freepik.com/free-photo/three-young-beautiful-smiling-girls-trendy-summer-casual-jeans-clothes-sexy-carefree-women-posing-positive-models-sunglasses_158538-4730.jpg?w=900&t=st=1696935388~exp=1696935988~hmac=5567914bf2ef9fc0a6a0804acc678bf194cf04e623f2802a4ecf46a7a6f52cef',
    route: '/shop/womens'
  },
  {
    id: '5',
    title: 'Men',
    subtitle: 'Shop Now',
    imageUrl: 'https://img.freepik.com/free-photo/fashion-stylish-model-dressed-elegant-light-pink-suit-posing-near-white-wall_158538-13418.jpg?w=740&t=st=1696935637~exp=1696936237~hmac=3bb66e2ae4ba6014da3a62d96339ddcdf359004944275028a840d414b50e60ce',
    route: '/shop/mens'
  }
]

const Directory = () => {

  

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 p-2">
    {categories.map((Category) => (
      <div key={Category.id} className="col-span-1">
        <CategoryItem Category={Category} />
      </div>
    ))}
  </div>
  )
}

export default Directory
