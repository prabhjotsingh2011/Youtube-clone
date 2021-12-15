import React,{useState} from 'react'
import "./_categoriesBar.scss"
import keywords from './keywords.js'
import { useDispatch } from 'react-redux'
import { getPopularVideos, getVideosByCategory } from '../../redux/actions/videos.action'
const CategoriesBar = () => {

    const [activeElement, setActiveElement] = useState('All')

    const dispatch=useDispatch()

    const handleClick = (value) => {
        setActiveElement(value)
        if(value === 'All')
            dispatch(getPopularVideos())
        else{
            dispatch(getVideosByCategory(value))
        }
    }
    return (
        <div className='CategoriesBar'>
            {
                keywords.map((value, i) => (
                    <span
                        key={i}
                        onClick={() => handleClick(value)}
                        className={activeElement === value ? 'active' : ''}
                    >
                        {value}
                    </span>
                ))
            }
        </div>
    )
}

export default CategoriesBar
