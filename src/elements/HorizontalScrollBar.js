import { Box, Typography  } from '@mui/material';
import { useContext }  from 'react';
import BodyPart from './BodyPart';
import {ScrollMenu, VisibilityContext} from 'react-horizontal-scrolling-menu';
import LeftArrowIcon from '../assets/icons/left-arrow.png';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import ExcerciseCard from './ExerciseCard';

const LeftArrow = () => {
  const {  scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="right-arrow">
      <img src={LeftArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="left-arrow">
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};


function HorizontalScrollBar({data, setBodyPart, bodyPart, isBodypart}) {
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((part) => (
        <Box
        key={part.id || part}
        itemID={part.id || part}
        title={part.id || part}
        m='0 40px'>
          {isBodypart ? <BodyPart part={part} setBodyPart={setBodyPart} bodyPart={bodyPart} /> : <ExcerciseCard exercise={part} />}
          </Box>
      ))}
    </ScrollMenu>
  )
}

export default HorizontalScrollBar