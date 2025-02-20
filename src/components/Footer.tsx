import React from 'react'

const Footer = () => {
  return (
    <div className="bg-black text-white p-10">
              <div className="container mx-auto grid md:grid-cols-3 gap-10">
                  <div>
                      <h3 className="font-[900] text-base">Implenia Innovation Hub</h3>
                      <p className="mt-2">Thurgauerstrasse 101A</p>
                      <p>8152 Glattpark (Opfikon)</p>
                      <p>innovation@implenia.com</p>

                      <h3 className="font-bold mt-9">Implenia Kickbox</h3>
                      <p className="mt-2">
                          This revised version is based on Adobe Kickbox which is licensed under
                          the Creative Commons Attribution License.
                      </p>

                      <p className="mt-9">Data Protection | Imprint</p>
                  </div>

                  <div>
                      <h3 className="font-bold">Sitemap</h3>
                      <ul className="mt-2 space-y-1">
                          <li>Home</li>
                          <li>Projects</li>
                          <li>Community</li>
                          <li>Contact</li>
                      </ul>
                  </div>

                  <div>
                      <h3 className="font-bold">Contact</h3>
                      <form className="mt-4">
                          <input
                              type="email"
                              placeholder="Ihre E-Mail"
                              className="w-full p-2 bg-white text-black mb-2"
                          />
                          <textarea
                              placeholder="Ihre Nachricht..."
                              className="w-full p-2 bg-white text-black h-24"
                          />
                          <button className="bg-red text-white flex ml-auto px-6 py-2">
                              SENDEN
                          </button>
                      </form>
                  </div>
              <p className=" mt-1 text-sm">
                  Copyright © 2024 Implenia. Alle Rechte vorbehalten.
              </p>
              </div>


    </div>
  )
}

export default Footer
