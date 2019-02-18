import compose from 'recompose/compose'
import { withHandlers, withState, withProps, lifecycle, pure } from 'recompose'

import Marketplace from '../../components/Marketplace'

import Product1 from '../../assets/images/Product-1.png'
import Product2 from '../../assets/images/Product-2.png'
import Product3 from '../../assets/images/Product-3.png'
import Product4 from '../../assets/images/Product-4.png'
import Product5 from '../../assets/images/Product-5.png'
import Product6 from '../../assets/images/Product-6.png'
import Product7 from '../../assets/images/Product-7.png'
import Product8 from '../../assets/images/Product-8.png'
import Product9 from '../../assets/images/Product-9.png'
import Product10 from '../../assets/images/Product-10.png'
import Product11 from '../../assets/images/Product-11.png'
import Product12 from '../../assets/images/Product-12.png'

const tmpProducts = [
  {
    id: 1,
    img: Product1,
    title: 'Giày thể thao nam loại cao cấp VISPO 007',
    price: 300000,
    oldPrice: 400000
  },
  {
    id: 2,
    img: Product2,
    title: 'Giày thể thao nam loại cao cấp VISPO 007',
    price: 290000,
    oldPrice: 400000
  },
  {
    id: 3,
    img: Product3,
    title: 'Giày thể thao nam loại cao cấp VISPO 007',
    price: 310000,
    oldPrice: 400000
  },
  {
    id: 4,
    img: Product4,
    title: 'Giày thể thao nam loại cao cấp VISPO 007',
    price: 344000,
    oldPrice: 400000
  },
  {
    id: 5,
    img: Product5,
    title: 'Giày thể thao nam loại cao cấp VISPO 007',
    price: 167000,
    oldPrice: 400000
  },
  {
    id: 6,
    img: Product6,
    title: 'Giày thể thao nam loại cao cấp VISPO 007',
    price: 128000,
    oldPrice: 400000
  },
  {
    id: 7,
    img: Product7,
    title: 'Giày thể thao nam loại cao cấp VISPO 007',
    price: 378000,
    oldPrice: 400000
  },
  {
    id: 8,
    img: Product8,
    title: 'Giày thể thao nam loại cao cấp VISPO 007',
    price: 200000,
    oldPrice: 400000
  },
  {
    id: 9,
    img: Product9,
    title: 'Giày thể thao nam loại cao cấp VISPO 007',
    price: 306000,
    oldPrice: 400000
  },
  {
    id: 10,
    img: Product10,
    title: 'Giày thể thao nam loại cao cấp VISPO 007',
    price: 308800,
    oldPrice: 400000
  },
  {
    id: 11,
    img: Product11,
    title: 'Giày thể thao nam loại cao cấp VISPO 007',
    price: 500000,
    oldPrice: 400000
  },
  {
    id: 12,
    img: Product12,
    title: 'Giày thể thao nam loại cao cấp VISPO 007',
    price: 540000,
    oldPrice: 400000
  }
]

export default compose(
  withState('checked', 'setChecked', false),
  withHandlers({
    handleCheckbox: ({ setChecked, checked }) => () => {
      setChecked(!checked)
    }
  }),
  withProps(() => ({ products: tmpProducts })),
  lifecycle({
    componentWillMount() {
      window.scrollTo(0, 0)
    }
  }),
  pure
)(Marketplace)
