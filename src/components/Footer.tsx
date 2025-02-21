import React from 'react'
import CommonButton from './common/CommonButton';
import { FOOTER_LIST } from '@/utils/helper';
import Link from 'next/link';

const Footer = () => {
    const year =  new Date().getFullYear();
  return (
      <div id='contact' className="bg-black text-white lg:pt-[138px] md:pb-[66px] md:pt-20 py-12">
              <div className="container max-w-[1140px] px-4 mx-auto grid md:grid-cols-3 gap-10">
                  <div>
                      <h3 className="font-[900] text-base">Implenia Innovation Hub</h3>
                      <p>Thurgauerstrasse 101A</p>
                      <p>8152 Glattpark (Opfikon)</p>
                      <p>innovation@implenia.com</p>

                      <h3 className="font-bold mt-9">Implenia Kickbox</h3>
                      <p>
                          This revised version is based on Adobe Kickbox which is licensed under
                          the Creative Commons Attribution License.
                      </p>

                      <p className="mt-9">Data Protection | Imprint</p>
                  </div>

                  <div>
                      <h3 className="font-[900]">Sitemap</h3>
                  <ul className="mt-2 text-base">
                      {FOOTER_LIST.map((item) => (
                          <li key={item.link} id={item.link}>
                              <Link href={item.link}> {item.label}</Link>
                              
                          </li>
                      ))}
                  </ul>
                  </div>

                  <div>
                      <h3 className="font-bold">Contact</h3>
                      <form className="mt-4 max-w-[273px]">
                          <input
                              type="email"
                              placeholder="Ihre E-Mail"
                              className="max-w-[189px] w-full h-[50px] p-2 bg-white text-black placeholder:text-black mb-2"
                          />
                          <textarea
                              placeholder="Ihre Nachricht..."
                          className="max-w-[273px] w-full p-2 bg-white text-black h-[121px] placeholder:text-black"
                          />
                      <CommonButton text='SENDEN' myClass='!bg-red !text-white !flex md:!ml-auto !px-[22px] !py-[6px] !rounded-none hover:!text-red hover:!bg-white !text-sm border !border-red'/>
                      </form>
                  </div>
              <p className=" mt-1 text-sm whitespace-nowrap">
                  Copyright © {year} Implenia. Alle Rechte vorbehalten.
              </p>
              </div>


    </div>
  )
}

export default Footer
