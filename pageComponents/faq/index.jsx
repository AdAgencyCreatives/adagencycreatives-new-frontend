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
    <section className="max-w-[1600px] mx-auto px-10 pt-40">
      <div className="rounded-3xl border-(--ad-gray) border-1 shadow-(--ad-box-shadow) bg-black/50 backdrop-blur p-10 h-screen">
        <div className="text-right text-yellow-400 text-2xl font-semibold mb-8">
          faq
        </div>

        <Accordion items={faqItems} />
      </div>
    </section>
  );
}

export default FAQ;
