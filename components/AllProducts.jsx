"use client"
import CardProducts from './CardProducts';

/* API products state */
import { useGetProductsQuery } from '@/redux/services/productApi'



function AllProducts() {

    /* API products state */
    const { isLoading, isFetching, data, error } = useGetProductsQuery(null);

    if (isLoading || isFetching) return <p>loading...</p>;
    if (error) return <p>some error</p>;



    return (
        <div className=" gap-4  grid-cols-1 sm:grid md:grid-cols-3 text-center">
            {error ? (
                <p>some error</p>
            ) : isLoading || isFetching ? (
                <p>loading...</p>
            ) : (
                data?.map((product) => (
                    <CardProducts product={product} key={product.title} />

                ))
            )}
           
        </div>


    )
}

export default AllProducts
