import React from 'react'
import BoxNumber from './BoxNumber'

const DetailFootTime = () => {
  return (
    <div>
         <div>
        <div className="bg-[#16171b] mt-8 rounded-lg">
          <Header name="FOOTBALL" />
          <div className="flex border-b">
            <div className="w-[10%] border-r my-2">
              <div className="w-[60%] mx-auto">
                <h2>19:30</h2>
                <p>22 apr</p>
              </div>
            </div>
            <div className="w-[40%] border-r my-2">
              <div className="w-[90%] mx-auto">
                <h2>Roma</h2>
                <h2>Atalanta</h2>
              </div>
            </div>
            <div className="w-[20%] border-r my-2 flex justify-evenly items-center">
              <BoxNumber num="4.00" />
              <BoxNumber num="4.10" />
              <BoxNumber num="1.85" />
            </div>
            <div className="w-[20%] border-r my-2 flex justify-evenly items-center">
              <BoxNumber num="3.5" />
              <BoxNumber num="3.5" />
              <BoxNumber num="3.5" />
            </div>
            <div className="w-[10%] flex items-center justify-center">
              <h2>+1406</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailFootTime