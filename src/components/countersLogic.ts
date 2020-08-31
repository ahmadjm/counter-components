import {FormikHelpers} from "formik";
import {useState} from "react";

export const useCounters = ():UseCounters =>{
    const [loading,setLoading] = useState(false);
    const [stepValues,setStepValues] = useState<number[]>(); /// set the step values as a array of state 

    const addCounter = (values: stepValueForm, helper: FormikHelpers<stepValueForm>)=>{ /// on submit of the form
        try{
            setLoading(true);
            if(stepValues?.length){
                stepValues.push(values.stepValue); /// if lenght is more than one push at the end of array
                setStepValues(stepValues);
            }
            else
                setStepValues([values.stepValue]);     /// not make an aray with first field stepValues
        }
        catch(e){
        }finally{
            setLoading(false);
            helper.setSubmitting(false);
        }
    }

    return{loading,addCounter,stepValues}
}
export interface stepValueForm { /// form inputs types
    stepValue : number;
}
interface UseCounters { /// useCounters hook output type
    loading :boolean;
    addCounter : (values: stepValueForm, helper: FormikHelpers<stepValueForm>)=>void;
    stepValues : number[] |undefined;
}