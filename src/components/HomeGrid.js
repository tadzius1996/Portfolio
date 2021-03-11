import React, {useEffect} from 'react'
import './HomeGrid.css'

export const HomeGrid = () => {

    return (
        <div className='mt-xxxl'>
             <div className='grid'>
               <div className='item1'><h1 className='name'>UpScript</h1><span className='subName'>Brand, Website</span></div>
               <div className='item2'><h1 className='name'>Hive</h1><span className='subName'>Brand, Website</span></div>
               <div className='item3'><h1 className='name'>Skupos</h1><span className='subName'>Brand, Website</span></div>
               <div className='item4' ><img className='pic' src='/image.png'/><img className='gif' src='source.gif'/><h1 className='name'>Shepper</h1><span className='subName'>Brand, Website</span></div>
               <div className='item5'><h1 className='name2'>Conductor</h1><span className='subName2'>Brand, Website</span></div>
               <div className='item6'><h1 className='name'>SeedLegals</h1><span className='subName'>Brand, Website</span></div>
               <div className='item7'><h1 className='nameLast'>See more work</h1></div>
             </div>
        </div>
    )
}
