import { useState } from 'react'
import Dropdown from './Dropdown'
import DropdownItem from './DropdownItem'
import countryData from '../CountryData'

const Converter = () => {
  const [country] = useState(countryData)
  console.log(country.code)
  return (
    <main className="mx-auto bg-[#FFFFFF] dark:bg-[#2D2D2D] dark:text-[#BDBDBD] box-border min-w-[1248px] px-[60px] py-[95px] rounded-lg shadow-md">
      <div className="flex justify-between">
        <div className="flex flex-col font-[Poppins] relative">
          <label htmlFor="amount">Amount</label>
          <input
            className="bg-[#F5F5F5] dark:bg-[#1E1E1E] dark:border-[#444444] border border-[#E0E0E0] rounded-md py-[14px] pl-[12px] min-w-sm focus:outline-none focus:ring-0 focus:border-[#BDBDBD] placeholder-[#666666] "
            type="text"
            id="amount"
            name="amount"
            placeholder="Enter amount"
          />
          <Dropdown
            content={
              <>
                {country.map((country) => (
                  <DropdownItem key={country.code}>{country.code}</DropdownItem>
                ))}
              </>
            }
          />
        </div>
        <div>
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-current text-[#2563EB] dark:text-[#3B82F6] hover:text-[#0048E7] dark:hover:text-[#2563EB] transition-colors duration-300 mt-10 cursor-pointer"
          >
            <path d="M0 8.53124V7.71874C0 7.04564 0.545645 6.49999 1.21875 6.49999H19.5V4.06249C19.5 2.97745 20.8152 2.43536 21.5806 3.20069L25.6431 7.26319C26.119 7.73916 26.119 8.51083 25.6431 8.98675L21.5806 13.0493C20.8181 13.8116 19.5 13.2771 19.5 12.1875V9.75H1.21875C0.545645 9.75 0 9.20435 0 8.53124ZM24.7812 16.25H6.5V13.8125C6.5 12.7301 5.1867 12.1834 4.41944 12.9507L0.356941 17.0132C-0.11898 17.4892 -0.11898 18.2608 0.356941 18.7368L4.41944 22.7993C5.18258 23.5623 6.5 23.0261 6.5 21.9375V19.5H24.7812C25.4544 19.5 26 18.9543 26 18.2812V17.4687C26 16.7956 25.4544 16.25 24.7812 16.25Z" />
          </svg>
        </div>
        <form className="flex flex-col font-[Poppins]">
          <label htmlFor="amount">Converted to</label>
          <input
            className="bg-[#F5F5F5] dark:bg-[#1E1E1E] dark:border-[#444444] border border-[#E0E0E0] rounded-md py-[14px] pl-[12px] min-w-sm"
            type="text"
            id="amount"
            name="amount"
          />
        </form>
      </div>
    </main>
  )
}
export default Converter
