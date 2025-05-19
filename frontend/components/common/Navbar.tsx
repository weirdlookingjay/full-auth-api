"use client"

import { useRouter, usePathname } from 'next/navigation'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import { useLogoutMutation } from '@/redux/features/authApiSlice'
import { logout as setLogout } from '@/redux/features/authSlice'
import { NavLink } from "@/components/common";

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname(); // <-- ENSURE THIS IS PRESENT
  const dispatch = useAppDispatch();
  const [logout] = useLogoutMutation();
  const { isAuthenticated, isLoading } = useAppSelector(state => state.auth);

 
  // Helper functions
  const handleLogout = () => {
    logout(undefined).unwrap().then(() => {
      dispatch(setLogout());
    }).finally(() => {
      router.push("/");
    });
  };

  const isSelected = (path: string) => pathname === path;

  const authLinks = (isMobile: boolean) => (
    <>
      <NavLink
        isSelected={isSelected('/dashboard')}
        isMobile={isMobile}
        href="/dashboard"
      >
        Dashboard
      </NavLink>
      <NavLink
        isMobile={isMobile}
        onClick={handleLogout}
      >
        Logout
      </NavLink>
    </>
  );
  const guestLinks = (isMobile: boolean) => (
    <>
      <NavLink
        isSelected={isSelected('/auth/login')}
        isMobile={isMobile}
        href="/auth/login"
      >
        Login
      </NavLink>
      <NavLink
        isSelected={isSelected('/auth/register')}
        isMobile={isMobile}
        href="/auth/register"
      >
        Register
      </NavLink>
    </>
  );

  if (isLoading) {
    // Skeleton for banner and two links
    return (
      <nav className="bg-gray-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex shrink-0 items-center">
                <div className="h-6 w-24 bg-gray-700 rounded animate-pulse" />
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <div className="h-6 w-16 bg-gray-700 rounded animate-pulse" />
                  <div className="h-6 w-20 bg-gray-700 rounded animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }

 

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                  ) : (
                    <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex shrink-0 items-center">
                  <NavLink href="/" isBanner>Full Auth</NavLink>
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    {isAuthenticated ? authLinks(false) : guestLinks(false)}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {isAuthenticated ? authLinks(true) : guestLinks(true)}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}

export default Navbar;