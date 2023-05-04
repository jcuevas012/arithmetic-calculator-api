import { useState } from "react";
import OperationTypeDropDown from "./operation-dropdown"

export interface OperationPayload {
    firstValue: number;
    secondValue: number;
    operationId: string;
}

interface CalculatorFormProps {
    errors: string[];
    onChange: (data: OperationPayload) => void
    loading?: boolean
}

const CalculatorForm: React.FC<CalculatorFormProps> = ({ onChange, errors, loading }) => {
    const [firstValue, setFirstValue]  = useState(0)
    const [secondValue, setSecondValue]  = useState(0)
    const [operationId, setOperationId]  = useState('')


    const _onChange = () => {
        onChange({
            firstValue,
            secondValue,
            operationId
        })
    }

    const onChangeOperationType = (value: string) => {
        setOperationId(value)
    }

    const isValidPayload = (): boolean => !!operationId && !!firstValue && !!secondValue

    return (
            <div className="flex-col py-20 ">
                <div className="mt-10">
                    <label  className="block text-sm font-medium leading-6 text-gray-900 ">First Value</label>
                    <div className="relative mt-15 rounded-md shadow-sm">
                        <input value={firstValue} onChange={({ target: { value }}) => setFirstValue(value ? parseInt(value) : 0)} type="text" name="price" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0" />
                    </div>
                </div>
                <br/>
                <div className="mt-10">
                    <label  className="block text-sm font-medium leading-6 text-gray-900 ">Second Value</label>
                    <div className="relative mt-15 rounded-md shadow-sm">
                        <input value={secondValue} onChange={({ target: { value  }}) => setSecondValue(value ? parseInt(value) : 0)} type="text" name="price" id="price" className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0" />
                    </div>
                </div>
                <br/>
                <OperationTypeDropDown onChange={onChangeOperationType}/>
                <br/>
                <div  className="mt-10 inline-block" >
                    <button 
                     onClick={_onChange}
                     disabled={!isValidPayload()}
                     className={isValidPayload() ? 'inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700' : 'disabled inline-flex items-center justify-center px-5 py-3 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'}
                     >
                        Process Operation
                    </button>
                </div>
            </div>
            )
}

export default CalculatorForm
