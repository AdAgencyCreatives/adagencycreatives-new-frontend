'use client';
import Accordion from 'components/Accordion';
import ContentLinePreloader from 'components/ContentLinePreloader';
import TailwindCircularLoader from 'components/TailwindCircularLoader';
import useDirectoryFaqs from 'hooks/useFaqs';
import { useEffect, useState } from 'react';

const FAQ = () => {

  const { directoryFaqs, directory_loading, getDirectoryFaqs } = useDirectoryFaqs();

  useEffect(() => {
    getDirectoryFaqs();
  }, []);

  return (
    <section className="faq-section flex flex-col">
      <div className="rounded-4xl border-(--ad-gray) border-1 shadow-(--ad-box-shadow) bg-black/50 backdrop-blur faqs flex-1">
        <div className="text-right text-brand-yellow font-semibold mb-8 text-lg 3xl:text-[32px] 4xl:text-[42px]">
          faq
        </div>
        {(directoryFaqs && directoryFaqs?.length > 0) ? (<>
          <Accordion items={directoryFaqs} />
        </>) : (<>
          <ContentLinePreloader className='' />
          <ContentLinePreloader className='' />
          <ContentLinePreloader className='' />
          <ContentLinePreloader className='' />
        </>)}
        {directory_loading && (
          <section className="max-sm:mt-[1.5rem] mt-[2.5rem] md:mt-[3.049rem] xl:mt-[3.335rem] 2xl:mt-[3.516rem] 3xl:mt-[4.688rem] 4xl:mt-[6.25rem]">
            <div className="flex justify-center align-center">
              <TailwindCircularLoader />
            </div>
          </section>
        )}
      </div>
      <p className="footer font-inter uppercase transition delay-150 duration-300 ease-in-out text-[#6E6E6E] hover:text-[#FFFFFF] text-center">© {(new Date()).getFullYear()} Ad Agency Creatives. <br className="md:hidden" />All Rights Reserved.</p>
    </section>
  );
}

export default FAQ;
