import React from 'react'
import Block1 from '../Component/Block1'
import Block2 from '../Component/Block2'
import Block3 from '../Component/Block3'

function Home() {
    return (
       <div className='px-10'>
         <div className='flex flex-col lg:flex-row  my-4 gap-1'>
            <div className='lg:w-wid1 h-auto border-b-2 pb-2'>
                <Block1 type1='health' />
                <div className='flex flex-col lg:flex-row'>
                    <div className='lg:w-1/2'>
                        <Block3 type='Technology' />
                    </div>
                    <div className='lg:w-1/2'>
                        <Block3 type='Sports' />
                    </div>
                </div>
            </div>

            <div className='lg:w-wid2'>
                <Block2 type2='science'/>
            </div>
        </div>

        <div className='flex flex-col lg:flex-row  my-4 gap-1'>
        <div className='lg:w-wid2'>
                <Block2 type2='entertainment' />
            </div>
            <div className='lg:w-wid1 h-auto border-b-2 pb-2'>
                <Block1 type1='general' />
                <div className='flex flex-col lg:flex-row'>
                    <div className='lg:w-1/2'>
                        <Block3 type='business' />
                    </div>
                    <div className='lg:w-1/2'>
                        <Block3 type='science' />
                    </div>
                </div>
            </div>
        </div>
       </div>
    )
}

export default Home
