import { useEffect, useState } from "react"
import axios from "axios"


interface OperationTypes {
  id: string
  type: string
  description: string
  cost: number
}


interface OperationTypeDropDownTypes {
  onChange: (value: string) => void
}

const OperationTypeDropDown: React.FC<OperationTypeDropDownTypes> = ({ onChange }) => {

  const [operationTypes, setOperationTypes] = useState<OperationTypes[]>([])

  const fetchData = async () => {
    try {
      const { data } = await axios.get('/api/operations/types')
      setOperationTypes(data || [])
      
    } catch (error) {
      console.log('Error loading data', error)
    }
  }


  const _onChange = ({ target: { value } }: any) => {
    onChange(value)
  } 


  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="flex-col py-20 ">
      <label >Operation Type:</label>
      <br/>
      <select name="cars" id="cars" onChange={_onChange} >
        <option value=""> Select Operation Type </option>
        { operationTypes.length && 
        operationTypes.map((operationType) => (<option key={operationType.id} value={operationType?.id}>{`${operationType?.description} -- Cost: ${operationType.cost}` }</option>))}
        
      </select>
    </div>
  ) 
}

export default OperationTypeDropDown
