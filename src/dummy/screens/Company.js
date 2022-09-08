import React from 'react';
import './Company.css';
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import TheDotLogo from '../assets/logos/logo_navbar.png'

function Company() {
  
  
    const navigation = [
        { name: 'Dashboard', href: '#', current: true },
        { name: 'Team', href: '#', current: false },
        { name: 'Projects', href: '#', current: false },
        { name: 'Calendar', href: '#', current: false },
      ]
      
      function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
      }
      
    const FloatingNavbar = () => {
        return(
            <Disclosure as="nav" className="flex justify-center bg-gray-800 navbar-glass" style={{ marginTop:25, borderRadius:55, marginRight:25, marginLeft:25 }}>
            {({ open }) => (
              <>
                <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 floatnavbar">
                  <div className="relative flex h-16 items-center justify-between">
                 
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                      <div className="flex flex-shrink-0 items-center">
                        <img
                          className="block h-8 w-auto lg:hidden"
                          src={TheDotLogo}
                          alt="Your Company"
                        />
                        <img
                          className="hidden h-8 w-auto lg:block"
                          src={TheDotLogo}
                          alt="Your Company"
                        />
                      </div>
                      <div className="hidden sm:ml-6 sm:block">
                        <div className="flex space-x-4">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'px-3 py-2 rounded-md text-sm font-medium'
                              )}
                              aria-current={item.current ? 'page' : undefined}
                            >
                              {item.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
      
                <Disclosure.Panel className="sm:hidden">
                  <div className="space-y-1 px-2 pt-2 pb-3">
                    {navigation.map((item) => (
                      <Disclosure.Button
                        key={item.name}
                        as="a"
                        href={item.href}
                        className={classNames(
                          item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                          'block px-3 py-2 rounded-md text-base font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Disclosure.Button>
                    ))}
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        )
    }
  
  
    return (
    <div>
        <FloatingNavbar/>
      

    </div>
  )
}

export default Company