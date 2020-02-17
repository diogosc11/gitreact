import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Box from '@material-ui/core/Box';
import { StyledTypography, Button } from './styled';


const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon />,
    label: 'Very Dissatisfied',
  },
  2: {
    icon: <SentimentDissatisfiedIcon />,
    label: 'Dissatisfied',
  },
  3: {
    icon: <SentimentSatisfiedIcon />,
    label: 'Neutral',
  },
  4: {
    icon: <SentimentSatisfiedAltIcon />,
    label: 'Satisfied',
  },
  5: {
    icon: <SentimentVerySatisfiedIcon />,
    label: 'Very Satisfied',
  },
};


function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function CustomizedRatings() {
  const [rate, setRate] = useState(null);
  const [text, setText] = useState('');

  function getRate(){
    if(!rate){
      alert('Enviar nota padrão ?')
      setRate(3)
    }
    if(Number(rate) === 1){
      setText('Lixo completo')
    }
    if(Number(rate) === 2){
      setText('Semi lixo')
    }
    if(Number(rate) === 3){
      setText('Normal')
    }
    if(Number(rate) === 4){
      setText('Semi Topson')
    }
    if(Number(rate) === 5){
      setText('Topzeira das baladas')
    }
    console.log(text)
  }

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <StyledTypography component="legend">Gostou do ToDoList ?</StyledTypography>
        <Rating
          id="rating"
          name="customized-empty"
          defaultValue={3}
          precision={1}
          emptyIcon={<StarBorderIcon fontSize="inherit" />}
          onChange={(event)=>{setRate(event.target.value)}}
        />
        <br />
        <Button onClick={() => getRate()}><strong>Enviar Avaliação</strong></Button>
        
        <StyledTypography>{text}</StyledTypography>
      </Box>

    </div>
  );
}