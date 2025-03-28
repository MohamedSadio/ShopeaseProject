import React, { useEffect, useMemo, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb';
import content from '../../data/content.json'
import Rating from '../../components/Rating/Rating';
import { Link } from 'react-router-dom';
import SizeFilter from '../../components/Filters/SizeFilter';
import ProductColors from './ProductColors';
import CartIcon2 from '../../components/common/CartIcon2'
import SvgCreditCard from '../../components/common/SvgCreditCard';
import SvgCloth from '../../components/common/SvgCloth';
import SvgShipping from '../../components/common/SvgShipping';
import SvgReturn from '../../components/common/SvgReturn';
import SectionHeading from '../../components/SectionsHeading/SectionHeading'
import ProductCard from '../ProductListPage/ProductCard';

const categories = content?.categories;

const extraSections = [
    {
        icon: <SvgCreditCard />,
        label: 'Secure Payment'
    },
    {
        icon: <SvgCloth />,
        label: 'Size and fit'
    },
    {
        icon: <SvgShipping />,
        label: 'Free shipping'
    },
    {
        icon: <SvgReturn />,
        label: 'Free shipping and returns'
    }
]

const ProductDetails = () => {
    const { product } = useLoaderData();
    const [image, setImage] = useState(product?.images[0] ?? product?.thumbnail);
    const [breadCrumbLinks, setBreadCrumbLink] = useState([]);

    const productListItems = useMemo(()=>{
        return content?.products?.filter((item)=> item?.type_id === product?.type_id)
      },[product]);

    const productCategory = useMemo(() => {
        return categories?.find((category) => category?.id === product?.category_id)
    }, [product]);

    useEffect(() => {
        // Réinitialiser l'image lorsque le produit change
        setImage(product?.images[0] ?? product?.thumbnail);

        window.scrollTo(0, 0);
      }, [product]);

    useEffect(() => {
        setBreadCrumbLink([]);
        const arrayLinks = [{ title: 'Shop', path: '/' }, {
            title: productCategory?.name,
            path: productCategory?.path
        }]
        const productType = productCategory?.types?.find((item) => item?.type_id === product?.type_id)
        if (productType) {
            arrayLinks?.push({
                title: productType?.name
            })
        }
        setBreadCrumbLink(arrayLinks);
    }, [productCategory, product])

    return (
        <>
            <div className='flex flex-col md:flex-row px-4 md:px-10'>
                <div className='w-full md:w-1/2'>
                    {/*image*/}
                    <div className='flex flex-col-reverse md:flex-row'>
                        {/* Stack images */}
                        <div className='flex flex-row md:flex-col justify-center overflow-x-auto md:overflow-visible'>
                            {product?.images?.map((item, index) => (
                                <button 
                                    key={index}
                                    onClick={() => setImage(item)} 
                                    className='rounded-lg w-fit p-2 mb-2 flex-shrink-0 mr-2 md:mr-0'
                                >
                                    <img 
                                        src={item} 
                                        alt={'sample-' + index}
                                        className='h-16 w-16 md:h-20 md:w-20 bg-cover bg-center rounded-lg hover:scale-110 transform' 
                                    />
                                </button>
                            ))}
                        </div>
                        <div className='w-full md:w-4/5 flex justify-center md:pt-0 pl-4 pt-4'>
                            <img 
                                src={image}
                                className='h-auto md:h-520px w-full border rounded-xl cursor-pointer object-cover block'
                                alt={product?.title} 
                            />
                        </div>
                    </div>
                </div>
                <div className='w-full md:w-1/2 px-0 md:px-2 mt-2 md:mt-0'>
                    <Breadcrumb links={breadCrumbLinks} />
                    <p className='text-2xl md:text-3xl pt-5'>{product?.title}</p>
                    <Rating rating={product?.rating} />
                    <p className='text-xl font-bold py-2'>{product?.price} Fcfa</p>
                    
                    <div className='flex flex-col'>
                        <div className='flex  items-center'>
                            <p className='text-sm font-bold'>Select size</p>
                            <Link 
                                className='text-sm text-gray-500 hover:text-gray-900'
                                to={'https://en.wikipedia.org/wiki/Clothing_sizes'} 
                                target='_blank'
                            >
                                Size guide -&gt;
                            </Link>
                        </div>
                    </div>
                    
                    <div className='mt-5'><SizeFilter sizes={product?.size} hidleTitle /></div>
                    
                    <div className='mt-5'>
                        <p className='text-lg font-bold'>Colors Available</p>
                        <ProductColors colors={product?.color} />
                    </div>
                    
                    <div className='flex pt-4'>
                        <button className='bg-black rounded-lg w-full md:w-150px px-2 py-3 hover:bg-gray-700'>
                            <div className='flex items-center text-white justify-center'>
                                <CartIcon2 className='mr-2' />Add to cart
                            </div>
                        </button>
                    </div>
                    
                    <div className='grid grid-cols-2 md:grid-cols-2 gap-4 pt-6'>
                        {extraSections?.map((sections, index) => (
                            <div key={index} className='flex items-center'>
                                {sections?.icon}
                                <p className='px-2 text-sm'>{sections?.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            
            {/*Product description */}
            <SectionHeading title={"Product description"} />
            <div className='w-50% p-2'>
                
                <p className='p-4 md:p-8'>{product?.description}</p>
            </div>

            {/*Product similar */}
            <SectionHeading title={"Similar Product"} />
                <div className='flex md:w-50% lg:w-full p-4 md:p-10'>
                    <div className='pt-2 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6 lg:gap-8'>
                        {productListItems?.map((item,index)=>{
                        return <ProductCard key={index} {...item}/>
                        })}
                    </div>
                </div>
            
        </>
    )
}

export default ProductDetails