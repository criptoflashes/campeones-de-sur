"use client"
import CardProducts from './CardAdminProducts';
/* API products state */
import { useGetProductsQuery } from '@/redux/services/productApi'



function AllProducts() {

    /* API products state */
    const { isLoading, isFetching, data, error } = useGetProductsQuery(null);

    if (isLoading || isFetching) return <p>loading...</p>;
    if (error) return <p>some error</p>;



    return (
        <div>

            <div className="grid grid-cols-4 grid-rows-auto gap-4">
                {error ? (
                    <p>some error</p>
                ) : isLoading || isFetching ? (
                    <p>loading...</p>
                ) : (


                    data?.map((product) => (
                        <div key={product.title}>
                            <CardProducts product={product} />

                        </div>

                    ))
                )}
            </div>


        </div>
    )
}

export default AllProducts
