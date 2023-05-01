import { useEffect, useState } from "react"
import axios from "axios"

const OperationTypeDropDown: React.FC = () => {

  const [operationTypes, setOperationTypes] = useState([])

  const fetchData = async () => {
    try {
      const { data } = await axios.get('/api/operations/types')
      setOperationTypes(data || [])
      
    } catch (error) {
      console.log('Error loading data', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])


  return (
    <div className="flex-col py-20 ">
      <label >Operation Type:</label>
      <br/>
      <select name="cars" id="cars">
        { operationTypes.length && 
        operationTypes.map((operationType) => (<option key={operationType.id} value={operationType?.id}>{operationType?.type}</option>))}
        
      </select>
    </div>
  ) 
}

export default OperationTypeDropDown
