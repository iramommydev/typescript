// * Base
import { ELanguage } from '../../types/language';
import { useTranslation } from 'react-i18next';
import { memo, useState } from 'react';
import Icon from '../Icon/Icon';

const Language = memo(() => {
  const [showList, setShowList] = useState<boolean>(false);
  const [language, setlanguage] = useState(ELanguage.UA);
  const { t, i18n } = useTranslation();
  const changeLanguage = (lang: ELanguage) => {
    i18n.changeLanguage(lang).then(() => {
      setlanguage(lang);
      setShowList(false);
    });
  };
  return (
    <div className='relative h-2'>
      <button
        type='button'
        className='pb-2 flex flex-col items-center justify-center gap-2 text-blue-500 leading-none hover:text-red-500 transition-colors duration-300 w-[80px]'
        onClick={() => setShowList((prev) => !prev)}
      >
       <Icon icon='language' className='text-green-500 w-5 pt-2'/> {t('language.' + language)}
      </button>
      {showList && <List changeLanguage={changeLanguage} />}
    </div>
  );
});
const List = memo(
  ({ changeLanguage }: { changeLanguage: (lang: ELanguage) => void }) => (
    <ul className='absolute top-o right-0 bg-yellow-100 border border-white rounded-lg z-50 text-sm'>
      <Item changeLanguage={changeLanguage} lang={ELanguage.UA} />
      <Item changeLanguage={changeLanguage} lang={ELanguage.EN} />
    </ul>
  )
);
const Item = memo(
  ({
    lang,
    changeLanguage,
  }: {
    lang: ELanguage;
    changeLanguage: (lang: ELanguage) => void;
  }) => {
    const { t } = useTranslation();
    return (
      <li
        className='p-2 text-blue-500 leading-none hover:text-red-500 transition-colors duration-300'
        onClick={() => changeLanguage(lang)}
      >
        {t('language.' + lang)}
      </li>
    );
  }
);
export default Language;
