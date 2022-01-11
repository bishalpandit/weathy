import React from 'react'

const UserInput = () => {
    return (
        <div className='max-w-md -ml-40 h-20 w-[300px]'>
            <form>
                <div className='flex flex-col space-y-4'>
                    <span className="text-gray-700 font-semibold">Search by City</span>
                    <input
                        type="text"
                        className="
                    mt-1
                    block
                    w-full
                    rounded-md
                    bg-gray-100
                    border-transparent
                    focus:border-gray-500 focus:bg-white focus:ring-0
                  "
                        placeholder="City"
                    />
                </div>
            </form>
        </div>
    )
}

export default UserInput
