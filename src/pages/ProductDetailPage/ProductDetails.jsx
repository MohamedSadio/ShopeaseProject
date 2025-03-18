import React, { useEffect, useMemo, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import content from '../../data/content.json'

const categories = content?.categories;

const ProductDetails = () => {
    const { product } = useLoaderData();
    const [image,setImage] = useState(product?.images[0] ?? product?.thumbnail);
    const [breadCrumbLinks,setBreadCrumbLink]=useState([]);

    const productCategory = useMemo(()=>{
        return categories?.find((category)=> category?.id===product?.category_id)
    },[product]);
    useEffect(()=>{
        setBreadCrumbLink([]);
        const arrayLinks = [{title:'Shop',path:'/'},{
            title:productCategory?.name,
            path:productCategory?.path
        }]
        const productType = productCategory?.types?.find((item)=>item?.type_id === product?.type_id)
        if(productType){
            arrayLinks?.push({
                title:productType?.name
            })
        }
        setBreadCrumbLink(arrayLinks);
    },[productCategory,product])

  return (
    <div className='flex flex-col md:flex-row px-10'>
        <div className='w-100% lg:w-50% md:w-40%'>
            {/*image*/}
            <div className='flex flex-col md:flex-row'>
                <div className='w-100% sm:w-20% justify-center h-40px md:h-420px'>
                    {/*Stack images */}
                    <div className='flex flex-row md:flex-col justify-center h-full'>
                        {product?.images?.map((item,index)=>(
                            <button onClick={()=>setImage(item)} className='rounded-lg w-fit p-2 mb-2'><img src={item} alt={'sample-'+index} 
                            className='h-60px w-60px bg-cover bg-center rounded-lg hover:scale-110 transform'/></button>
                        ))}
                    </div>
                </div>
                <div className='w-full md:w-80% flex justify-center md:pt-0 pt-10'>
                    {/* */}
                    <img src={image} 
                    className='h-520px w-full
                    border rounded-xl cursor-pointer object-cover block' 
                    alt={product?.title}/>
                </div>
            </div>
        </div>
        <div className='w-60% px-10'>
            {/*details*/}
            <Breadcrumb links={breadCrumbLinks}/>
        </div>
    </div>
  )
}

export default ProductDetails