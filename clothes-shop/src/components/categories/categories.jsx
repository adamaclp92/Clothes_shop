import CategoryItem from "../category-item/category-item.jsx"
import style from "./categories.module.scss"
const Categories = (props) =>{

  const categories = [
    {
      id: 1,
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
      route: 'shop/hats',
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
      route: 'shop/jackets',
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
      route: 'shop/sneakers',
    },
    {
      id: 4,
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
      route: 'shop/womens',
    },
    {
      id: 5,
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
      route: 'shop/mens',
    },
  ];


    return (
        <div className={style['categories-container']}>
        {categories.map((category) => (
        <CategoryItem 
          key={category.id}
          title={category.title}
          id={category.id}
          imageUrl={category.imageUrl}
        />

      ))}
    </div>
    )
}


export default Categories
