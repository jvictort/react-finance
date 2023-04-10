import React from 'react';

import * as C from './style';
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from 'react-icons/fa';


import ResumeItem from '../ResumeItem/index';

 const Resume = () => {
   return (
     <C.Container>
        <ResumeItem title="Entradas" Icon={FaRegArrowAltCircleUp} />
        <ResumeItem title="Saídas" Icon={FaRegArrowAltCircleDown} />
        <ResumeItem title="Total" Icon={FaDollarSign} />
     </C.Container>
   )
 }

 export default Resume;
