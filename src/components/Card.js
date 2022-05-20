import React, {useState} from 'react';
import CardThumbnail from './../../images/CardMedia.png';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';

export default function Card({title, selected, onMouseEnter, onMouseLeave}) {
  const [hover, setHover] = useState(false)
  const [checkBoxChecked, setCheckBoxChecked] = useState(selected)

  const handleMouseOver = (e) => {
    setHover(true)
    onMouseEnter(e)
  }

  const onCheck = () => {
    setCheckBoxChecked(!checkBoxChecked)
  }

  const handleMouseLeave = (e) => {
    setHover(false)
    onMouseLeave(e)
  }

  return (
    <div
      onMouseEnter={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className={`card ${hover ? 'hover' : null}`}
    >
      <div className='image'>
        <img src={CardThumbnail}/>
      </div>
      <div className='body'>
        <FormControlLabel
          className={'label'}
          control={
            <Checkbox
              checked={checkBoxChecked}
              onChange={onCheck}
              style={{
                color: "#21B6A8",
              }}
            />
          }
          label={title}
        />
      </div>
    </div>
  );
}
