'use client';
import Accordion from 'components/Accordion';
import { useState } from 'react';

const faqItems = [
  { title: 'about', content: 'Change the text and add your own content, including any information that is relevant to share. Then customize the font, size and scale to make it your own.' },
  { title: 'services', content: 'Change the text and add your own content, including any information that is relevant to share. Then customize the font, size and scale to make it your own.' },
  { title: 'contact', content: 'Change the text and add your own content, including any information that is relevant to share. Then customize the font, size and scale to make it your own.' },
];

const FAQ = () => {
  return (
    <section className="mx-auto px-10 pt-40">
      <div className="rounded-4xl border-(--ad-gray) border-1 shadow-(--ad-box-shadow) bg-black/50 backdrop-blur py-6 px-6 md:py-30 md:px-36 h-screen">
        <div className="text-right text-[#FFCD1A] font-semibold mb-8 text-lg 3xl:text-[32px] 4xl:text-[42px]">
          faq
        </div>

        <Accordion items={faqItems} />
      </div>
    </section>
  );
}

export default FAQ;
