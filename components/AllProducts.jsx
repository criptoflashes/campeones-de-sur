"use client"
import CardProducts from './CardProducts';
import Loading from '@/app/adminProducts/loading';
/* API products state */
import { useGetProductsQuery } from '@/redux/services/productApi'




function AllProducts() {

    /* API products state */
    const { isLoading, isFetching, data, error } = useGetProductsQuery(null);

    if (isLoading || isFetching) return <Loading />
    if (error) return <p>some error</p>;



    return (
        <div>
            <h1 className='text-center text-4xl py-6  font-color-blue-600'>Nuestros productos</h1>

            <div className="gap-5  grid-cols-1 sm:grid md:grid-cols-4 text-center mx-3  mb-7">


                {error ? (
                    <p>some error</p>
                ) : isLoading || isFetching ? (
                    <Loading />
                ) : (
                    data?.map((product) => (
                        <CardProducts product={product} key={product.title} className="" />
                    ))
                )}
            </div>
        </div>

    )
}

export default AllProducts
