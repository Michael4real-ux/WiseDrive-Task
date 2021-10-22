import { getVehicles } from "../src/wisedriveController";


describe("Vehicle Matching Algorithm  Test",()=>{
    test('Test if the input entered for the search is not valid ', ()=> {
        expect(getVehicles('40D','2232-4-6')).toBe('No car found')
    })
    test("Test if the input entered for the search is valid",()=>{
        expect(getVehicles("530D", "2002-04-03")).not.toHaveLength(0)
    })
    
  
    test("Test when one typename matches with search text return 2 carId",()=>{
       expect(getVehicles.length).toBe(2)
    })

    test("Test if it will return truthy value  ",()=>{
        expect(getVehicles("530D", "2002-04-03")).toBeTruthy()
      
    })

    test("Test if the typename input is not entered in the searh ", ()=>{
        expect(getVehicles("", "2002-04-03")).toBe('No car found')
    })

    test("Test if the date input is not entered for the search ", ()=>{
        expect(getVehicles("530D", "")).toBe('No car found')
    })

    

})