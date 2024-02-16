
import React from 'react'

export default function ResultCard({set,value,twod,time}) {
  return (
    <div className='mb-5'>
            <div className="bg-green-200 rounded-lg px-3 h-[150px]">
              <div className="text-center text-3xl border-b-[1px] border-b-white p-2">
                {time}
              </div>

              <div className="flex justify-between  ">
                <div className="text-center w-full flex flex-col gap-5">
                  <div>set</div>
                  <div className="text-2xl font-bold text-blue-800">{set}</div>
                </div>
                <div className="text-center w-full flex flex-col gap-5">
                  <div>value</div>
                  <div className="text-2xl font-bold text-blue-800">{value}</div>
                </div>
                <div className="text-center w-full flex flex-col gap-5">
                  <div>2D</div>
                  <div className="text-2xl font-bold text-red-500">{twod}</div>
                </div>
              </div>
            </div>
          </div>
  )
}
