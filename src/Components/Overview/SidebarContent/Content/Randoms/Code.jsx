import React, { useState } from 'react';

// components
import OverviewFooter from '../../../../../Shared/OverviewFooter';
import ContentHeader from '../../../../../Shared/ContentHeader';

// contents for scrollspy
import { randomContents } from '../../../../../Utils/ContentsConfig/RandomContent';
import { useScrollSpy } from '../../../../../CustomHooks/useScrollSpy';

// react helmet
import { Helmet } from 'react-helmet';

// showing the code
import Showcode from '../../../../../Shared/Component/ShowCode.jsx';

import ComponentDescription from "../../../../../Shared/Component/ComponentDescription.jsx";
import ToggleTab from "../../../../../Shared/Component/ToggleTab.jsx";
import ComponentWrapper from "../../../../../Shared/Component/ComponentWrapper.jsx";
import ContentNavbar from "../../../../../Shared/Component/ContentNavbar.jsx";

const Code = () => {
  const sectionIds = randomContents.map((item) => item.href.slice(1));
  const activeSection = useScrollSpy(sectionIds);

  const [codePreview, setCodePreview] = useState(true);
  const [codeCode, setCodeCode] = useState(false);

  return (
    <>
      <aside className='flex items-start justify-between gap-6 w-full 640px:pl-[2.5rem] px-6 640px:px-10'>
        <div>
          <ContentHeader text={'Code'} id={'code'} />

          <ComponentDescription text='This is a code display component. Showcase code snippets with
            clarity and formatting.'/>

            <ToggleTab preview={codePreview} code={codeCode} setCode={setCodeCode} setPreview={setCodePreview}/>

          <ComponentWrapper>
            {codePreview && (
                <div className='p-8 mb-4 flex items-center flex-col gap-5 justify-center'>
                  <div className='bg-[#d1d1d180] dark:bg-slate-800 dark:text-[#abc2d3] text-[#000000] rounded-md py-1 px-4 tracking-wider font-mono font-[500]'>
                    npm i @zenui
                  </div>
                </div>
            )}

            {codeCode && (
                <Showcode
                    code='
<div className="bg-[#d1d1d180] text-[#000000] dark:bg-slate-800 dark:text-[#abc2d3] rounded-md py-1 px-4 tracking-wider font-sans font-[600]">
     npm i @zenui
</div>
                '
                />
            )}
          </ComponentWrapper>

          <OverviewFooter
            backUrl='/components/ads-card'
            backName='ads card'
            forwardName='snippet'
            forwardUrl='/components/snippet'
          />
        </div>

        <ContentNavbar contents={randomContents} activeSection={activeSection}/>

      </aside>
      <Helmet>
        <title>Randoms - Code</title>
      </Helmet>
    </>
  );
};

export default Code;
