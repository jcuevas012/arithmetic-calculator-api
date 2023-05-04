import { Operation } from "../../entities/Operation"
import { OperationService } from "../OperationService"


describe(' OperationService test cases', function () {


    it('OperationService.executeOperation ', async () => {
        const operationService = new OperationService(null, null, null)

        const result = operationService.executeOperation(new Operation(), {
          firstValue: 10,
          secondValue: 20,
          operationId: ''
        })

        expect(result).toBeUndefined()
    })
})

