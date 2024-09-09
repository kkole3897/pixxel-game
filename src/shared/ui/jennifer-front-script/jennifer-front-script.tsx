'use client';

import Script from 'next/script';

import { jenniferFront } from '@/shared/config';

export default function JenniferFrontScript() {
  if (process.env.NODE_ENV === 'production') {
    const initHtml = `
      (function(j,ennifer) {
        j['dmndata']=[];j['jenniferFront']=function(args){window.dmndata.push(args)};
        j['dmnaid']=ennifer;j['dmnatime']=new Date();j['dmnanocookie']=false;j['dmnajennifer']='JENNIFER_FRONT@INTG';
      }(window, '${jenniferFront.apiKey}'));
    `;
    const url = `https://d-collect.jennifersoft.com/${jenniferFront.apiKey}/demian.js`;

    return (
      <>
        <Script
          id="jennifer-front-init"
          dangerouslySetInnerHTML={{ __html: initHtml }}
        />
        <Script src={url} async />
      </>
    );
  }

  return null;
}
