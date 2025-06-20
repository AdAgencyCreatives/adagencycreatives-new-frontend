'use client';

import SectionHeading from 'components/SectionHeading';
import TailwindCircularLoader from 'components/TailwindCircularLoader';
import useMentorResources from 'hooks/useMentorResources';
import useMentorTopics from 'hooks/useMentorTopics';
import ResourceLoopItem from 'pageComponents/resources/loop/item';
import { useEffect } from 'react';

const CreativeResources = ({ slug, path }) => {

  const { mentorTopics, getMentorTopics } = useMentorTopics(false);
  const { mentorResources, getMentorResources } = useMentorResources(false);

  useEffect(() => {
    if (path?.length > 0) {
      getMentorTopics(path, 1);
      getMentorResources(path);
    }
  }, [path]);

  const creativeResourceTitle = mentorTopics?.[0]?.title || '';
  const creativeResourceDescription = mentorTopics?.[0]?.item?.description || '';

  return (
    <>
      <section className="creative-resource-info flex flex-col">
        <SectionHeading headingContent={creativeResourceTitle} className='text-right max-sm:px-[1.8rem] px-[1.8rem] md:px-[2.196rem] xl:px-[2.401rem] 2xl:px-[2.531rem] 3xl:px-[3.375rem] 4xl:px-[4.5rem]' />
        <div className='description font-bold text-right text-white max-sm:text-[1.35rem] text-[1.35rem] md:text-[1.647rem] xl:text-[1.801rem] 2xl:text-[1.898rem] 3xl:text-[2.531rem] 4xl:text-[3.375rem] max-sm:px-[1.8rem] px-[1.8rem] md:px-[2.196rem] xl:px-[2.401rem] 2xl:px-[2.531rem] 3xl:px-[3.375rem] 4xl:px-[4.5rem]'
          dangerouslySetInnerHTML={{ __html: creativeResourceDescription }} />
      </section>
      {mentorResources?.length > 0 ? (<>
        <section className="creative-resource-items grid max-sm:grid-cols-3 grid-cols-5 max-sm:gap-[1.55rem] gap-[1.55rem] md:gap-[1.891rem] xl:gap-[2.068rem] 2xl:gap-[2.18rem] 3xl:gap-[2.906rem] 4xl:gap-[3.875rem] max-sm:mt-[4.35rem] mt-[4.35rem] md:mt-[5.306rem] xl:mt-[5.803rem] 2xl:mt-[6.117rem] 3xl:mt-[8.156rem] 4xl:mt-[10.875rem] max-sm:mb-[1.8rem] mb-[1.8rem] md:mb-[2.196rem] xl:mb-[2.401rem] 2xl:mb-[2.531rem] 3xl:mb-[3.375rem] 4xl:mb-[4.5rem] max-sm:p-[1rem] p-[1rem] md:p-[1.22rem] xl:p-[1.334rem] 2xl:p-[1.406rem] 3xl:p-[1.875rem] 4xl:p-[2.5rem]">
          {mentorResources?.map((resource, index) => (<ResourceLoopItem key={index} resource={resource} target='_blank' titleClassName='uppercase!' showDescription={true} />))}
        </section>
      </>) : (<>
        <TailwindCircularLoader size={30} />
      </>)}
    </>
  );
}

export default CreativeResources;
