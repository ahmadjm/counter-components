import React from "react";
import { Card ,Button} from 'antd';
import {CounterWrapper} from "../AppStyled";
import {useCounterLogic} from "./counterLogic";/// importing counter hook 


export const Counter = (props:propsType)=>{
    const {step,id} = props; /// destructing props and catching step value
    const {startToCount,counter} =useCounterLogic(step); /// our hook to get the function and counter value 
    return(
        <CounterWrapper>
            <Card title={"Step " + (id+1)} >
                <section>
                    <p>{counter}</p>   
                    <Button danger type="primary" block  onClick={()=>startToCount()} >Run</Button>
                </section>
            </Card>
        </CounterWrapper>   
    )
}

interface propsType {
    step :number;
    id :number;
}