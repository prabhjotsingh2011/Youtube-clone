import React,{useState} from 'react'
import "./_header.scss";

import { FaBars } from 'react-icons/fa'
import { AiOutlineSearch } from 'react-icons/ai'
import { MdApps, MdNotifications } from 'react-icons/md'
import { useHistory } from 'react-router';




const Header = ({handleToggleSidebar}) => {






    const [input, setInput] = useState('');
    const history=useHistory()
    const handleSubmit=(e)=>{
        e.preventDefault()
        history.push(`/search/${input}`)
    }

    return (
        <div className="border border-dark header ">
            <FaBars
                className="header__menu border border-primary"
                size={26}
                onClick={()=> handleToggleSidebar()}
            />

            <img src="http://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" srcset="" className='header__logo' />

            <form onSubmit={handleSubmit} >
                <input type="text" placeholder='search'  onChange={e=> setInput(e.target.value)} />
                <button type='submit'>
                    <AiOutlineSearch size={22} />

                </button>
            </form>


            <div className="header__icons">
                <MdNotifications size={28}/>
                <MdApps size={28}/>
                <img src="https://scontent.fccu19-1.fna.fbcdn.net/v/t1.18169-9/16196015_10154888128487744_6901111466535510271_n.png?_nc_cat=103&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=NVZpEvSB__wAX_Ochg-&_nc_ht=scontent.fccu19-1.fna&oh=67493e08bd16b5e503614aef02db7ec9&oe=61AD18B3" alt="" srcset="" />
            </div>
        </div>

    )
}

export default Header
