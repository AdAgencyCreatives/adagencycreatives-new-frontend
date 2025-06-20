'use client';

import { useState, useEffect } from 'react';

const ImageLoader = ({ src = null, alt = '', className = '', loadingClassName='', fallback = <></> }) => {
  const [status, setStatus] = useState('loading'); // 'loading', 'loaded', 'error'

  useEffect(() => {
    if (src) {
      const img = new Image();
      img.src = src;

      const handleLoad = () => setStatus('loaded');
      const handleError = () => setStatus('error');

      img.addEventListener('load', handleLoad);
      img.addEventListener('error', handleError);

      return () => {
        img.removeEventListener('load', handleLoad);
        img.removeEventListener('error', handleError);
      };
    } else {
      setStatus('error');
    }
  }, [src]);

  return (
    <div className="image-loader">
      {status === 'loading' && <div className={`placeholder avatar max-sm:w-[6rem] w-[9.05rem] md:w-[11.039rem] xl:w-[12.073rem] 2xl:w-[12.727rem] 3xl:w-[16.969rem] 4xl:w-[22.625rem] max-sm:h-[6rem] h-[9.05rem] md:h-[11.039rem] xl:h-[12.073rem] 2xl:h-[12.727rem] 3xl:h-[16.969rem] 4xl:h-[22.625rem] ${loadingClassName}`}></div>}
      {status === 'loaded' && <img src={src} alt={alt} className={className} />}
      {status === 'error' && <>{fallback}</>}
    </div>
  );
};

export default ImageLoader;