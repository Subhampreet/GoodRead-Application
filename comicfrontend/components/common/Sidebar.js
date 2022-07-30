import React from 'react';
import {TbArrowsSort} from 'react-icons/tb';
import {GrHomeRounded} from 'react-icons/gr';
import {FiCompass} from 'react-icons/fi';
import {AiOutlineHeart} from 'react-icons/ai';
import {BsPencilSquare} from 'react-icons/bs';
import {IoSettingsOutline} from 'react-icons/io5';



function Sidebar() {
  return (
    <div className='sidebar'>
        <div className='body'>
            <div className='main'>
                <div className='top'>
                    <div className='head'>
                        <h2>New Releases</h2>
                        <div className='sort'>
                            <p>Sort By</p>
                            <TbArrowsSort className='icon' /> 
                        </div>
                    </div>
                    <div className='top-body'>
                        <div className='release'>
                            <div className='release-body'>
                                <span className='rating'>4.5</span>
                                <h4>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</h4>
                                <img src = "https://www.spieltimes.com/wp-content/uploads/2022/06/Hunter-x-Hunter-Main-Characters-FT.png" />                               
                            </div>                            
                        </div>
                        <div className='release'>
                            <div className='release-body'>
                                <span className='rating'>4.0</span>
                                <h4>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</h4>
                                <img src = "https://store-images.s-microsoft.com/image/apps.21512.67608231327735149.580cd5a5-bd90-4a2e-a3cc-61b89be5868a.5924a2fc-7bdc-4a64-9416-9c7b77b7c1a4?q=90&w=480&h=270" />
                                
                            </div>                            
                        </div>                        
                    </div>
                </div>
                <div className='bottom'>
                    <div className='head'>MENU</div>
                    <div className='menu-item active'>
                        <GrHomeRounded className='icon'/>
                        <h4 >Home</h4>
                    </div>
                    <div className='menu-item'>
                        <FiCompass className='icon' />
                        <h4>Discover</h4>
                    </div>
                    <div className='menu-item'>
                        <AiOutlineHeart className='icon' />
                        <h4>Favourites</h4>
                    </div>
                    <div className='menu-item'>
                        <BsPencilSquare className='icon' />
                        <h4>Write</h4>
                    </div>
                    <div className='menu-item'>
                        <IoSettingsOutline className='icon' />
                        <h4>Settings</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Sidebar