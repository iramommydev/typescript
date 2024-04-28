import { memo } from "react";
import { useTranslation } from "react-i18next";

// const title: string = 'Kyiv is the capital of great people';

const Banner = memo(() => {
  const {t} = useTranslation();
  return (
    <div className='w-full bg-banner-bg bg-cover bg-center h-screen bg-no-repeat bg-fixed relative'>
      <div className='px-15px maxw-1410px m-auto w-full'>
        <h1 className='text-5xl font-semibold pt-8 w-2/3'>{t('banner')}</h1>
      </div>
    </div>
  );
});

export default Banner;
