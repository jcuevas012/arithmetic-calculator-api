import { OperationService } from "../OperationService"


describe(' OperationService executeOperation test cases', function () {


  it('OperationService.executeOperation return undefined', async () => {
    const operationService = new OperationService(null, null, null)

    const result = await operationService.executeOperation(null, {
      firstValue: 10,
      secondValue: 20,
      operationId: ''
    })

    expect(result).toBeUndefined()
  })



  it('OperationService.executeOperation addition operation type ', async () => {
    const operationService = new OperationService(null, null, null)

    const result = await operationService.executeOperation('addition', {
      firstValue: 10,
      secondValue: 20,
      operationId: '1234'
    })

    expect(result).toBe("30")
  })

  it('OperationService.executeOperation subtraction operation type ', async () => {
    const operationService = new OperationService(null, null, null)


    const result = await operationService.executeOperation('subtraction', {
      firstValue: 20,
      secondValue: 10,
      operationId: '1234'
    })

    expect(result).toBe("10")
  })

  it('OperationService.executeOperation subtraction operation type ', async () => {
    const operationService = new OperationService(null, null, null)


    const result = await operationService.executeOperation('subtraction', {
      firstValue: 20,
      secondValue: 10,
      operationId: '1234'
    })

    expect(result).toBe("10")
  })

  it('OperationService.executeOperation multiplication operation type ', async () => {
    const operationService = new OperationService(null, null, null)


    const result = await operationService.executeOperation('multiplication', {
      firstValue: 5,
      secondValue: 5,
      operationId: '1234'
    })

    expect(result).toBe("25")
  })



  it('OperationService.executeOperation division operation type ', async () => {
    const operationService = new OperationService(null, null, null)


    const result = await operationService.executeOperation('division', {
      firstValue: 100,
      secondValue: 2,
      operationId: '1234'
    })

    expect(result).toBe("50")
  })

  it('OperationService.executeOperation square_root operation type ', async () => {
    const operationService = new OperationService(null, null, null)


    const result = await operationService.executeOperation('square_root', {
      firstValue: 4,
      secondValue: 4,
      operationId: '1234'
    })

    expect(result).toBe("2")
  })


  // it('OperationService.executeOperation random_string operation type ', async () => {
  //   const operationService = new OperationService(null, null, null)


  //   const result = operationService.executeOperation('random_string', {
  //     firstValue: 4,
  //     secondValue: 4,
  //     operationId: '1234'
  //   })

  //   expect(result).toBe("2")
  // })

})
