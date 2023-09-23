

import DashboardCardContainer from '@/app/adminProducts/page'
import Link from 'next/link';
import CardAdminProducts from '@/components/CardAdminProducts';
import { useDispatch, useSelector } from "react-redux";
/* API products state */
import { useGetProductsQuery } from '@/redux/services/productApi'
import AllProducts from '@/components/AllProducts';


function ShowAllProducts() {




  return (


    <div >
      <AllProducts />
    </div>







  );
}

export default ShowAllProducts
