import React from "react";
import {Button,Input,Layout,Col, Row,Spin} from "antd";
import {Counter} from "./counter";
import {useCounters} from "./countersLogic";
import {FormHolder} from "../AppStyled";
import { useFormik } from "formik";
import {stepValueForm} from "./countersLogic"


export const Counters = () =>{
    const {loading,addCounter,stepValues} = useCounters();
    const formik = useFormik<stepValueForm>({ /// use formik to submit the form 
        initialValues: {
            stepValue : 0
        },
        onSubmit: addCounter,
      });
    
    const { Header,  Content } = Layout;  /// destruct Header and Content from antd Layout 

      
    return (
    <Layout>
        <Header>
            <FormHolder>
                <form onSubmit={formik.handleSubmit}>
                    <Row gutter={16}  >                            
                        <Col span={8}   >
                            <Input  // to get the stepValue from user
                                type="number" //the type of entery has to be a number either positive or negative 
                                step="0.01"  // will accept up to 2 floating points
                                name={'stepValue'}
                                onChange={formik.handleChange}
                                
                                placeholder={'please enter step value'} 

                            />
                        </Col>
                        <Col span={2}   >
                            <Button danger type="primary" htmlType={'submit'}  >
                                {loading ? <Spin /> : "Add Counter"}                                
                            </Button>
                        </Col>                
                    </Row>
                </form>
            </FormHolder>
        </Header>
        <Content>
            <Row >
                {stepValues  && stepValues.map((step,index)=>( /// to show all the counters which have been made till now
                <Col span={8} key={index} >  
                    <Counter step={step} id={index} />
                </Col>
                ))}
            </Row>
        </Content>
    </Layout>
    )
}


