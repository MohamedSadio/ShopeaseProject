import React from 'react';
import SectionHeading from '../../../SectionsHeading/SectionHeading';
import Card from '../../../Card/Card';

const Category = ({ section }) => {
  return (
    <>
      <SectionHeading title={section.title} />
      <div className='flex px-8'>
        {section.data && section.data?.map((item, index) => {
          return (
            <Card
              key={index}
              title={item?.title}
              description={item?.description}
              imagePath={item?.image}
              actionArrow={true}
              height={'200px'}
              width={'240px'}
            />
          );
        })}
      </div>
    </>
  );
};

export default Category;