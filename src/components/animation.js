import react, {useState} from 'react';

import { useSpring, animated } from 'react-spring';



function Text(props){
    const [flip, set] = useState(false);
  
    const props1 = useSpring({
      to:{opacity:0},
      from:{opacity:1},
      reset:true,
      reverse:flip,
      delay:200,
      config:{ duration: 250 },
      onRest: () => set (!flip)
    })
    return <animated.h1 style={props1}>{props.children}</animated.h1>
  }


  export default Text;