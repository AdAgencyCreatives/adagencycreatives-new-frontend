'use client';
import Accordion from 'components/Accordion';
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
        {directory_loading && (
          <section className="pt-31 pb-21 2xl:pb-36 2xl:pt-40 3xl:pb-44 3xl:pt-33 4xl:pb-40 4xl:pt-50">
            <div className="flex justify-center align-center">
              <TailwindCircularLoader size={10} />
            </div>
          </section>
        )}
        <Accordion items={directoryFaqs} />
      </div>
      <p className="footer font-inter uppercase transition delay-150 duration-300 ease-in-out text-[#6E6E6E] hover:text-[#FFFFFF] text-center">© {(new Date()).getFullYear()} Ad Agency Creatives. <br className="md:hidden" />All Rights Reserved.</p>
    </section>
  );
}

export default FAQ;
